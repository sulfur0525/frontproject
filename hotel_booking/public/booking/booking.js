
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
		// 1일~마지막일 날짜확인
		let date = dateformat(new Date(year,month-1,day));
		//console.log(date)
		if(day==selectday){html += `<div class="day selectday">${day}</div>`
		}else{html += `<div class="day">${day}</div>`}
	} //for e
	// 4. 마크업 출력
	document.querySelector('.c_startmonth').innerHTML = `${year}년${month}월`;
	document.querySelector('.c_startdayBot').innerHTML = html;
	document.querySelector('.c_firstday').innerHTML = `${year}-${month}-${selectday}`
	
}

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
	for(let day=1;day<=lastday;day++){
		// 1일~마지막일 날짜확인
		let date = dateformat(new Date(year,month-1,day));
		//console.log(date)
		if(day==selectday){html += `<div class="day selectday">${day}</div>`
		}else{html += `<div class="day">${day}</div>`}
	} //for e
	document.querySelector('.c_lastmonth').innerHTML = `${year}년${month}월`;
	document.querySelector('.c_lastdayBot').innerHTML = html;
	document.querySelector('.c_lastday').innerHTML = `${year}-${month}-${selectday}`
}

function dateformat(date){
	let d_year = date.getFullYear();
		//만약에 월/요일이 한자리수 이면 앞에 0 붙이기
	let d_month = (date.getMonth()+1) <= 9? '0'+(date.getMonth()+1) : (date.getMonth()+1);
	let d_day = date.getDate() <=9? '0'+date.getDate() : date.getDate();
	return `${d_year}${d_month}${d_day}`;
}

