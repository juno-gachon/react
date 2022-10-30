const Dialogs=[
  // 각 Dialog의 props
  // 총 4개의 Dialog - 경고, 인사말, 오류, 공지사항
      /*
        spec : map 함수용 index
        titleBackgroundColor : dialog제목 영역 배경색
        title : dialog title
        backgroundColor : dialog 배경색
        msgColor : 메세지 글씨 색 - 강조용
        longMsgCheck : 장문의 메세지 여부
        longMsgTitle: 장문으 메세지 시 title이 들어감
        message : 메세지 본문
        buttonText : 버튼 내용
        extraButton : 추가 버튼 생성 여부
        extraButtonText : 추가 버튼 내용
      */
      {
        spec : "error",
        titleBackgroundColor : "red",
        title : "경고",
        backgroundColor : "lightpink",
        msgColor : "darkred", // 경고 메세지 강조용
        longMsgCheck : false,
        longMsgTitle: "",
        message : "페이지 보안 문제 발견",
        buttonText : "돌아가기",
        extraButton : false,
        extraButtonText : ""
      },
      {
        spec : "greeting",
        titleBackgroundColor : "skyblue",
        title : "환영합니다",
        backgroundColor : "lightblue",
        msgcolor : "",
        longMsgCheck : false,
        longMsgTitle : "",
        message : "방문을 환영합니다",
        buttonText : "닫기",
        extraButton : true,
        extraButtonText : "login"
      },
      {
        spec : "warning",
        titleBackgroundColor : "darkorange",
        title : "오류 발생",
        backgroundColor : "lightyellow",
        msgcolor : "",
        longMsgCheck : false,
        longMsgTitle : "",
        message : "페이지 로딩 중 오류가 발견되었습니다.",
        buttonText : "진행하기",
        extraButton : true,
        extraButtonText : "돌아가기"
      },
      {
        spec : "announce",
        titleBackgroundColor : "green",
        title : "공지사항",
        backgroundColor : "lightgreen",
        msgcolor : "",
        longMsgCheck : true, // 공지사항 - 장문의 메세지
        longMsgTitle : "서비시 제공 방식이 변경됩니다",
        message : "자세한 사항은 공지사항을 확인해주세요.",
        buttonText : "확인",
        extraButton : true,
        extraButtonText : "공지사항"
      },
  ];

export default Dialogs