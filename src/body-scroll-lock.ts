export type BodyScrollOptions = {
  reserveScrollBarGap?: boolean | undefined;
  allowTouchMove?: ((el: EventTarget) => boolean) | undefined;
};

type PreviousBodyPositionType = {
  position: string;
  top: string;
  left: string;
  width: string;
};

interface Lock {
  targetElement: HTMLElement;
  options: BodyScrollOptions;
}

// Older browsers don't support event options, feature detect it.
let hasPassiveEvents = false;
if (typeof window !== "undefined") {
  const passiveTestOptions: any = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    },
  };
  (window as any).addEventListener("testPassive", null, passiveTestOptions);
  (window as any).removeEventListener("testPassive", null, passiveTestOptions);
}

const isIosDevice =
  typeof window !== "undefined" &&
  window.navigator &&
  window.navigator.platform &&
  (/iP(ad|hone|od)/.test(window.navigator.platform) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1));
type HandleScrollEvent = TouchEvent;

let locks: Array<Lock> = [];
let locksIndex: Map<any, number> = new Map();
let documentListenerAdded: boolean = false;
let initialClientY: number = -1;
let previousBodyOverflowSetting: string | undefined;
let previousBodyPosition: PreviousBodyPositionType | undefined;
let previousBodyPaddingRight: string | undefined;

// returns true if `el` should be allowed to receive touchmove events.
const allowTouchMove = (el: EventTarget): boolean =>
  locks.some((lock) => {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });

const preventDefault = (rawEvent: HandleScrollEvent): boolean => {
  const e: any = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

const setOverflowHidden = (options?: BodyScrollOptions) => {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    const reserveScrollBarGap =
      !!options && options.reserveScrollBarGap === true;
    const scrollBarGap =
      window.innerWidth - document.documentElement.clientWidth;

    if (reserveScrollBarGap && scrollBarGap > 0) {
      const computedBodyPaddingRight = parseInt(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("padding-right"),
        10
      );
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = `${
        computedBodyPaddingRight + scrollBarGap
      }px`;
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};

const restoreOverflowSetting = () => {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

const setPositionFixed = () =>
  window.requestAnimationFrame(() => {
    // If previousBodyPosition is already set, don't set it again.
    if (previousBodyPosition === undefined) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        width: document.body.style.width,
      };

      // Update the dom inside an animation frame
      const { scrollY, scrollX, innerHeight } = window;
      document.body.style.position = "fixed";
      document.body.style.top = `${-scrollY}px`;
      document.body.style.left = `${-scrollX}px`;
      document.body.style.width = "100%";

      setTimeout(
        () =>
          window.requestAnimationFrame(() => {
            // Attempt to check if the bottom bar appeared due to the position change
            const bottomBarHeight = innerHeight - window.innerHeight;
            if (bottomBarHeight && scrollY >= innerHeight) {
              // Move the content further up so that the bottom bar doesn't hide it
              document.body.style.top = -(scrollY + bottomBarHeight) + "px";
            }
          }),
        300
      );
    }
  });

const restorePositionSetting = () => {
  if (previousBodyPosition !== undefined) {
    // Convert the position from "px" to Int
    const y = -parseInt(document.body.style.top, 10);
    const x = -parseInt(document.body.style.left, 10);

    // Restore styles
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;
    document.body.style.width = previousBodyPosition.width;

    // Restore scroll
    window.scrollTo(x, y);

    previousBodyPosition = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
const isTargetElementTotallyScrolled = (targetElement: HTMLElement): boolean =>
  targetElement
    ? targetElement.scrollHeight - targetElement.scrollTop <=
      targetElement.clientHeight
    : false;

const handleScroll = (
  event: HandleScrollEvent,
  targetElement: HTMLElement
): boolean => {
  const clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target as EventTarget)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

/**
 *
 * @param targetElement HTMLElement
 * @param options BodyScrollOptions
 * @returns void
 */
export const disableBodyScroll = (
  targetElement: HTMLElement,
  options?: BodyScrollOptions
): void => {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error(
      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
    );
    return;
  }

  locksIndex.set(
    targetElement,
    locksIndex?.get(targetElement)
      ? (locksIndex?.get(targetElement) as number) + 1
      : 1
  );
  console.log("locksIndex", locksIndex);
  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some((lock) => lock.targetElement === targetElement)) {
    return;
  }

  const lock = {
    targetElement,
    options: options || {},
  };
  locks = [...locks, lock];

  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }

  if (isIosDevice) {
    targetElement.ontouchstart = (event: HandleScrollEvent) => {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = (event: HandleScrollEvent) => {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : undefined
      );
      documentListenerAdded = true;
    }
  }
};

export const clearAllBodyScrollLocks = (): void => {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach((lock: Lock) => {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      (document as any).removeEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : undefined
      );
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }

  locks = [];
  locksIndex.clear();
};

/**
 * @param targetElement
 * @returns void
 */
export const enableBodyScroll = (targetElement: HTMLElement): void => {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }

  locksIndex.set(
    targetElement,
    locksIndex?.get(targetElement)
      ? (locksIndex?.get(targetElement) as number) - 1
      : 0
  );
  if (locksIndex?.get(targetElement) === 0) {
    locks = locks.filter((lock) => lock.targetElement !== targetElement);
  }

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      (document as any).removeEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : undefined
      );
      documentListenerAdded = false;
    }
  }

  if (locksIndex?.get(targetElement) === 0) {
    if (isIosDevice) {
      restorePositionSetting();
    } else {
      restoreOverflowSetting();
    }
    locksIndex?.delete(targetElement);
  }
};
