import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "../../../src/body-scroll-lock";

function App() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogTwoVisible, setDialogTwoVisible] = useState(false);

  const open = () => {
    disableBodyScroll(document.body, {
      allowTouchMove: (el: any) => {
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
  };

  const clear = () => {
    enableBodyScroll(document.body);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            open();
            setDialogVisible(true);
          }}
        >
          open dialog
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
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
      {dialogVisible ? (
        <>
          <div className="dialog body-scroll-lock-ignore">
            <br />
            <button
              onClick={() => {
                clear();
                setDialogVisible(false);
              }}
            >
              close dialog
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                open();
                setDialogTwoVisible(true);
              }}
            >
              open dialog two
            </button>
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
          <div className="mask"></div>
        </>
      ) : null}
      {dialogTwoVisible ? (
        <>
          <div className="dialog dialogTwo body-scroll-lock-ignore">
            <button
              onClick={() => {
                clear();
                setDialogTwoVisible(false);
              }}
            >
              close dialog
            </button>
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
          <div className="mask maskTwo"></div>
        </>
      ) : null}
    </div>
  );
}

export default App;
