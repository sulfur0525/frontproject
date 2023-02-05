
roomcnt()
bookinglist()
bargrh()


function roomcnt(){
	let html = `<thead>
					<tr>
						<th>구분</th>
						<th>더블</th>
						<th>디럭스</th>
						<th>스위트</th>
						<th>트윈</th>
						<th>패밀리</th>
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
	
	document.querySelector('.roomcnt').innerHTML=html;
	document.querySelector('.percent').innerHTML=`${(sale(6)/count(6))}%`
}

function type(i){
	let type=''
	
	if(i==1){type='더블'}
	else if(i==2){type='디럭스'}
	else if(i==3){type='스위트'}
	else if(i==4){type='트윈'}
	else if(i==5){type='패밀리'}
	
	return type
}

function count(i){
	let cnt = 0; 
	let type=''
	
	if(i==1){type='더블'}
	else if(i==2){type='디럭스'}
	else if(i==3){type='스위트'}
	else if(i==4){type='트윈'}
	else if(i==5){type='패밀리'}
	else{rooms.forEach((o)=>{cnt++})}
	
	
	rooms.forEach((o)=>{
		if(type==o.객실타입){cnt++}
	})
	
	return cnt
}

function sale(i){
	let cnt = 0; 
	let type=''
	
	if(i==1){type='더블'}
	else if(i==2){type='디럭스'}
	else if(i==3){type='스위트'}
	else if(i==4){type='트윈'}
	else if(i==5){type='패밀리'}
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
	
	document.querySelector('.b_situ').innerHTML = html
}

/*-------------------------------------------------------------*/
function bargrh(){
	
	for(let i =1 ; i<=5 ;i++){
		let cnt =0;
		let type=''
	
		if(i==1){type='더블'}
		else if(i==2){type='디럭스'}
		else if(i==3){type='스위트'}
		else if(i==4){type='트윈'}
		else{type='패밀리'}
		
		realtime.forEach((o)=>{
			if(type==o.객실타입){
				cnt++
			}
		})
		console.log((cnt/count(i)))
		document.querySelector('.col'+i).style.height = `${(cnt/count(i))*100}%`
	}
	
	let html = `<thead>
					<tr>
						<th>더블</th>	<th>디럭스</th><th>스위트</th><th>트윈</th><th>패밀리</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${realtimeprint(1)}</td><td>${realtimeprint(2)}</td><td>${realtimeprint(3)}</td><td>${realtimeprint(4)}</td><td>${realtimeprint(5)}</td>
					</tr>
				</tbody>`
	
	document.querySelector('.typecnt').innerHTML = html
	
}

function realtimeprint(i){
	let cnt = 0; 
	let type=''
	
	if(i==1){type='더블'}
	else if(i==2){type='디럭스'}
	else if(i==3){type='스위트'}
	else if(i==4){type='트윈'}
	else if(i==5){type='패밀리'}
	else{realtime.forEach((o)=>{cnt++})}
	
	
	 realtime.forEach((o)=>{
		if(type==o.객실타입){cnt++}
	})
	
	return cnt
}



