console.log('하이요')
navbox1_print()

function navbox1_print(){
	let html1 = `<ul>
					<li>	<!-- 좌측 사이드바1 아이템1개 -->
						<a href="admin_home.html" class="e_nav1_item e_home"><img id="e_nav1" alt="" src="../img/admin/nav_01_1.png"></a>
						<span class="e_nav1_title">홈</span>
					<li>
					<li>	<!-- 좌측 사이드바1 아이템1개 -->
						<a href="admin.html" class="e_nav1_item e_adminpage"><img id="e_nav2" alt="" src="../img/admin/nav_02_1.png"></a>
						<span class="e_nav1_title">관리</span>
					<li>
					<li>	<!-- 좌측 사이드바1 아이템1개 -->
						<a href="../index.html" class="e_nav1_item e_homepage"><img id="e_nav3" alt="" src="../img/admin/nav_03_1.png"></a>
						<span class="e_nav1_title">홈페이지</span>
					<li>
				</ul>`
	
	let html2 = `<div class="e_left_menu">
					<div class="e_title_box"><!-- 좌측 사이드바2 타이틀 -->
						<h1 class="e_nav2_title"> 이젠 호텔&리조트 </h1>
					</div>
					
					<ul class="e_menus">
						<li class="e_menu"><!-- 좌측 사이드바2 아이템1개 -->
							<a class="e_menu_title e_title1"><div><img alt="" src="../img/admin/nav_04.png">객실 예약 관리</div>
							<span><img alt="" src="../img/admin/nav_06.png"> </span></a>
	
							<ul class="e_sub_menus e_sub1"><!-- 서브아이템 모음 -->
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">실시간 객실 상태</a>
								</li>
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">객실 현황표</a>
								</li>
							</ul>
						</li>
						
						<li class="e_menu"><!-- 좌측 사이드바2 아이템1개 -->
							<a class="e_menu_title title2"><div><img alt="" src="../img/admin/nav_04.png">객실/예약 조회</div>
							<span><img alt="" src="../img/admin/nav_06.png"> </span></a>
							
							<ul class="e_sub_menus sub2"><!-- 서브아이템 모음 -->
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">객실/예약 조회</a>
								</li>
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">객실 재고 조회</a>
								</li>
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">매출/입금 조회</a>
								</li>
							</ul>
						</li>
						
						<li class="e_menu"><!-- 좌측 사이드바2 아이템1개 -->
							<a class="e_menu_title e_title3"><div><img alt="" src="../img/admin/nav_04.png">회원정보 조회</div>
							<span><img alt="" src="../img/admin/nav_06.png"> </span></a>
							
							<ul class="e_sub_menus e_sub3"><!-- 서브아이템 모음 -->
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">회원정보 조회</a>
								</li>
							</ul>
						</li>
						
						<li class="e_menu"><!-- 좌측 사이드바2 아이템1개 -->
							<a class="e_menu_title e_title4"><div><img alt="" src="../img/admin/nav_04.png">통계</div>
							<span><img alt="" src="../img/admin/nav_06.png"> </span></a>
							
							<ul class="e_sub_menus e_sub4"><!-- 서브아이템 모음 -->
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">객실사용 통계</a>
								</li>
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">매출 통계</a>
								</li>
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">회원 통계</a>
								</li>
							</ul>
						</li>
						<li class="e_menu"><!-- 좌측 사이드바2 아이템1개 -->
							<a class="e_menu_title e_title5"><div><img alt="" src="../img/admin/nav_04.png">객실 설정관리</div>
							<span><img alt="" src="../img/admin/nav_06.png"> </span></a>
							
							<ul class="e_sub_menus e_sub5"><!-- 서브아이템 모음 -->
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">객실요금 설정</a>
								</li>
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a><img alt="" src="../img/admin/nav_07.png">객실타입 설정</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>`
	
	document.querySelector('.e_navbox1').innerHTML = html1
	document.querySelector('.e_navbox2').innerHTML = html2
}











