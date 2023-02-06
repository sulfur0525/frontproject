bookinglist()



function bookinglist(){
	let html = `<thead>
					<tr>
						<th>예약번호</th>
						<th>고객명</th>
						<th>전화번호</th>
						<th>객실타입</th>
						<th>입실일자</th>
						<th>숙박일수</th>
						<th>총 금액</th>
						<th>요청사항</th>
					</tr>
				</thead>
				<tbody>`
	
	let 요금 = 0;
	
	booking.forEach((o,i)=>{
		roomtype.forEach((j)=>{
			if(o.객실타입==j.객실타입){
				요금=j.가격
			}
		})
		
		html += `<tr>
					<td onclick="bo_modal(${i})" width="10%">${o.예약번호}</td>
					<td width="10%">${o.고객명}</td>
					<td width="15%">${o.전화번호}</td>
					<td width="10%">${o.객실타입}</td>
					<td width="15%">${o.입실날짜}</td>
					<td width="10%">${o.숙박일수}</td>
					<td width="10%">${요금*o.숙박일수}</td>
					<td width="20%">${o.요청사항}</td>
				</tr>`
	})
	
	html +=`</tbody>`		
	
	document.querySelector('.e_list_table').innerHTML = html
}


function bo_modal(i){ 
	document.querySelector('.e_booking_modal').style.display = 'flex'
	
	let 요금 = 0;
	
	booking.forEach((o,i)=>{
		roomtype.forEach((j)=>{
			if(o.객실타입==j.객실타입){
				요금=j.가격
			}
		})
	})
	
	
	
	let html = `<thead>
						<tr>
							<th class="e_rervnum" colspan="5">${booking[i].예약번호}</th>
							<th id="e_close" onclick="close_modal()">X</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th id="e_roomtype" colspan="6">${booking[i].호수} ${booking[i].객실타입}</th>
						</tr>
						<tr>
							<th width="10%">고객명 </th> 
							<td width="23%"><input type="text" placeholder="${booking[i].고객명}"></td>
							<th width="10%">입실일자 </th> 
							<td width="23%"><input type="text" placeholder="${booking[i].입실날짜}"></td>
							<th width="10%">연락처 </th> 
							<td width="23%"><input type="text" placeholder="${booking[i].전화번호}"></td>
						</tr>
						<tr>
							<th width="10%">인원 </th> 
							<td width="23%"><input type="text" placeholder="2"></td>
							<th width="10%">비고 </th> 
							<td width="23%"><input type="text" placeholder="${booking[i].요청사항}"></td>
							<th width="10%">총 요금 </th> 
							<td width="23%"><input type="text" placeholder="${요금*booking[i].숙박일수}"></td>
						</tr>
					</tbody>`
					
	document.querySelector('.e_modal_table').innerHTML = html
}

function close_modal(){
	console.log("작동하나?")
	document.querySelector('.e_booking_modal').style.display = 'none'
}











