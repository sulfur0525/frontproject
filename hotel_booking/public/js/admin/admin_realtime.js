room_list()


function room_list(){
	let html=''
	
	rooms.forEach((o)=>{
		
		console.log(realtime.includes(o.호수))
		console.log(o.호수)
		if(realtime.includes(o.호수)){
			html +=`<li class="list_item"><!-- 사용중인 객실 -->
						<ul class="item_title">
							<li class="t_ho">${o.호수}</li>
							<li>${o.객실타입}</li>
						</ul>
						<div class="item_con">
							<span><img alt="" src="../img/admin/r_state02.png"></span>
							<span class="cus_in">재실</span>
							<span class="reve_date">일자</span>
						</div>				
					</li>`
		}
		else if(booking.includes(o.호수)){
			html += `<li class="list_item"><!-- 예약중인 객실 -->
						<ul class="item_title">
							<li class="t_ho">${o.호수}</li>
							<li>${o.객실타입}</li>
						</ul>
						<div class="item_con">
							<span><img alt="" src="../img/admin/r_state01.png"></span>
							<span class="reve">예약</span>
							<span>고객명</span>
							<span class="reve_date">일자</span>
						</div>				
					</li>`
		}
		else{
			html += `<li class="list_item"><!-- 공실 -->
						<ul class="item_title">
							<li class="t_ho">${o.호수}</li>
							<li>${o.객실타입}</li>
						</ul>
						<div class="item_con">
							<span><img alt="" src="../img/admin/r_state03.png"></span>
							<span class="empty">공실</span>
						</div>				
					</li>`
		}
	})
	
	document.querySelector('.list_status').innerHTML = html;
	
	
	
}