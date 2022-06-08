/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2022-06-08 10:06:17
 * @LastEditors: tangshuo
 * @LastEditTime: 2022-06-08 16:03:27
 */
import React, { useState } from "react";
import "./App.less";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="app-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
