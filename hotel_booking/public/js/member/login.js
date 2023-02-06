

let member = {id : 'qwer' , pw : 1234}

let admin = {id : 'admin' , pw : 'admin' }

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
		}else {alert('로그인 성공') }
}

function adminloginbtn(){
	
	let login = {
		id : document.querySelector('.admin_id').value , 
		pw : document.querySelector('.admin_pw').value}	
	
		if( login.id != admin.id){
		alert('관리자 아이디를 확인 해주세요.');
		}else if(login.pw != admin.pw){
		alert('관리자 비밀번호를 확인 해주세요.');
		}else {alert('관리자 로그인 성공') ; location.href="../admin/admin_home.html";}

	
}