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
	
	booking.forEach((o)=>{
		roomtype.forEach((j)=>{
			if(o.객실타입==j.객실타입){
				요금=j.가격
			}
		})
		
		html += `<tr>
					<td width="10%">${o.예약번호}</td>
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
