console.log('하이요')
/*관리를 누르면 사이드바2 들어나게하기*/
document.querySelector('.adminpage').addEventListener('click', (e)=>{
	document.querySelector('.navbox2').style.display = 'flex'
})
/*홈을 누르면 사이드바2 사라지게 하기*/
document.querySelector('.home').addEventListener('click', (e)=>{
	document.querySelector('.navbox2').style.display = 'none'
})

document.querySelector('.title1').addEventListener('click', (e)=>{
	document.querySelector('.sub_menus').style.display = 'block'
})