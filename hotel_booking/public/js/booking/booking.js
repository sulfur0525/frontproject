//예약 배열
let bookinglist = []
//객실 배열
let room = [
	{img : '슈페리어.jpg', name : '슈페리어', price: 150000, plusPrice : 50000},
	{img : '슈페리어디럭스.jpg', name : '슈페리어 디럭스', price: 200000 , plusPrice : 50000 },
	{img : '주니어스위트쿼드.jpg', name : '주니어 스위트 쿼드', price: 350000 , plusPrice : 50000 },
	{img : '주니어스위트킹.jpg', name : '주니어 스위트 킹', price: 450000, plusPrice : 50000 },
	{img : '주니어스위트트윈.jpg', name : '주니어 스위트 트윈', price: 300000, plusPrice : 50000 },
]
let adultno = 0;
let childno = 0;

let first_year = new Date().getFullYear();
let first_month = Number(new Date().getMonth()<10? '0'+(new Date().getMonth()+1) : (new Date().getMonth()+1));
let first_date = Number(new Date().getDate()<10? '0'+new Date().getDate() : new Date().getDate());

let last_year = new Date().getFullYear();
let last_month = Number(new Date().getMonth()<10? '0'+(new Date().getMonth()+1) : (new Date().getMonth()+1));
let last_date = first_date+1




selectlist()
first_print()
last_print()

bookingdate()
print_room('슈페리어')

//상품타입 선택 버튼
function option_select(){
	document.querySelector('.c_roomoption').style.display = 'block'
	let selectroom =document.querySelector('.c_select_room').value
	print_room(selectroom)
}
// 인원수 줄이기 버튼
function prevbtn(i){
	if(i==1){
		adultno--;
		adultno = adultno<0? 0 : adultno
		document.querySelector('.c_adultno').innerHTML = adultno
	}else{
		childno--;
		childno = childno<0? 0 : childno
		document.querySelector('.c_childno').innerHTML = childno
	}
}
//인원수 더하기 버튼
function plusbtn(i){
	if(i==1){
		adultno++;
		document.querySelector('.c_adultno').innerHTML = adultno
	}else{
		childno++;
		document.querySelector('.c_childno').innerHTML = childno
	}
}

//입실날짜를 선택할 달력 출력 함수
function first_print(){
	// 2. 현재 설정된 날짜 객체
	let year = first_year
	let month = first_month
	let selectday = first_date
	
	// 3. html '요일' 구성
	let html = `<div class="c_day weekday sunday">일</div>
				<div class="c_day weekday">월</div>
				<div class="c_day weekday">화</div>
				<div class="c_day weekday">수</div>
				<div class="c_day weekday">목</div>
				<div class="c_day weekday">금</div>
				<div class="c_day weekday">토</div>`
				
		// * 1.현재 설정된 월의 마지막 일 구하는 방법
	let lastday = new Date(year, month, 0).getDate();
		// * 2. 현재 캘린더 설정된 날짜의 1일 시작요일 구하기
	let weekday = new Date(year, month-1, 1).getDay();
		//현재 날짜의 요일
	
	//console.log(weekday);
	
	// 1일 시작 전 공백 만들기
	for(let b=0; b<weekday;b++){
		html += `<div class="c_day"></div>`
	}
	// 일 만들기 [1일부터 ~ 마지막 일(월마다 다름)까지]
	for(let day=1;day<=lastday;day++){
		if(day==selectday){html += `<div class="c_day selectday" onclick="firstselcet(${year},${month},${day})">${day}</div>`
		}else{html += `<div class="c_day" onclick="firstselcet(${year},${month},${day})">${day}</div>`}
	} //for e
	// 4. 마크업 출력
	document.querySelector('.c_startmonth').innerHTML = `${year}년${month}월`;
	document.querySelector('.c_startdayBot').innerHTML = html;
	document.querySelector('.c_firstday').innerHTML = `${year}-${month}-${selectday}`
}

//퇴실날짜를 선택할 달력 출력 함수
function last_print(){
	let year = last_year
	let month = last_month
	let selectday = last_date
	let html = `<div class="c_day weekday sunday">일</div>
				<div class="c_day weekday">월</div>
				<div class="c_day weekday">화</div>
				<div class="c_day weekday">수</div>
				<div class="c_day weekday">목</div>
				<div class="c_day weekday">금</div>
				<div class="c_day weekday">토</div>`
	let lastday = new Date(year, month, 0).getDate();
		// * 2. 현재 캘린더 설정된 날짜의 1일 시작요일 구하기
	let weekday = new Date(year, month-1, 1).getDay();
	for(let b=0; b<weekday;b++){
		html += `<div class="c_day"></div>`
	}
	for(let day=1;day<=lastday;day++){
		if(day==selectday){html += `<div class="c_day selectday" onclick="lastselcet(${year},${month},${day})">${day}</div>`
		}else{html += `<div class="c_day" onclick="lastselcet(${year},${month},${day})">${day}</div>`}
	} //for e
	document.querySelector('.c_lastmonth').innerHTML = `${year}년${month}월`;
	document.querySelector('.c_lastdayBot').innerHTML = html;
	document.querySelector('.c_lastday').innerHTML = `${year}-${month}-${selectday}`
}

