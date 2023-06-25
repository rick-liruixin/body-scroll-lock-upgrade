"use client";
import styles from "./dialog.module.css";
import { useBodyScrollLockUpgrade } from "@/hooks/use-body-scroll-lock-upgrade";

export function Dialog({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const bodyScrollLockUpgradeRef = useBodyScrollLockUpgrade(isVisible);
  return (
    <div
      ref={bodyScrollLockUpgradeRef}
      style={{ display: isVisible ? "block" : "none" }}
      className="body-scroll-lock-ignore"
    >
      <div className={styles.dialog}>
        <br />
        <button
          onClick={() => {
            onClose();
          }}
        >
          close dialog
        </button>
        <br />
        <br />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
          Click on the Vite and React logos to learn more
          <br />
        </p>
      </div>
      <div
        className={styles.mask}
        onClick={() => {
          onClose();
        }}
      ></div>
    </div>
  );
}
