
document.querySelector('.dining').addEventListener( 'click' , ()=>{
		
	document.querySelector('.modal_wrap').style.display = 'flex';
})

document.querySelector('.close').addEventListener( 'click' , ()=>{
	document.querySelector('.modal_wrap').style.display = 'none';
})

let 국내 = [ '서울이젠호텔' , '이젠스테이광화문' , '이젠스테이마포' , '이젠스테이서대문' , '이젠스테이역삼' , '이젠스테이서초' , '이젠스테이구로' , '이젠스테이삼성' , '제주이젠호텔' , '이젠스테이울산' , '이젠스테이여수' , '이젠스테이부산' ]
let 해외 = [ '이젠모노그램 다낭' ]
document.querySelector('.hotellsearch').addEventListener( 'click' , ()=>{
	let html = `<h3>국내</h3>
				<table>
					<tr>`
	for( let i = 0 ; i<국내.length ; i++){
		html +=`<td width="50px">${ 국내[i] }</td>`
		}
	html += `	</tr>	
			</table>`
			
	document.querySelector('.modal_box').innerHTML = html;
	document.querySelector('.modal_wrap').style.display = 'flex';
})