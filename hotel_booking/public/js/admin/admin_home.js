
roomcnt()
bookinglist()
bargrh()


function roomcnt(){
	let html = `<thead>
					<tr>
						<th>구분</th>
						<th>슈페리어</th>
						<th>슈페리어 디럭스</th>
						<th>주니어 스위트 쿼드</th>
						<th>주니어 스위트 킹</th>
						<th>주니어 스위트 트윈</th>
						<th>총 합계</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>총 객실</td>
						<td>${count(1)}</td>
						<td>${count(2)}</td>
						<td>${count(3)}</td>
						<td>${count(4)}</td>
						<td>${count(5)}</td>
						<td>${count(6)}</td>
					</tr>
					<tr>
						<td>판매된 객실</td>
						<td>${sale(1)}</td>
						<td>${sale(2)}</td>
						<td>${sale(3)}</td>
						<td>${sale(4)}</td>
						<td>${sale(5)}</td>
						<td>${sale(6)}</td>
					</tr>
					<tr>
						<td>객실 재고</td>
						<td>${count(1)-sale(1)}</td>
						<td>${count(2)-sale(2)}</td>
						<td>${count(3)-sale(3)}</td>
						<td>${count(4)-sale(4)}</td>
						<td>${count(5)-sale(5)}</td>
						<td>${count(6)-sale(6)}</td>
					</tr>
				</tbody>`
	
	document.querySelector('.e_roomcnt').innerHTML=html;
	document.querySelector('.e_percent').innerHTML=`${(sale(6)/count(6))}%`
}

function type(i){
	let type=''
	
	if(i==1){type='슈페리어'}
	else if(i==2){type='슈페리어 디럭스'}
	else if(i==3){type='주니어 스위트 쿼드'}
	else if(i==4){type='주니어 스위트 킹'}
	else if(i==5){type='주니어 스위트 트윈'}
	
	return type
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

function sale(i){
	let cnt = 0; 
	let type=''
	
	
	if(i==1){type='슈페리어'}
	else if(i==2){type='슈페리어 디럭스'}
	else if(i==3){type='주니어 스위트 쿼드'}
	else if(i==4){type='주니어 스위트 킹'}
	else if(i==5){type='주니어 스위트 트윈'}
	else{booking.forEach((o)=>{cnt++})}
	
	
	 booking.forEach((o)=>{
		if(type==o.객실타입){cnt++}
	})
	
	return cnt
}

/*-----------------------------------------------------*/
function bookinglist(){
	let html = `<tbody>`
	
	booking.forEach((o)=>{
		html += `<tr>
					<td>${o.예약번호}</td>
					<td>${o.고객명}</td>
					<td>${o.객실타입}</td>
					<td>${o.입실날짜}</td>
					<td>${o.숙박일수}</td>
				</tr>`
	})
	
	html +=`</tbody>`		
	
	document.querySelector('.e_b_situ').innerHTML = html
}

/*-------------------------------------------------------------*/
function bargrh(){
	
	for(let i =1 ; i<=5 ;i++){
		let cnt =0;
		let type=''
	
		
	if(i==1){type='슈페리어'}
	else if(i==2){type='슈페리어 디럭스'}
	else if(i==3){type='주니어 스위트 쿼드'}
	else if(i==4){type='주니어 스위트 킹'}
	else{type='주니어 스위트 트윈'}
		
		realtime.forEach((o)=>{
			if(type==o.객실타입){
				cnt++
			}
		})
		console.log((cnt/count(i)))
		document.querySelector('.e_col'+i).style.height = `${(cnt/count(i))*100}%`
	}
	
	let html = `<thead>
					<tr>
						<th>슈페리어</th>	<th>슈페리어 디럭스</th><th>주니어 스위트 쿼드</th><th>주니어 스위트 킹</th><th>주니어 스위트 트윈</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${realtimeprint(1)}</td><td>${realtimeprint(2)}</td><td>${realtimeprint(3)}</td><td>${realtimeprint(4)}</td><td>${realtimeprint(5)}</td>
					</tr>
				</tbody>`
	
	document.querySelector('.e_typecnt').innerHTML = html
	
}

function realtimeprint(i){
	let cnt = 0; 
	let type=''
	
	
	if(i==1){type='슈페리어'}
	else if(i==2){type='슈페리어 디럭스'}
	else if(i==3){type='주니어 스위트 쿼드'}
	else if(i==4){type='주니어 스위트 킹'}
	else if(i==5){type='주니어 스위트 트윈'}
	else{realtime.forEach((o)=>{cnt++})}
	
	
	 realtime.forEach((o)=>{
		if(type==o.객실타입){cnt++}
	})
	
	return cnt
}



