roomtype_print()

function roomtype_print(){
	let html = `<thead>
						<tr>
							<th>객실타입</th>
							<th>가격</th>
							<th>기본인원</th>
							<th>최대인원</th>
							<th>비고</th>
						</tr>
					</thead>
					<tbody>`
	
	roomtype.forEach((o,i) =>{
		html += `<tr>
						<td>${o.객실타입}</td>
						<td>${o.가격}</td>
						<td>${o.기본인원}</td>
						<td>${o.최대인원}</td>
						<td>
							<button class="e_r_ch" onclick="e_room_ch(${i})" type="button">수정</button> 
							<button class="e_r_del" onclick="e_room_del(${i})" type="button">삭제</button>
						</td>
					</tr>`
	})			
					
					
						
	html += `</tbody>`
	
	document.querySelector('.e_r_type_table').innerHTML = html
}



function e_room_ch(i){
	
	document.querySelector('.e_ch_modal').style.display = 'flex'
	
	let html = `<tr>
					<td>${roomtype[i].객실타입}</td>
					<td><input class="e_rprice" type="text" placeholder="${roomtype[i].가격}"></td>
					<td><input class="e_rnum" type="text" placeholder="${roomtype[i].기본인원}"></td>
					<td><input class="e_rmax" type="text" placeholder="${roomtype[i].최대인원}"></td>
					<td>
						<button class="e_r_apply" onclick="e_room_apply(${i})" type="button">적용</button> 
					</td>
				</tr>`
				
				
	document.querySelector('.e_ch_table').innerHTML = html
}

function e_room_apply(i){
	console.log('작동하나요?'+i)
	let e_rprice = document.querySelector('.e_rprice').value
	let e_rnum = document.querySelector('.e_rnum').value
	let e_rmax = document.querySelector('.e_rmax').value
	
	if(e_rprice!=''){
		roomtype[i].가격=e_rprice
	}
	if(e_rnum!=''){
		roomtype[i].기본인원=e_rnum
	}
	if(e_rmax!=''){
		roomtype[i].최대인원=e_rmax
	}
	
	document.querySelector('.e_ch_modal').style.display = 'none'
	roomtype_print()
}

function e_room_del(i){
	roomtype.splice(i,1)
	roomtype_print()
}

function e_roadd(){
	document.querySelector('.e_add_modal').style.display = 'flex'
	
	let html = `<tr>
					<td><input class="e_rtype" type="text" placeholder="객실타입"></td>
					<td><input class="e_rprice" type="text" placeholder="가격"></td>
					<td><input class="e_rnum" type="text" placeholder="기본인원"></td>
					<td><input class="e_rmax" type="text" placeholder="최대인원"></td>
					<td>
						<button class="e_r_apply" onclick="e_ro_add()" type="button">적용</button> 
					</td>
				</tr>`
				
				
	document.querySelector('.e_add_table').innerHTML = html
}

function e_ro_add(){
	let e_rtype =  document.querySelector('.e_rtype').value
	let e_rprice = Number(document.querySelector('.e_rprice').value)
	let e_rnum = Number(document.querySelector('.e_rnum').value)
	let e_rmax = Number(document.querySelector('.e_rmax').value)
	
	roomtype.push({객실타입: e_rtype , 가격: e_rprice, 기본인원: e_rnum , 최대인원: e_rmax})
	
	document.querySelector('.e_add_modal').style.display = 'none'
	roomtype_print()
	
}