//입실날짜를 선택했을때 함수
function firstselcet(x,y,z){
	//오늘보다 전날일 경우 선택불가 추가예정
	first_year = x;
	first_month = y;
	first_date = z;
	first_print()
	bookingdate()
}

//퇴실날짜를 선택했을때 함수
function lastselcet(x,y,z){
	last_year = x;
	last_month = y;
	last_date = z;
	last_print()
	bookingdate()
}
//모달에서 전달 버튼 함수
function prevMonth(i){
	if(i==1){
		first_month--;
		if(first_month<=0){
			first_year--;
			first_month = 12;
		}
		first_date = 1;
		first_print();
	}else{
		last_month--;
		if(last_month<=0){
			last_year--;
			last_month = 12;
		}
		last_date = 1;
		last_print();
	}
}
//모달에서 다음달 버튼 함수
function nextMonth(i){
	if(i==1){
		first_month++;
		if(first_month>=13){
			first_year++;
			first_month = 1;
		}
		first_date = 1;
		first_print();
	}else{
		last_month++;
		if(last_month>=13){
			last_year++;
			last_month = 1;
		}
			last_date = 1;
		last_print();
	}
}

//숙박일수 함수
function bookingdate(){
	let fisttime = new Date(`${first_year}/${first_month}/${first_date}`);
	let lasttime = new Date(`${last_year}/${last_month}/${last_date}`);
	let diftime = lasttime.getTime() - fisttime.getTime();
	let diffDate = diftime / (24 * 60 * 60 * 1000);
	if(diffDate<=0){
		alert('이전 날짜는 선택 불가합니다.')
		first_year = last_year;
		first_month = last_month;
		if(last_date==1){
			last_date++;
			first_date = last_date-1;
		}else{first_date = last_date-1;}
		first_print()
		bookingdate()
	}else{
		document.querySelector('.c_bookingdate').innerHTML = `총 숙박기간 : ${diffDate}일`
	}
}

//객실 옵션 출력 함수
function print_room(x){
	for(let i=0;i<room.length;i++){
		let selectprice = 0;
		if(adultno>=3){
			selectprice = room[i].price+(room[i].plusPrice*(adultno-2))
		}
		else{
			selectprice = room[i].price
		}
		if(x==room[i].name){
			document.querySelector('.c_selectinfo').innerHTML = `
				<div class="c_selectRoomName" value="${room[i].name}">${room[i].name}</div>
				<div class="c_selectPrice" value="${selectprice.toLocaleString()}">${selectprice.toLocaleString()}</div>`
			document.querySelector('.c_info_imagebox').innerHTML = `<img class="c_info_image" src="../img/booking/${room[i].img}">`
		}
	}
}
//장바구니 버튼클릭 함수
function selectlistbtn(){
	let name = document.querySelector('.c_selectRoomName').value
	let price = document.querySelector('.c_selectPrice').value
	console.log(name)
	console.log(price)
	let templist= {
		name : document.querySelector('.c_selectRoomName').value,
		price : document.querySelector('.c_selectPrice').value,
		firstday : {
						first_year : first_year, 
						first_month : first_month,
						first_date : first_date
					},
		lastday : {
						last_year : last_year, 
						last_month : last_month,
						last_date : last_date
					}
	}
	bookinglist.push(templist)
	console.log(bookinglist)
	selectlist()
}

//장바구니 출력함수
function selectlist(){
	
	let html = ``
	for(let i=0;i<bookinglist.length;i++){
		html += `<div class="selectlist(i)">
				<div>
					<h5 >예약 날짜</h5>
					<span class="c_boxFirst">${first_year}/${first_month}/${first_date}</span>
					<span>-</span>
					<span class="c_boxLast">${last_year}/${last_month}/${last_date}</span>
				</div>
				<div class="selectitem">
					<h5 class="c_selectlistname">객실이름</h5>
					<h5 class="c_selectprice">금액</h5>
				</div>`
	}
	
	document.querySelector('.c_selectListAll').innerHTML = html;
}


function c_modal_write(){
	first_print()	
	last_print()
	document.querySelector('.c_modal_wrap').style.display = 'none'
}

function c_modal_close(){
	document.querySelector('.c_modal_wrap').style.display = 'none'
}

function click_cal(){
	document.querySelector('.c_modal_wrap').style.display = 'inline-block'
}























