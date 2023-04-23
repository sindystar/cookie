/*

쿠키 : 사용자의 컴퓨터에 저장 되는 정보 

정보는 구둔데 클라인 언트와 서버

서버 = 쿠키, 세션
클라이언트 = 쿠키 

쿠키 이름 = 쿠키값, path="/";
해당 경로 마다 쿠키를 저장 할수 있다 
expires 삭제될 날짜 (만기될 날짜) 




*/

const popup = document.querySelector("#popup");
const btnClose = popup.querySelector(".close");
const btnDel =document.querySelector(".del");
const btnView = document.querySelector(".view");


const isCookie = document.cookie.indexOf("today=done");
//indexOf =불린값 아니라 -1 or 인덱스값
if (isCookie == -1) {
  //쿠키가 없으므로 팝업을 보이게 처리 
  popup.style.display = "block";
} else {
  //쿠키가 있으므로 팝업을 숨김 
  popup.style.display = "none";
}

btnDel.addEventListener("click", (e) => {
  e.preventDefault();

  //쿠키를 지운다는 것은 쿠키 생성 함수에서 due값을 0으로 설정 하면 현재시간 이후가 되면서 만료 되어 쿠키가 삭제 된다 

  setCookie("today", "done", 0);

});


btnView.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(document.cookie);
})




btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  //팝업의 체크 박스에 체크가 되어있는지 판별해서 변수에 저장 
  let isCheckd = popup.querySelector("input[type=checkbox]").ariaChecked;
  if (isCheckd) setCookie("today", "done", 1)

  popup.style.display = "none";
})


function setCookie(name, value, due) {
  const today = new Date();
  const date =today.getDate();
  today.setDate(date + due);
  //날짜는 => 2023.04.23
  const duedate = today.toGMTString();

  //만든 날짜를 쿠키의 만기될 날짜에 대입해서 쿠키를 셋팅 
  document.cookie = `${name}=${value}; path="/"; expires${duedate}`;

  //today=done; path="/"; expires="2023/04/24"
}