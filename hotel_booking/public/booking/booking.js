
let content = []
let adultno = 0;
let childno = 0;
let year = new Date().getFullYear();
let month = new Date().getMonth()<10? '0'+(new Date().getMonth()+1) : (new Date().getMonth()+1);
let date = new Date().getDate()<10? '0'+new Date().getDate() : new Date().getDate();
	

openHtml()
cal_print()

function openHtml(){
	
	let today = year+month+date;
	let tomorrow = `${Number(today)+1}`
	console.log(today)
	console.log(tomorrow)
	console.log(typeof(today))
	console.log(typeof(tomorrow))
	document.querySelector('.c_firstday').innerHTML = printday(today)
	document.querySelector('.c_lastday').innerHTML = printday(tomorrow)
}

function printday(i){
	return i;
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

function cal_print(){
	// 2. 현재 설정된 날짜 객체
	let date = new Date( year, month , 0); 
	//console.log('현재 캘린더 날짜 : ' + date);
	
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
	
	//console.log(weekday);
	
	// 1일 시작 전 공백 만들기
	for(let b=0; b<weekday;b++){
		html += `<div class="day"></div>`
	}
	
	// 일 만들기 [1일부터 ~ 마지막 일(월마다 다름)까지]
	for(let day=1;day<=lastday;day++){
		// 4. 1일~마지막일 날짜확인
		let date = dateformat(new Date(year,month-1,day));
		//현재 날짜의 요일
		let today = new Date(year, month-1, day).getDay();
		//console.log(date)
		html += `<div>${day}${content_print(date)}</div>`
	}
	// 4. 마크업 출력
	document.querySelector('.c_modal_box').innerHTML = html;
	
}

function dateformat(date){
	let d_year = date.getFullYear();
		//만약에 월/요일이 한자리수 이면 앞에 0 붙이기
	let d_month = (date.getMonth()+1) <= 9? '0'+(date.getMonth()+1) : (date.getMonth()+1);
	let d_day = date.getDate() <=9? '0'+date.getDate() : date.getDate();
	return `${d_year}${d_month}${d_day}`;
}

function content_print(date){
	console.log(date)
	//1.인수로 전달 된 날짜와 동일한 일정 날짜 찾기
		//1.html 선언
	let html = ``
	content.forEach((o)=>{
		if(date==o.date){
			html += `<div class="content" style="background-color : ${o.bg_color}">${o.content}</div>`
		}
	}) // for end
	return html;
}
