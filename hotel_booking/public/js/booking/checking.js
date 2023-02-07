

let booking = [
	{no: '1234', room: '슈페리어', firstyear: 2023, firstmouth : 2, firstdate: 14, lastyear: 2023, lastmouth: 2, lastdate: 16, price: 250000 , adult: 2, child : 1},
	{no: '5678', room: '슈페리어 디럭스', firstyear: 2023, firstmouth : 3, firstdate: 2, lastyear: 2023, lastmouth: 3, lastdate: 7, price: 600000 , adult: 2, child : 1},
	{no: '9012', room: '주니어 스위트 킹', firstyear: 2023, firstmouth : 2, firstdate: 16, lastyear: 2023, lastmouth: 2, lastdate: 19, price: 350000 , adult: 2, child : 1},
]

checkingbtn()

function checkingbtn(){
	let inputno = 1234
	for(let i=0;i<booking.length;i++){
		if(booking[i].no==inputno){
			document.querySelector('.c_resultbox').innerHTML = `<h2>예약하신 정보</h2>`
			document.querySelector('.c_firstday').innerHTML = 
			`${booking[i].firstyear}년 ${booking[i].firstmouth}월 ${booking[i].firstdate}일`
			document.querySelector('.c_lastday').innerHTML = 
			`${booking[i].lastyear}년 ${booking[i].lastmouth}월 ${booking[i].lastdate}일`
			document.querySelector('.c_price').innerHTML = `${booking[i].price.toLocaleString()}원`
			document.querySelector('.c_member').innerHTML = `성인 : ${booking[i].adult}명 아동: ${booking[i].child}명`
			break;
		}else{
			document.querySelector('.c_resultbox').innerHTML = `<h2>일치하는 예약번호가 없습니다.</h2>`
			document.querySelector('.c_firstday').innerHTML = ``
			document.querySelector('.c_lastday').innerHTML = ``
		}
	}
}

document.addEventListener('keyup' , ()=>{
	let a = []
	let inputbox = document.querySelectorAll('.c_inputbox')
	for(let i =0;i<inputbox.length;i++){
		if(inputbox[i].value!=''){
			a.push(inputbox[i].value)
		}
	}
	if(a.length==7){
		document.querySelector('.c_importantbox').innerHTML = '필수항목을 모두 입력하였습니다.'
		document.querySelector('.c_checkingbtn').disabled = ''
		
	}else{
		document.querySelector('.c_importantbox').innerHTML = '필수항목중 빈 값이 있습니다.'
		document.querySelector('.c_checkingbtn').disabled = 'disabled'
	}
})