/* 호텔 찾기 배열 */
let 국내 = [ '서울이젠호텔' , '이젠스테이광화문' , '이젠스테이마포' , '이젠스테이서대문' , '이젠스테이역삼' , '이젠스테이서초' , '이젠스테이구로' , '이젠스테이삼성' , '제주이젠호텔' , '이젠스테이울산' , '이젠스테이여수' , '이젠스테이부산' ]
let 해외 = [ '이젠모노그램 다낭' ]

/* 호텔 찾기 버튼 모달 */
document.querySelector('.a_hotellsearch').addEventListener( 'click' , ()=>{
	let html = `<div class="a_modal2_box">
					<div class="a_mb_top">
						<img onclick="닫기()" src="img/index/icon/Closeicon.png">
					</div>
					<div class="a_mb2_bottom">
					<table>
						<tr> <th width="100px;" style="vertical-align: top; text-align: left;"> 국내 </th>`
	for( let i = 0 ; i<국내.length ; i++){
		html +=`<td>${ 국내[i] }</td>`
		}
	html += `		</tr>
					<tr> <th width="100px;" style="vertical-align: top; text-align: left;"> 해외 </th>`
	for( let i = 0 ; i<해외.length ; i++){
		html +=`<td>${ 해외[i] }</td>`
		}			
	html += `			</tr>
					</table>
				</div>
			</div>`
	
	document.querySelector('.a_modal_wrap').innerHTML = html;
	document.querySelector('.a_modal_wrap').style.display = 'flex';
})

/* 예약 버튼 모달 */
document.querySelector('.a_dining').addEventListener( 'click' , ()=>{
	let html = `<div class="a_modal_box"> 
					<div class="a_mb_top">
						<h3>예약</h3>
						<img onclick="닫기()" src="img/index/icon/Closeicon.png">
					</div>
					<div class="a_mb_bottom">
						<a href="#">
						<img style="height: 25px" src="img/index/icon/bed.png"></br>
						객실예약
						</a>
						<a href="#">
						<img style="height: 25px" src="img/index/icon/spoon-and-fork.png"></br>
						다이닝예약
						</a>
					</div>
				</div>`
	
	document.querySelector('.a_modal_wrap').innerHTML = html;
	document.querySelector('.a_modal_wrap').style.display = 'flex';
})

/* 모달 닫기 함수 */
function 닫기(){ document.querySelector('.a_modal_wrap').style.display = 'none'; }

/* 이미지 슬라이드 */
let move = 0;
function moving(i){
	document.querySelector('.a_banner').style.left = -i*1920+'px';
	move = i;
}


document.querySelector('.a_next').addEventListener( 'click' , ()=>{
	if( move < 3 ){	moving(move + 1); }
	else{ moving(0) };
})
document.querySelector('.a_prev').addEventListener( 'click' , ()=>{
	if( move > 0 ){	moving(move - 1); }
	else{ moving(3) };
})
