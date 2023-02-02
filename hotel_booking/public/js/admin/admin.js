console.log('하이요')
/*관리를 누르면 사이드바2 들어나게하기*/
document.querySelector('.adminpage').addEventListener('click', (e)=>{
	document.querySelector('.navbox2').style.display = 'flex'
})
/*홈을 누르면 사이드바2 사라지게 하기*/
document.querySelector('.home').addEventListener('click', (e)=>{
	document.querySelector('.navbox2').style.display = 'none'
	document.querySelector('.sub1').style.display = 'none'
	document.querySelector('.sub2').style.display = 'none'
	document.querySelector('.sub3').style.display = 'none'
	document.querySelector('.sub4').style.display = 'none'
	document.querySelector('.sub5').style.display = 'none'
})

/* 사이드바2 헤드메뉴 누르면 서브메뉴 나타나게 하기*/
document.querySelector('.title1').addEventListener('click', (e)=>{
	document.querySelector('.sub1').style.display = 'block'
	document.querySelector('.sub2').style.display = 'none'
	document.querySelector('.sub3').style.display = 'none'
	document.querySelector('.sub4').style.display = 'none'
	document.querySelector('.sub5').style.display = 'none'
	
})
document.querySelector('.title2').addEventListener('click', (e)=>{
	document.querySelector('.sub2').style.display = 'block'
	document.querySelector('.sub1').style.display = 'none'
	document.querySelector('.sub3').style.display = 'none'
	document.querySelector('.sub4').style.display = 'none'
	document.querySelector('.sub5').style.display = 'none'
})
document.querySelector('.title3').addEventListener('click', (e)=>{
	document.querySelector('.sub3').style.display = 'block'
	document.querySelector('.sub1').style.display = 'none'
	document.querySelector('.sub2').style.display = 'none'
	document.querySelector('.sub4').style.display = 'none'
	document.querySelector('.sub5').style.display = 'none'
})
document.querySelector('.title4').addEventListener('click', (e)=>{
	document.querySelector('.sub4').style.display = 'block'
	document.querySelector('.sub1').style.display = 'none'
	document.querySelector('.sub3').style.display = 'none'
	document.querySelector('.sub2').style.display = 'none'
	document.querySelector('.sub5').style.display = 'none'
})
document.querySelector('.title5').addEventListener('click', (e)=>{
	document.querySelector('.sub5').style.display = 'block'
	document.querySelector('.sub1').style.display = 'none'
	document.querySelector('.sub3').style.display = 'none'
	document.querySelector('.sub4').style.display = 'none'
	document.querySelector('.sub2').style.display = 'none'
})
