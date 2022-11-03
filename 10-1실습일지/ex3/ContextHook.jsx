import React, {useContext} from "react"

// Context 객체 생성
const ThemeContext = React.createContext('light')

function ContextHookApp(){
  // Context 제공 - 색깔(배경색)
  return (
    <ThemeContext.Provider value='lavender'>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar(){
  return (
    <ThemeButton />
  )
}

function ThemeButton(){
  return (
    <div>
      <Button />
    </div>
  )
}

function Button() {
  // Context 구독 요청 - useContext hook 사용
  const value = useContext(ThemeContext)
  return (
    <div style={{
      margin:50,
      padding:50,
      backgroundColor:value
      }}
    >
      <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
      <button>확인</button> 
    </div>
  )
}

export default ContextHookApp