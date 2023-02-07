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
	
	let 요금 = 0;
	
	roomtype.forEach((j)=>{
		if(booking[i].객실타입==j.객실타입){
			요금=j.가격
		}
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
							<td width="23%"><input class="e_bo_name" type="text" placeholder="${booking[i].고객명}"></td>
							<th width="10%">입실일자 </th> 
							<td width="23%"><input class="e_bo_date" type="text" placeholder="${booking[i].입실날짜}"></td>
							<th width="10%">연락처 </th> 
							<td width="23%"><input class="e_bo_number" type="text" placeholder="${booking[i].전화번호}"></td>
						</tr>
						<tr>
							<th width="10%">인원 </th> 
							<td width="23%"><input class="e_bo_p" type="text" placeholder="${booking[i].인원}"></td>
							<th width="10%">숙박일수</th> 
							<td width="23%"><input class="e_bo_stay" type="text" placeholder="${booking[i].숙박일수}"></td>
							<th width="10%">비고 </th> 
							<td width="23%"><input class="e_bo_please" type="text" placeholder="${booking[i].요청사항}"></td>
						</tr>
						<tr>
							<th width="10%">총 요금 </th>
							<td width="23%"><input type="text" placeholder="${요금*booking[i].숙박일수}" disabled="disabled"></td>
							<td class="e_b_ch" colspan="4"><button type="button" onclick="e_ch_butt(${i})" class="e_ch_but">변경</button></td>
						</tr>
					</tbody>`
					
	document.querySelector('.e_modal_table').innerHTML = html
}

function close_modal(){
	console.log("작동하나?")
	document.querySelector('.e_real_modal').style.display = 'none'
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

