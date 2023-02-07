
let booking = [
	{no: '1234', room: '슈페리어', firstyear: 2023, firstmouth : 2, firstdate: 14, lastyear: 2023, lastmouth: 2, lastdate: 16, price: 250000 , adult: 2, child : 1},
	{no: '5678', room: '슈페리어 디럭스', firstyear: 2023, firstmouth : 3, firstdate: 2, lastyear: 2023, lastmouth: 3, lastdate: 7, price: 600000 , adult: 2, child : 1},
	{no: '9012', room: '주니어 스위트 킹', firstyear: 2023, firstmouth : 2, firstdate: 16, lastyear: 2023, lastmouth: 2, lastdate: 19, price: 350000 , adult: 2, child : 1},
]

let checking = [
	{no: '1234', name: '유재석', tel: '010-1234-5678', email : 'abcd@gmail.com', number: '15478', card: '신한'},
	{no: '4567', name: '유재석', tel: '010-7657-7865', email : 'qwer@naver.com', number: '15479', card: '국민'},	
	{no: '1597', name: '유재석', tel: '010-1275-1847', email : 'zxcv@gmail.com', number: '15480', card: '우리'},
]

checking1()
checking2()

function checking1(){
	let inputno = 1234
	for(let i=0;i<booking.length;i++){
		if(booking[i].no==inputno){
			document.querySelector('.c_resultbox').innerHTML = `<h2>예약정보 확인</h2>`
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

function checking2(){
	let inputno = 1234
	for(let i=0;i<checking.length;i++){
		if(checking[i].no==inputno){
			document.querySelector('.c_name').innerHTML = `${checking[i].name}`
			document.querySelector('.c_tel').innerHTML = `${checking[i].tel}`
			document.querySelector('.c_email').innerHTML = `${checking[i].email}`
			document.querySelector('.c_num').innerHTML = `${checking[i].number}`
			document.querySelector('.c_card').innerHTML = `${checking[i].card}`
			break;
		}
	}
}