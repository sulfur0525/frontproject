let b_Signupbtn = document.querySelector('.b_Signupbtn')

b_Signupbtn.addEventListener('click',(e)=>{
	let b_check = document.querySelector('.b_check').value;
	let b_pwcheck = document.querySelector('.b_pwcheck').value;
	let b_pwRecheck = document.querySelector('.b_pwRecheck').value;
	
	singup = {
		id : b_check,
		pw : b_pwcheck		
	}
	
	let check = true;
	
	if(b_check == "" && b_pwcheck == "" && b_pwRecheck == ""){
		alert('필수정보를 확인 해주세요') ; check = false;
	}else if (b_check == b_loginId){
		alert('이미 등록 된 아이디입니다.'); check = false;
	}else if (b_check != b_pwcheck){
		alert('비밀번호가 다릅니다.'); check = false;
	}
	
	if(check){ member.push(signup) ; alert('회원가입 되었습니다.') }
	
})

let b_Signupbtn = document.querySelector('.b_Signupbtn')

b_Signupbtn.addEventListener('click',(e)=>{
	let b_check = document.querySelector('.b_check').value;
	let b_pwcheck = document.querySelector('.b_pwcheck').value;
	let b_pwRecheck = document.querySelector('.b_pwRecheck').value;
	
	singup = {
		id : b_check,
		pw : b_pwcheck		
	}
	
	let check = true;
	
	if(b_check == "" && b_pwcheck == "" && b_pwRecheck == ""){
		alert('필수정보를 확인 해주세요') ; check = false;
	}else if (b_check == b_loginId){
		alert('이미 등록 된 아이디입니다.'); check = false;
	}else if (b_check != b_pwcheck){
		alert('비밀번호가 다릅니다.'); check = false;
	}
	
	if(check){ member.push(signup) ; alert('회원가입 되었습니다.') }
	
})