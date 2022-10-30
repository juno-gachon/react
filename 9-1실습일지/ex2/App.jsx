import React from "react"
// 범용 dialog 컴포넌트
import Dialog from "./Dialog"
// 구체화 될 dialog의 내용이 담김
import dialogs from "./Dialogs"

// Dialog들을 출력
function App() {
    return(
        <ul>
            {dialogs.map(dialog=>{
                return(
                    <li key={dialog.spec}>
                        <Dialog
                            spec = {dialog.spec}
                            titleBackgroundColor = {dialog.titleBackgroundColor}
                            title = {dialog.title}
                            backgroundColor = {dialog.backgroundColor}
                            longMsgCheck = {dialog.longMsgCheck}
                            longMsgTitle = {dialog.longMsgTitle}
                            msgColor = {dialog.msgColor}
                            message = {dialog.message}
                            buttonText = {dialog.buttonText}
                            extraButton = {dialog.extraButton}
                            extraButtonText = {dialog.extraButtonText}
                        />
                    </li>
                );
            })
            }
        </ul>
    );
}

export default App