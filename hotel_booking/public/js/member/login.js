
let member = {id : 'qwer' , pw : 1234}

let b_loginbtn = document.querySelector('.b_loginbtn')
let b_Signupbtn = document.querySelector('.b_Signupbtn')
		
//로그인버튼 클릭 함수
function loginbtn(){
	
	let login = {
		id : document.querySelector('.b_loginId').value , 
		pw : document.querySelector('.b_loginPw').value}

	
		if( member.id != login.id || login.id == ""){
		alert('아이디를 확인 해주세요.');
		}else if(member.pw != login.pw || login.pw == ""){
		alert('비밀번호를 확인 해주세요.');
		}else {alert('로그인 성공')}


}
//회원가입 - 가입완료 버튼 클릭 이벤트

