let year = new Date().getFullYear();
let month = new Date().getMonth()+1;
let day = new Date().getDate();


stock_print()



function stock_print(){
	let html = `<thead>
						<tr>
							<th>날짜</th>
							<th>객실타입</th>
							<th>총수량</th>
							<th>체크인</th>
							<th>예약</th>
							<th>재고수량</th>
						</tr>
					</thead>
					<tbody>`
	
	for(let j = 0 ; j<4 ; j++){				
		let date = date_formet(new Date(year,month-1 ,(day+j)));
		
		for(let i = 1 ; i<6 ; i++){
			html += `<tr>
						<td>${date}</td>
						<td>${type(i)}</td>
						<td>${count(i)}</td>
						<td>${realtimeprint(i)}</td>
						<td>${sale(i)}</td>
						<td>${count(i)-sale(i)}</td>
					</tr>`
			}	
					
		html += `<tr class="total">
					<td>2023-02-03</td>
					<td>소계</td>
					<td>${date}</td>
					<td>${realtimeprint(6)}</td>
					<td>${sale(6)}</td>
					<td>${count(6)-sale(6)}</td>
				</tr>
			</tbody>`	
		}
			document.querySelector('.stock_table').innerHTML = html	
}


//날짜 포멧
function date_formet(date){
	let d_year = date.getFullYear(); 
	let d_month = (date.getMonth()+1) <= 9 ? '0'+(date.getMonth()+1) : (date.getMonth()+1);
	let d_day = date.getDate()<=9 ?  '0'+date.getDate()  : date.getDate();
	return `${d_year}-${d_month}-${d_day}`
}