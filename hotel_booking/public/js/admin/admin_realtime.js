room_list()



function room_list(){
	let html=''
	let name = ''
	rooms.forEach((o,i)=>{
		let type = 0
		
		booking.forEach((b)=>{
			if(o.호수==b.호수){
				type=1
				name=b.고객명
			}
		})
		realtime.forEach((r)=>{
			if(o.호수==r.호수){
				type=2
			}
		})
		
			
		if(type==2){
			html +=`<li onclick="bo_modal(${i})"  class="e_list_item"><!-- 사용중인 객실 -->
						<ul class="e_item_title">
							<li class="e_t_ho">${o.호수}</li>
							<li class="e_t_type">${o.객실타입}</li>
						</ul>
						<div class="e_item_con">
							<span><img alt="" src="../img/admin/r_state02.png"></span>
							<span class="e_cus_in">재실</span>
							<span class="e_reve_date">일자</span>
						</div>				
					</li>`
		}
		else if(type==1){
			html += `<li onclick="bo_modal(${i})" class="e_list_item"><!-- 예약중인 객실 -->
						<ul class="e_item_title">
							<li class="e_t_ho">${o.호수}</li>
							<li class="e_t_type">${o.객실타입}</li>
						</ul>
						<div class="e_item_con">
							<span><img alt="" src="../img/admin/r_state01.png"></span>
							<span class="e_reve">예약</span>
							<span>${name}</span>
							<span class="e_reve_date">일자</span>
						</div>				
					</li>`
		}
		else{
			html += `<li onclick="bo_modal(${i})"  class="e_list_item"><!-- 공실 -->
						<ul class="e_item_title">
							<li class="e_t_ho">${o.호수}</li>
							<li class="e_t_type">${o.객실타입}</li>
						</ul>
						<div class="e_item_con">
							<span><img alt="" src="../img/admin/r_state03.png"></span>
							<span class="e_empty">공실</span>
						</div>				
					</li>`
		}
	})
	
	document.querySelector('.e_list_status').innerHTML = html;
}

function bo_modal(i){ 
	document.querySelector('.e_real_modal').style.display = 'flex'
	let html = ''
	let 요금 = 0;
	
	
	
	let have = false
	let k=0;
	
	booking.forEach((j,p)=>{
		if(rooms[i].호수==j.호수){
			have=true
			k=p
			
		}
	})
	
	roomtype.forEach((j)=>{
		if(booking[k].객실타입==j.객실타입){
			요금=j.가격
		}
	})
	
	if(have){
		html = `<thead>
						<tr>
							<th class="e_rervnum" colspan="5">${booking[k].예약번호}</th>
							<th id="e_close" onclick="close_modal()">X</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th id="e_roomtype" colspan="6">${rooms[i].호수} ${rooms[i].객실타입}</th>
						</tr>
						<tr>
							<th width="10%">고객명 </th> 
							<td width="23%"><input class="e_bo_name" type="text" placeholder="${booking[k].고객명}"></td>
							<th width="10%">입실일자 </th> 
							<td width="23%"><input class="e_bo_date" type="text" placeholder="${booking[k].입실날짜}"></td>
							<th width="10%">연락처 </th> 
							<td width="23%"><input class="e_bo_number" type="text" placeholder="${booking[k].전화번호}"></td>
						</tr>
						<tr>
							<th width="10%">인원 </th> 
							<td width="23%"><input class="e_bo_p" type="text" placeholder="${booking[k].인원}"></td>
							<th width="10%">숙박일수</th> 
							<td width="23%"><input class="e_bo_stay" type="text" placeholder="${booking[k].숙박일수}"></td>
							<th width="10%">비고 </th> 
							<td width="23%"><input class="e_bo_please" type="text" placeholder="${booking[k].요청사항}"></td>
						</tr>
						<tr>
							<th width="10%">총 요금 </th>
							<td width="23%"><input type="text" placeholder="${요금*booking[i].숙박일수}" disabled="disabled"></td>
							<td class="e_b_ch" colspan="4">
								<button type="button" onclick="e_ch_butt(${k})" class="e_ch_but">변경</button>
								<button type="button" onclick="e_in_butt(${k,i})" class="e_ch_but">입실</button>
							</td>
						</tr>
					</tbody>`
	}
	else{
		html = `<thead>
						<tr>
							<th class="e_rervnum" colspan="5">  </th>
							<th id="e_close" onclick="close_modal()">X</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th id="e_roomtype" colspan="6">${rooms[i].호수} ${rooms[i].객실타입}</th>
						</tr>
						<tr>
							<th width="10%">고객명 </th> 
							<td width="23%"><input class="e_bo_name" type="text" placeholder=""></td>
							<th width="10%">입실일자 </th> 
							<td width="23%"><input class="e_bo_date" type="text" placeholder=""></td>
							<th width="10%">연락처 </th> 
							<td width="23%"><input class="e_bo_number" type="text" placeholder=""></td>
						</tr>
						<tr>
							<th width="10%">인원 </th> 
							<td width="23%"><input class="e_bo_p" type="text" placeholder=""></td>
							<th width="10%">숙박일수</th> 
							<td width="23%"><input class="e_bo_stay" type="text" placeholder=""></td>
							<th width="10%">비고 </th> 
							<td width="23%"><input class="e_bo_please" type="text" placeholder=""></td>
						</tr>
						<tr>
							<th width="10%">총 요금 </th>
							<td width="23%"><input type="text" placeholder="" disabled="disabled"></td>
							<td class="e_b_ch" colspan="4">
							<button type="button" onclick="e_chin_butt(${i})" class="e_ch_but">변경</button></td>
						</tr>
					</tbody>`
	}
					
	document.querySelector('.e_modal_table').innerHTML = html
}

