export declare type BodyScrollOptions = {
    reserveScrollBarGap?: boolean | undefined;
    allowTouchMove?: ((el: EventTarget) => boolean) | undefined;
};

export declare const clearAllBodyScrollLocks: () => void;

/**
 *
 * @param targetElement HTMLElement
 * @param options BodyScrollOptions
 * @returns void
 */
export declare const disableBodyScroll: (targetElement: HTMLElement, options?: BodyScrollOptions) => void;

/**
 * @param targetElement
 * @returns void
 */
export declare const enableBodyScroll: (targetElement: HTMLElement) => void;

export { }
