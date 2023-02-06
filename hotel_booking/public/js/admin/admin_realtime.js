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
						html +=`<li class="e_list_item"><!-- 사용중인 객실 -->
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
			html += `<li class="e_list_item"><!-- 예약중인 객실 -->
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
			html += `<li class="e_list_item"><!-- 공실 -->
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

