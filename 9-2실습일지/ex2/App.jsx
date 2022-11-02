// npm run build로 build하기 - build 폴더가 생성된다

import React, {useState, useEffect} from "react"
import './App.css'

// 웹서버 접속주소
const serverURL = "http://localhost:65020/users"


function App(){
    // 서버에서 받아올 회원정보(객체배열)를 저장하는 곳
    const [userData, setUserData] = useState(null)

    // 회원 여부 메세지 출력 제어용
    const [memberValid, setMemberValid] = useState(false)

    // 회원확인 메세지가 처음에는 출력되지 않게 하기 위해
    const [start, setStart] = useState(true)

    //const getUserData = ()=>{
    async function getUserData() {
        // let promise = fetch(serverURL)
        let res = await fetch(serverURL)
        // promise.then((res)=>res.json())
        // let data = res.json() // 이거 하면 안됨  
        let data = await res.json()

        // .then((data)=>setUserData(data))
        // .then(console.log(userData))
        setUserData(data)
        console.log(userData)
    }

    // mount시 서버데이터를 가져오도록 이벤트 처리
    useEffect(getUserData, [])

    const onSubmitHandler=(event)=>{
        event.preventDefault()
        // form에서 보내진 value 값들을 추출
        const name = event.target.name.value
        const id = event.target.id.value
        const passwd = event.target.passwd.value

        console.log("Submit버튼 클릭 후 서버로 POST 전송")

        // fetch 함수로 데이터를 서버로 전송
        fetch(serverURL, {  
            method:'POST',  // POST method
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name, id, passwd})
        })

        // fetch는 비동기 함수
        // .then 방식으로 데이터가 준비될 때까지 기다렸다가 호출
        // 등록한 데이터를 다시 가져옴
        .then(getUserData()) 
    }

    const memberCheck = (event) => {
        // submit이 되더라도 창이 다시 실행되지 않게 함
        event.preventDefault()

        // 회원확인 메세지가 출력되도록
        setStart(false)

        // form에서 보내진 value 값들을 추출
        const id = event.target.id.value
        const passwd = event.target.passwd.value

        let flag = false
        userData.forEach(element => {
            if (element.id === id && element.passwd === passwd){
                setMemberValid(true)
                flag = true
            }
            !flag && setMemberValid(false)
        });
    }

    const IsValidMember=()=>{
        return (
            <>
                {memberValid
                    ? (<p style={{color:"red"}}>회원으로 확인되었습니다.</p>)
                    : (<p style={{color:"red"}}>그런 회원은 없습니다.</p>)
                }
            </>
        )
    }

    return(
        <>
            <div>
                <h2>회원등록</h2>
                <form onSubmit={onSubmitHandler}>
                    {/*name이 서버쪽에서 받을 때 사용하는 이름*/}
                    <input type="text" name="name" placeholder="이름"/>
                    <input type="text" name="id" placeholder="아이디"/>
                    <input type="text" name="passwd" placeholder="암호"/>
                    <button type="submit">등록</button>
                </form>
            </div>
            <p></p>
            <div>
                <h2>회원확인</h2>
                <form onSubmit={memberCheck}>
                <input type="text" name="id" placeholder="아이디"/>
                    <input type="text" name="passwd" placeholder="암호"/>
                    <button type="submit">회원확인</button>
                </form>
                {/*회원확인메세지가 페이지가 맨 처음 렌더링되었을 때는 실행되지 않게 함*/}
                {start ? <></> : <IsValidMember />}
            </div>
            <p></p>
            <div>
                <h2>회원명단</h2>
                <ol>
                    {/*데이터가 수신되었는지를 확인*/}
                    {/*수신되었다면 목록으로 처리*/}
                    {/*목록의 각 요소 앞에 1. 부터 자동으로 넘버링 됨*/}
                    {(userData===null)?
                    (<p>서버에서 데이터를 가져오는 중...</p>)
                    :(
                        userData.map((user)=>(
                            <li key={user.keyid}>
                                {user.name+" "}
                                {user.id+" "}
                                {user.passwd}
                            </li>
                        ))
                    )
                }
                </ol>
            </div>
        </>
    )
}

export default App