function close_modal(){
	console.log("작동하나?")
	document.querySelector('.e_real_modal').style.display = 'none'
}

function e_ch_butt(i){
	console.log("작동?"+i)
	let e_bo_name = document.querySelector('.e_bo_name').value
	let e_bo_date = document.querySelector('.e_bo_date').value
	let e_bo_number = document.querySelector('.e_bo_number').value
	let e_bo_p = document.querySelector('.e_bo_p').value
	let e_bo_stay = document.querySelector('.e_bo_stay').value
	let e_bo_please = document.querySelector('.e_bo_please').value
	
	if(e_bo_name!=''){
		booking[i].고객명=e_bo_name
	}
	if(e_bo_date!=''){
		booking[i].입실날짜=e_bo_date
	}
	if(e_bo_number!=''){
		booking[i].전화번호=e_bo_number
	}
	if(e_bo_p!=''){
		booking[i].인원=e_bo_p
	}
	if(e_bo_stay!=''){
		booking[i].숙박일수=e_bo_stay
	}
	if(e_bo_please!=''){
		booking[i].요청사항=e_bo_please
	}
	
	document.querySelector('.e_real_modal').style.display = 'none'
	room_list()
}

function e_chin_butt(i){
	console.log("작동?"+i)
	let e_bo_name = document.querySelector('.e_bo_name').value
	let e_bo_date = document.querySelector('.e_bo_date').value
	let e_bo_number = document.querySelector('.e_bo_number').value
	let e_bo_p = document.querySelector('.e_bo_p').value
	let e_bo_stay = document.querySelector('.e_bo_stay').value
	let e_bo_please = document.querySelector('.e_bo_please').value
	
	if(e_bo_name!=''&&e_bo_date!=''&&e_bo_number!=''&&e_bo_p!=''&&e_bo_stay!=''&&e_bo_please!=''){
		booking.push({예약번호: (booking[booking.length-1].예약번호+1) , 고객명: e_bo_name, 전화번호: e_bo_number, 객실타입: rooms[i].객실타입, 호수: rooms[i].호수 ,입실날짜: e_bo_date, 숙박일수: e_bo_stay, 요청사항:e_bo_please, 인원:e_bo_p})
		
		document.querySelector('.e_real_modal').style.display = 'none'
		room_list()
	}
	else{alert('모든 내용을 채워주십시오.')}

}

function e_in_butt(k){
	realtime.push({호수: booking[k].호수 , 예약번호: booking[k].예약번호 , 객실타입: booking[k].객실타입, 고객명: booking[k].고객명 , 인원: booking[k].인원 })
	document.querySelector('.e_real_modal').style.display = 'none'
	room_list()
}

/*document.querySelector('.e_wide').addEventListener(('click'),()=>{
	document.querySelector('.e_navbox1').style.display = 'none'
	document.querySelector('.e_navbox2').style.display = 'none'
	document.querySelector('.e_sub1').style.display = 'none'
	document.querySelector('.e_sub2').style.display = 'none'
	document.querySelector('.e_sub3').style.display = 'none'
	document.querySelector('.e_sub4').style.display = 'none'
	document.querySelector('.e_sub5').style.display = 'none'
	document.querySelector('.e_contents').style.width = '1200px'
	document.querySelector('.e_wide').className = "e_wide_open"
})

document.querySelector('.e_wide_open').addEventListener(('click'),()=>{
	console.log('작동')
	document.querySelector('.e_navbox1').style.display = 'block'
	document.querySelector('.e_navbox2').style.display = 'block'
	document.querySelector('.e_sub1').style.display = 'block'
	document.querySelector('.e_sub2').style.display = 'none'
	document.querySelector('.e_sub3').style.display = 'none'
	document.querySelector('.e_sub4').style.display = 'none'
	document.querySelector('.e_sub5').style.display = 'none'
	document.querySelector('.e_contents').style.width = '890px'
	document.querySelector('.e_wide_open').className = "e_wide"
})*/

