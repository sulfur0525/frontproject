console.log('ㅎㅇ')
document.querySelector('.dining').addEventListener( 'click' , ()=>{
	document.querySelector('.modal_wrap').style.display = 'flex';
})

document.querySelector('.close').addEventListener( 'click' , ()=>{
	document.querySelector('.modal_wrap').style.display = 'none';
})