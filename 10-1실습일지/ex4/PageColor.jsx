import React, {useState, useContext} from "react";
import "./PageColor.css"

// Context 객체 생성
const ColorContext = React.createContext(null)

function PageColor(){
  // 페이지의 테마를 나타냄
  const [isDark, setIsDark] = useState(false)

  // Context 제공 - 페이지 테마
  return (
    <ColorContext.Provider value={{isDark, setIsDark}}>
      <Page />
    </ColorContext.Provider>
  )
}

function Page(){
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

function  Header() {
  // isDark라는 Context 사용
  const {isDark} = useContext(ColorContext)
  return (
    <header className="header"
      style ={{
          backgroundColor:isDark ? 'black' : 'lightgray',
          color : isDark ? 'white' : 'black'
      }}
    >
      <h2>컨텍스트 사용강의</h2>
    </header>
  )
}

function Content() {
  const {isDark} = useContext(ColorContext)
  return (
    <content className="content"
      style={{
        backgroundColor:isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }}
    >
      <p>오늘은 리액트 10주차 강의이며, Context를 배우고 있습니다.</p>
    </content>
  )
}

// 페이지 테마 변경 기능 포함
function Footer() {
  // isDark, setIsDark()라는 Context 사용
  const {isDark, setIsDark} = useContext(ColorContext)
  const toggleColor = () => {setIsDark(!isDark)}

  return (
    <footer className="footer"
      style={{
        backgroundColor:isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }}
  >
    <button className="button" onClick={toggleColor}>색상 반전</button>
  </footer>
  )
}

export default PageColor