
document.querySelector('.dining').addEventListener( 'click' , ()=>{
	let html = `<div class="mb_top">
					<h3>예약</h3>
					<img onclick="닫기()" src="img/index/Closeicon.png">
				</div>
				<div class="mb_bottom">
					<a href="#">
					<img style="height: 25px" src="img/index/bed.png"></br>
					객실예약
					</a>
					<a href="#">
					<img style="height: 25px" src="img/index/spoon-and-fork.png"></br>
					다이닝예약
					</a>
				</div>`
	
	document.querySelector('.modal_box').innerHTML = html;
	document.querySelector('.modal_wrap').style.display = 'flex';
})



function 닫기(){
	document.querySelector('.modal_wrap').style.display = 'none';
}


let 국내 = [ '서울이젠호텔' , '이젠스테이광화문' , '이젠스테이마포' , '이젠스테이서대문' , '이젠스테이역삼' , '이젠스테이서초' , '이젠스테이구로' , '이젠스테이삼성' , '제주이젠호텔' , '이젠스테이울산' , '이젠스테이여수' , '이젠스테이부산' ]
let 해외 = [ '이젠모노그램 다낭' ]
document.querySelector('.hotellsearch').addEventListener( 'click' , ()=>{
	let html = `<div class="mb_top">
					<h3>국내</h3>
					<img onclick="닫기()" src="img/index/Closeicon.png">
				</div>
				<div>`
	for( let i = 0 ; i<국내.length ; i++){
		html +=`<span>${ 국내[i] }</span>`
		}
	html += `</div>`
			
	document.querySelector('.modal_box').innerHTML = html;
	document.querySelector('.modal_wrap').style.display = 'flex';
})