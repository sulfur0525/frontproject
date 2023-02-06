
let year = new Date().getFullYear();
let month = new Date().getMonth()+1;
let day = new Date().getDate();

grh_print()


function date_formet(date){
	let d_year = date.getFullYear(); 
	let d_month = (date.getMonth()+1) <= 9 ? '0'+(date.getMonth()+1) : (date.getMonth()+1);
	let d_day = date.getDate()<=9 ?  '0'+date.getDate()  : date.getDate();
	return `${d_year}-${d_month}-${d_day-2}`
}

function count(i){
	let cnt = 0; 
	let type=''
	
	
	if(i==1){type='슈페리어'}
	else if(i==2){type='슈페리어 디럭스'}
	else if(i==3){type='주니어 스위트 쿼드'}
	else if(i==4){type='주니어 스위트 킹'}
	else if(i==5){type='주니어 스위트 트윈'}
	else{rooms.forEach((o)=>{cnt++})}
	
	
	rooms.forEach((o)=>{
		if(type==o.객실타입){cnt++}
	})
	
	return cnt
}

function grh_print(){
	let html = ''
	
	for(let i = 0 ; i<3 ; i++){
		
		let date = date_formet(new Date(year,month-1 ,(day+i)));
		
		
		html = `${date}`
		
		document.querySelector('.day'+i).innerHTML = html
	
	
	
	}
	for(let j = 1 ; j<4 ; j++){
			for(let i =1 ; i<=5 ;i++){
			let cnt =0;
			let type=''
		
			
			if(i==1){type='슈페리어'}
			else if(i==2){type='슈페리어 디럭스'}
			else if(i==3){type='주니어 스위트 쿼드'}
			else if(i==4){type='주니어 스위트 킹'}
			else{type='주니어 스위트 트윈'}
			
			booking.forEach((o)=>{
				if(type==o.객실타입){
					cnt++
				}
			})
			console.log((cnt/count(i)))
			document.querySelector('.typehe'+i+'-'+j).style.height = `${(cnt/count(i))*100}%`
		}
	}
	
	
	
	
	
}