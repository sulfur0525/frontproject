room_list()



function room_list(){
	let html=''
	let name = ''
	rooms.forEach((o)=>{
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
		else if(type==1){
			html += `<li class="list_item"><!-- 예약중인 객실 -->
						<ul class="item_title">
							<li class="t_ho">${o.호수}</li>
							<li>${o.객실타입}</li>
						</ul>
						<div class="item_con">
							<span><img alt="" src="../img/admin/r_state01.png"></span>
							<span class="reve">예약</span>
							<span>${name}</span>
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