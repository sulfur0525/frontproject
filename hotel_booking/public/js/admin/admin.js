console.log('하이요')
navbox_print()
header_print()
footer_print()

function footer_print(){
	let html = `<div class="ft_wrap">
					<div class="ft_top"> <!-- 상단 푸터 -->
						<div class="logobox2"><!-- logo -->
							<a href="#">THE EZEN<br/> Hotels & Resort</a>
						</div>
						<div class="ft_inner">
							<div class="top_inner">
								<a>THE EZEN</a>
								<a>EZEN MONOGRAM</a>
								<a>EZEN STAY</a>
							</div>
							<div class="bottom_inner">
								<ul class="bi_1">
									<li>서울이젠호텔 02-2233-3131</li>
									<li>제주이젠호텔 064-735-5114</li>
									<li>이젠스테이	  02-2230-0700</li>
									<li>이젠리워즈  02-2230-5528</li>
								</ul>
								<ul class="bi_2">
									<li><a href="#">호텔이젠소개</a></li> |
									<li><a href="#">고객문의</a></li> |
									<li><a href="#">사이트맵</a></li> |
									<li><a href="#">The Ezen shop</a></li> |
									<li><a href="#">삼성상품권</a></li>
								</ul>
								<div>
									<h4>SNS</h4>
									<img style="height: 25px" src="../img/index/facebook.png">
									<img style="height: 25px" src="../img/index/instagram.png">
									<img style="height: 25px" src="../img/index/kakao-talk.png">
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<div class="ft_bottom"><!-- 하단 푸터-->
					<div>
						<ul >
							<li><a href="#">이젠리워즈 약관</a></li> |
							<li><a href="#">개인정보처리방침</a></li> |
							<li><a href="#">이메일무단수집금지</a></li> |
							<li><a href="#">윤리경영(부정제보)</a></li> |
							<li><a href="#">건축/시설물 안전관리</a></li> 
						</ul>
					</div>
					<ul>
						<li>(주) 호텔이젠 서울특별시 중구 동호로 249 (우 : 04605)</li>
						<li>대표이사 누구누구</li>
						<li>사업자등록번호 123-45-678912</li>
						<li>통신판매신고번호 중구00123호</li>
						<li class="bbox"><a href="#">사업자정보확인 ></a></li>
						<li>호스팅서비스제공자 삼성SDS(주)</li>
						<li>서울객실예약 ezen.reserve@samsung.com</li>
						<li>제주객실예약 jeju.ezen@samsung.com</li>
					</ul>
					<span>COPYRIGHT © HOTEL SHILLA CO., LTD. ALL RIGHTS RESERVED.</span>
				</div>`
	
	document.querySelector('.footer').innerHTML = html
}

function header_print(){
	let html = `<div class="h_wrap">
					<div class="btn"> <!-- 버튼 구역 -->
						<button class="hotellsearch" style="height: 50px" type="button">호텔찾기<img style="width: 20px" src="../img/index/search.png"></button>
						<button class="dining" style="height: 50px" type="button">예약<img style="width: 15px" src="../img/index/calendar.png"></button>
					</div>
					
					<div class="logobox"><!-- logo -->
						<a href="#">THE EZEN<br/> Hotels & Resort</a>
					</div>
					
					<div class="menu"> <!-- 메뉴바 -->
						<ul class="m_top">
							<li><a href="#">로그인</a></li>|
							<li><a href="#">이젠리워즈 가입</a></li>|
							<li><a href="#">예약확인 ⋁</a></li>|
							<li><a href="#">한국어 ⋁</a></li>
						</ul>
						<ul class="m_bottom">
							<li><a href="#">호텔이젠 소개</a></li>
							<li><a href="#">객실 소개</a></li>
							<li><a href="#">예약하기</a></li>
						</ul>
					</div>
				</div>`
				
	document.querySelector('.header').innerHTML = html
}

function navbox_print(){
	let html1 = `<ul class="e_nav_items">
					<li>	<!-- 좌측 사이드바1 아이템1개 -->
						<a href="admin_home.html" class="e_nav1_item e_home"><img id="e_nav1" alt="" src="../img/admin/nav_01_1.png"></a>
						<span class="e_nav1_title">홈</span>
					<li>
					<li>	<!-- 좌측 사이드바1 아이템1개 -->
						<a href="admin_realtime.html" class="e_nav1_item e_adminpage"><img id="e_nav2" alt="" src="../img/admin/nav_02_1.png"></a>
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
									<a href="admin_realtime.html"><img alt="" src="../img/admin/nav_07.png">실시간 객실 상태</a>
								</li>
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a href="#"><img alt="" src="../img/admin/nav_07.png">객실 현황표</a>
								</li>
							</ul>
						</li>
						
						<li class="e_menu"><!-- 좌측 사이드바2 아이템1개 -->
							<a class="e_menu_title e_title2"><div><img alt="" src="../img/admin/nav_04.png">객실/예약 조회</div>
							<span><img alt="" src="../img/admin/nav_06.png"> </span></a>
							
							<ul class="e_sub_menus e_sub2"><!-- 서브아이템 모음 -->
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a href="admin_bookinglist.html"><img alt="" src="../img/admin/nav_07.png">객실/예약 조회</a>
								</li>
								<li class="e_sub_menu"><!-- 서브아이템 1개 -->
									<a href="admin_roomstock.html"><img alt="" src="../img/admin/nav_07.png">객실 재고 조회</a>
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




