import "./Dialog.css"

function Dialog(props) {
  
  const {titleBackgroundColor, title, backgroundColor,
        msgColor, longMsgCheck, longMsgTitle, message, buttonText, 
        extraButton, extraButtonText} = props

  return (
    <div className="Dialog">
      {/*Dialog의 title 부분*/}
      <div style={{backgroundColor:titleBackgroundColor}} className="DialogTitle">
        <h1>
          {title}
        </h1>
      </div>
      {/*Dialog의 메세지 부분*/}
      <div style={{backgroundColor:backgroundColor}}>
      <div className="DialogMessage" style={{color:msgColor}}>
        {longMsgCheck ? <h3>{longMsgTitle}</h3> :<></>}
        {message}
      </div>
      </div>
      {/*Dialog의 button 부분*/}
      <div style={{backgroundColor:backgroundColor}}>
      <button>
        {buttonText}
      </button>
      {extraButton
        ? <button>{extraButtonText}</button>
        : <></>
      }
      </div>
  </div>
  )
}

export default Dialog