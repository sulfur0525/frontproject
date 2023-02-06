
let Signupbtn = document.querySelector('.b_Signupbtn')

let new_member = []



//회원가입 - 가입완료 버튼 클릭 이벤트
function b_Signupbtn(){
	
	let name = document.querySelector('.b_namecheck').value
	let birth = document.querySelector('#b_birthcheck').value
	let phone = document.querySelector('#b_phonecheck').value
	let idcheck = document.querySelector('.b_idcheck').value
	let	pwcheck = document.querySelector('#b_pwcheck').value
	let pw_recheck = document.querySelector('#b_pwRecheck').value
	
	let signup = { id : idcheck , pw : pwcheck}
	console.log(signup)

	
	if(pw_recheck != signup.pw  ){
		alert('비밀번호가 다릅니다.') ; return;
	}else if (signup.id == "" || signup.pw == "" || pw_recheck == ""){
		alert('아이디,비밀번호를 입력 해주세요.') ; return;
	}else if(name == "" || birth == "" || phone == ""){
		alert('회원정보를 입력 해주세요.') ; return;
	}else {alert('회원가입되었습니다.'); location.href="login.html";}		
	


}