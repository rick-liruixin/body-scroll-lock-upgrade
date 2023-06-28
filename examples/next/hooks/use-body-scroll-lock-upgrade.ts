import { useEffect, useRef } from "react";
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "./body-scroll-lock";

export function useBodyScrollLockUpgrade(isLock: boolean) {
  const scrollLockerUpgradeRef = useRef<any>(null);

  useEffect(() => {
    if (!scrollLockerUpgradeRef.current) {
      clearAllBodyScrollLocks();
      return;
    }
    if (isLock) {
      disableBodyScroll(scrollLockerUpgradeRef.current, {
        reserveScrollBarGap: false,
        allowTouchMove: (el: any) => {
          if (!el) return false;
          while (el && el !== document.body) {
            if (typeof el.className === "string") {
              // 弹框内部需要滚动时给该部分添上此类名，即可恢复滚动
              if (el.className.indexOf("body-scroll-lock-ignore") > -1) {
                return true;
              }
            }

            el = el.parentElement;
          }
          return false;
        },
      });
      console.log("disableBodyScroll");
    } else {
      enableBodyScroll(scrollLockerUpgradeRef.current);
    }
  }, [isLock]);

  useEffect(() => {
    const ele = scrollLockerUpgradeRef.current;
    return () => {
      if (ele) {
        enableBodyScroll(ele);
      }
    };
  }, []);

  return scrollLockerUpgradeRef;
}
