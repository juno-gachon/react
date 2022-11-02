/* 
	React가 회원명단을 GET method를 통해 요청
	-> server.js가 React에 응답 - 갖고 있는 객체 배열 전송

	브라우저에서 새 회원 정보를 입력 후 등록 버튼 클릭
	-> 입력된 새 회원 정보가 POST method를 통해 서버로 전송
	-> 전송된 정보를 server가 객체 배열에 저장
*/

// 모바일웹 폴더 아래에 위치

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

// express 환경설정 - JSON 요청값을 받아오기 위해

app.use(express.json())
// static 파일들의 위치를 지정
// path가 밑에 나오는 거랑 같아야 함
app.use(express.static(path.join(__dirname,'exercise/build')))
// body 부분을 추출, 객체 형태로 전달된 데이터 내에서 또다른 중첩된 객체 허용 X
app.use(bodyParser.urlencoded({extended:false}))

// 회원 번호
var keyid=3
// 회원 목록 초기값을 객체 배열로 넣어 놓음
// DB에서 데이터를 가져오게 구현해보자!
var userList =[
    {keyid:1, name:"홍길동", id:"kdhong", passwd:"1111"},
    {keyid:2, name:"박길동", id:"kdpark", passwd:"1111"}
]

const mainPage=(req,res)=>{
    // 주어진 경로의 파일을 클라이언트로 전손
    // path.join은 주소를 합쳐 하나의 문자열 형태로 리턴
    // __dirname: 현재 실행중인 폴더 경로

    // 브라우저(리액트)가 서버에게 접속하면 보내는 첫페이지
    // 즉, 빌드한 페이지
    res.sendFile(path.join(__dirname,'exercise/build/index.html'))
}

const listUsers=(req,res)=>{
    console.log("회원명단 조회요청을 받았으며, 리액트에게 명단을 보냅니다")
    // JSON 객체/배열을 클라이언트에게 그대로 보낼 때
    // JSON 응답을 한다면 res.send보다 res.json이 적절 - 불필요한 호출 1번 발생
    res.json(userList) 
}

const addUser = (req,res)=>{
    const {name, id, passwd} = req.body
    userList.push({keyid:keyid++, name, id, passwd})
    console.log("회원등록요청을 완료하였으며, 이를 반영한 전체목록입니다.")
    userList.map((user,i)=>{
        console.log(user.keyid+"."+user.name+"."+user.id+"."+user.passwd)
    })
    return res.send('success')
}

// 핸들러를 콜백함수로 매핑
// http://localhost:65010/ 로 접속시 콜백함수 mainPage가 호출됨
app.get("/", mainPage)
app.get("/users", listUsers)
app.post("/users", addUser)

// 웹서버 가동
app.listen(65010,()=>{
    console.log("_________________________________")
    console.log("(리액트 연동용) 웹서버 실행중...")
    console.log("접속주소: http://localhost:65010/")
    console.log("_________________________________")
})