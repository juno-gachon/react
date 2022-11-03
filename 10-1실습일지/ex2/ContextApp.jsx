import React from "react"

// Context 객체 생성 및 기본값 설정
const ThemeContext = React.createContext('light')

function ContextApp(){
  // Context 제공(색깔(배경색)) - Toolbar와 그 하위 컴포넌트에서 사용 가능
  return (
    <ThemeContext.Provider value='lavender'>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar(){
  return (
    <div>
      <ThemeButton />
    </div>
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
  // Context 구독 요청 - 함수 형태로
  return (
    <div>
      <ThemeContext.Consumer>
        {value => (
          <div style={{
            margin:50,
            padding:50,
            backgroundColor:value
          }}>
            <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
            <button>확인</button> 
          </div>)
        }
      </ThemeContext.Consumer>
    </div>
  )
}

export default ContextApp