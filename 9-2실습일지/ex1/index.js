import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import한 App에 html 코드가 존재

const root = ReactDOM.createRoot(document.getElementById("root"));
// 렌더링할 Id가 root인 영역을 찾기

// <React.StrictMode> -> 렌더링이 2번 된다
root.render( // 이 부분에 index.js가 html을 렌더링
        <App />
);