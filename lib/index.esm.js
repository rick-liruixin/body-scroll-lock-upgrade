/**
 * name: body-scroll-lock-upgrade
 * version: v1.1.0
 * author: Rick.li
 */
let hasPassiveEvents = false;
if (typeof window !== "undefined") {
  const passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
const isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let locks = [];
let locksIndex = /* @__PURE__ */ new Map();
let documentListenerAdded = false;
let initialClientY = -1;
let previousBodyOverflowSetting;
let htmlStyle;
let bodyStyle;
let previousBodyPaddingRight;
const allowTouchMove = (el) => locks.some((lock) => {
  if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
    return true;
  }
  return false;
});
const preventDefault = (rawEvent) => {
  const e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
const setOverflowHidden = (options) => {
  if (previousBodyPaddingRight === void 0) {
    const reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    const scrollBarGap = window.innerWidth - document.documentElement.getBoundingClientRect().width;
    if (reserveScrollBarGap && scrollBarGap > 0) {
      const computedBodyPaddingRight = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right"),
        10
      );
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarGap}px`;
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
const restoreOverflowSetting = () => {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
const setPositionFixed = () => window.requestAnimationFrame(() => {
  const $html = document.documentElement;
  const $body = document.body;
  if (bodyStyle === void 0) {
    htmlStyle = { ...$html.style };
    bodyStyle = { ...$body.style };
    const { scrollY, scrollX, innerHeight } = window;
    $html.style.height = "100%";
    $html.style.overflow = "hidden";
    $body.style.position = "fixed";
    $body.style.top = `${-scrollY}px`;
    $body.style.left = `${-scrollX}px`;
    $body.style.width = "100%";
    $body.style.height = "auto";
    $body.style.overflow = "hidden";
    setTimeout(
      () => window.requestAnimationFrame(() => {
        const bottomBarHeight = innerHeight - window.innerHeight;
        if (bottomBarHeight && scrollY >= innerHeight) {
          $body.style.top = -(scrollY + bottomBarHeight) + "px";
        }
      }),
      300
    );
  }
});
const restorePositionSetting = () => {
  if (bodyStyle !== void 0) {
    const y = -parseInt(document.body.style.top, 10);
    const x = -parseInt(document.body.style.left, 10);
    const $html = document.documentElement;
    const $body = document.body;
    $html.style.height = (htmlStyle == null ? void 0 : htmlStyle.height) || "";
    $html.style.overflow = (htmlStyle == null ? void 0 : htmlStyle.overflow) || "";
    $body.style.position = bodyStyle.position || "";
    $body.style.top = bodyStyle.top || "";
    $body.style.left = bodyStyle.left || "";
    $body.style.width = bodyStyle.width || "";
    $body.style.height = bodyStyle.height || "";
    $body.style.overflow = bodyStyle.overflow || "";
    window.scrollTo(x, y);
    bodyStyle = void 0;
  }
};
const isTargetElementTotallyScrolled = (targetElement) => targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
const handleScroll = (event, targetElement) => {
  const clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
const disableBodyScroll = (targetElement, options) => {
  if (!targetElement) {
    console.error(
      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
    );
    return;
  }
  locksIndex.set(
    targetElement,
    (locksIndex == null ? void 0 : locksIndex.get(targetElement)) ? (locksIndex == null ? void 0 : locksIndex.get(targetElement)) + 1 : 1
  );
  if (locks.some((lock2) => lock2.targetElement === targetElement)) {
    return;
  }
  const lock = {
    targetElement,
    options: options || {}
  };
  locks = [...locks, lock];
  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }
  if (isIosDevice) {
    targetElement.ontouchstart = (event) => {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = (event) => {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : void 0
      );
      documentListenerAdded = true;
    }
  }
};
const clearAllBodyScrollLocks = () => {
  if (isIosDevice) {
    locks.forEach((lock) => {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : void 0
      );
      documentListenerAdded = false;
    }
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
const enableBodyScroll = (targetElement) => {
  if (!targetElement) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  locksIndex.set(
    targetElement,
    (locksIndex == null ? void 0 : locksIndex.get(targetElement)) ? (locksIndex == null ? void 0 : locksIndex.get(targetElement)) - 1 : 0
  );
  if ((locksIndex == null ? void 0 : locksIndex.get(targetElement)) === 0) {
    locks = locks.filter((lock) => lock.targetElement !== targetElement);
    locksIndex == null ? void 0 : locksIndex.delete(targetElement);
  }
  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;
    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : void 0
      );
      documentListenerAdded = false;
    }
  }
  if (locks.length === 0) {
    if (isIosDevice) {
      restorePositionSetting();
    } else {
      restoreOverflowSetting();
    }
  }
};
export {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll
};
//# sourceMappingURL=index.esm.js.map
