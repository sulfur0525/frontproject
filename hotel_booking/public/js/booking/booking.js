
let booking = []
let adultno = 0;
let childno = 0;
	

openHtml()

function openHtml(){
	let year = new Date().getFullYear();
	let month = Number(new Date().getMonth()<10? '0'+(new Date().getMonth()+1) : (new Date().getMonth()+1));
	let date = Number(new Date().getDate()<10? '0'+new Date().getDate() : new Date().getDate());
	let tomorrowDate = Number(date)+1
	
	first_print(year,month,date)
	last_print(year,month,(date+1))
}

function option_select(){
	document.querySelector('.c_roomoption').style.display = 'block'
}

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
function first_print(x,y,z){
	// 2. 현재 설정된 날짜 객체
	let year = x
	let month = y
	let selectday = z
	
	// 3. html '요일' 구성
	let html = `<div class="day weekday sunday">일</div>
				<div class="day weekday">월</div>
				<div class="day weekday">화</div>
				<div class="day weekday">수</div>
				<div class="day weekday">목</div>
				<div class="day weekday">금</div>
				<div class="day weekday">토</div>`
		// * 1.현재 설정된 월의 마지막 일 구하는 방법
	let lastday = new Date(year, month, 0).getDate();
		// * 2. 현재 캘린더 설정된 날짜의 1일 시작요일 구하기
	let weekday = new Date(year, month-1, 1).getDay();
		//현재 날짜의 요일
	
	//console.log(weekday);
	
	// 1일 시작 전 공백 만들기
	for(let b=0; b<weekday;b++){
		html += `<div class="day"></div>`
	}
	// 일 만들기 [1일부터 ~ 마지막 일(월마다 다름)까지]
	for(let day=1;day<=lastday;day++){
		if(day==selectday){html += `<div class="day selectday" onclick="firstselcet(${year},${month},${day})">${day}</div>`
		}else{html += `<div class="day" onclick="firstselcet(${year},${month},${day})">${day}</div>`}
	} //for e
	// 4. 마크업 출력
	document.querySelector('.c_startmonth').innerHTML = `${year}년${month}월`;
	document.querySelector('.c_startdayBot').innerHTML = html;
	document.querySelector('.c_firstday').innerHTML = `${year}-${month}-${selectday}`
	
}

//퇴실날짜를 선택할 달력 출력 함수
function last_print(x,y,z){
	let year = x
	let month = y
	let selectday = z
	let html = `<div class="day weekday sunday">일</div>
				<div class="day weekday">월</div>
				<div class="day weekday">화</div>
				<div class="day weekday">수</div>
				<div class="day weekday">목</div>
				<div class="day weekday">금</div>
				<div class="day weekday">토</div>`
	let lastday = new Date(year, month, 0).getDate();
		// * 2. 현재 캘린더 설정된 날짜의 1일 시작요일 구하기
	let weekday = new Date(year, month-1, 1).getDay();
	for(let b=0; b<weekday;b++){
		html += `<div class="day"></div>`
	}
	for(let day=1;day<=lastday;day++){
		if(day==selectday){html += `<div class="day selectday" onclick="lastselcet(${year},${month},${day})">${day}</div>`
		}else{html += `<div class="day" onclick="lastselcet(${year},${month},${day})">${day}</div>`}
	} //for e
	document.querySelector('.c_lastmonth').innerHTML = `${year}년${month}월`;
	document.querySelector('.c_lastdayBot').innerHTML = html;
	document.querySelector('.c_lastday').innerHTML = `${year}-${month}-${selectday}`
}

//퇴실날짜를 선택했을때 함수
function lastselcet(x,y,z){
	let year = x;
	let month = y;
	let day = z;
	console.log(year)
	console.log(month)
	console.log(day)
	last_print(x,y,z)
}
//입실날짜를 선택했을때 함수
function firstselcet(x,y,z){
	let year = x;
	let month = y;
	let day = z;
	console.log(year)
	console.log(month)
	console.log(day)
	first_print(x,y,z)
}

function prevMonth(i){
	if(i==1){
		first_print(x,(y-1),z)
	}else{last_print(x,(y-1),z)}
}

function nextMonth(i){
	if(i==1){
		first_print(x,(y+1),z)
	}else{last_print(x,(y-1),z)}
}