//마우스 올리면 색 변하게 
document.querySelector('.e_home').addEventListener('mouseover',()=>{
	document.querySelector("#e_nav1").src = "../img/admin/nav_01_2.png"
})

document.querySelector('.e_adminpage').addEventListener('mouseover',()=>{
	document.querySelector("#e_nav2").src = "../img/admin/nav_02_2.png"
})

document.querySelector('.e_homepage').addEventListener('mouseover',()=>{
	document.querySelector("#e_nav3").src = "../img/admin/nav_03_2.png"
})

//마우스 벗어나면 색 되돌아오게 
document.querySelector('.e_home').addEventListener('mouseout',()=>{
	document.querySelector("#e_nav1").src = "../img/admin/nav_01_1.png"
})

document.querySelector('.e_adminpage').addEventListener('mouseout',()=>{
	document.querySelector("#e_nav2").src = "../img/admin/nav_02_1.png"
})

document.querySelector('.e_homepage').addEventListener('mouseout',()=>{
	document.querySelector("#e_nav3").src = "../img/admin/nav_03_1.png"
})


/*관리를 누르면 사이드바2 들어나게하기*/
document.querySelector('.e_adminpage').addEventListener('click', (e)=>{
	document.querySelector('.e_navbox2').style.display = 'flex'
})

/*홈을 누르면 사이드바2 사라지게 하기*/
document.querySelector('.e_home').addEventListener('click', (e)=>{
	document.querySelector('.e_navbox2').style.display = 'none'
	document.querySelector('.e_sub1').style.display = 'none'
	document.querySelector('.e_sub2').style.display = 'none'
	document.querySelector('.e_sub3').style.display = 'none'
	document.querySelector('.e_sub4').style.display = 'none'
	document.querySelector('.e_sub5').style.display = 'none'
})

/* 사이드바2 헤드메뉴 누르면 서브메뉴 나타나게 하기*/
document.querySelector('.e_title1').addEventListener('click', (e)=>{
	document.querySelector('.e_sub1').style.display = 'block'
	document.querySelector('.e_sub2').style.display = 'none'
	document.querySelector('.e_sub3').style.display = 'none'
	document.querySelector('.e_sub4').style.display = 'none'
	document.querySelector('.e_sub5').style.display = 'none'
	
})
document.querySelector('.e_title2').addEventListener('click', (e)=>{
	document.querySelector('.e_sub2').style.display = 'block'
	document.querySelector('.e_sub1').style.display = 'none'
	document.querySelector('.e_sub3').style.display = 'none'
	document.querySelector('.e_sub4').style.display = 'none'
	document.querySelector('.e_sub5').style.display = 'none'
})
document.querySelector('.e_title3').addEventListener('click', (e)=>{
	document.querySelector('.e_sub3').style.display = 'block'
	document.querySelector('.e_sub1').style.display = 'none'
	document.querySelector('.e_sub2').style.display = 'none'
	document.querySelector('.e_sub4').style.display = 'none'
	document.querySelector('.e_sub5').style.display = 'none'
})
document.querySelector('.e_title4').addEventListener('click', (e)=>{
	document.querySelector('.e_sub4').style.display = 'block'
	document.querySelector('.e_sub1').style.display = 'none'
	document.querySelector('.e_sub3').style.display = 'none'
	document.querySelector('.e_sub2').style.display = 'none'
	document.querySelector('.e_sub5').style.display = 'none'
})
document.querySelector('.e_title5').addEventListener('click', (e)=>{
	document.querySelector('.e_sub5').style.display = 'block'
	document.querySelector('.e_sub1').style.display = 'none'
	document.querySelector('.e_sub3').style.display = 'none'
	document.querySelector('.e_sub4').style.display = 'none'
	document.querySelector('.e_sub2').style.display = 'none'
})




