let Apartment = [
    {
        id:1,
        ApartNumber:"58",
        HouseNumber:"15",
        Street:"Lesya Ukrainka",
        Owner:"billy herrington"
    },
    {
        id:2,
        ApartNumber:"100",
        HouseNumber:"60",
        Street:"Vasyl Stus",
        Owner:"Steve Jobs"
    },
    {
        id:3,
        ApartNumber:"7",
        HouseNumber:"2",
        Street:"B. Khmelnytskyi",
        Owner:"Marian Slabonyha"
    }
];
let TypeOfServices = [
    {
        id:1,
        Name:"Water supply",
        counter:"Yes",
        PricePerMonth:"150"
    },
    {
        id:2,
        Name:"Heating",
        Counter:"No",
        PricePerMonth:"1000"
    },
    {
        id:3,
        Name:"Electricity",
        counter:"Yes",
        PricePerMonth:"320"
    }
];
let Payment = [
    {
        id:1,
        Month:"05",
        Sum:"1500",
        DateOfEntry:"10.05.2025",
    },
    {
        id:2,
        Month:"10",
        Sum:"2000",
        DateOfEntry:"01.10.2024"
    },
    {
        id:3,
        Month:"07",
        Sum:"2300",
        DateOfEntry:"15.07.2024",
    }
];

ApartmentLastId = 3;
TypeOfServicesLastId = 3;	
PaymentLastId = 3;	

function displayApartment(){
    const ApartmentTab=document.getElementById('Apartment');
    let ApartmentTabContent=`
	    <h3>Квартира</h3>
         <table class="table">
	    	<thead>
		    	<tr>
			    	<th>№ квартири</th>
			    	<th>№ будинка</th>
			    	<th>Вулиця</th>
			    	<th>Власник</th>
			    </tr>
		    </thead>
		    <tbody>
	    `;
    for(let i=0;i<Apartment.length;i++){
        ApartmentTabContent+=`
                <tr>
                    <td>${Apartment[i].ApartNumber}</td>
                    <td>${Apartment[i].HouseNumber}</td>
                    <td>${Apartment[i].Street}</td>
                    <td>${Apartment[i].Owner}</td>
                    <td>
						<button data-id="${Apartment[i].id}" class="edit-apartment btn btn-warning">Редагувати</button>
						<button data-id="${Apartment[i].id}" class="delete-apartment btn btn-danger">Видалити</button>
					</td>
                </tr>
        `;
    }
    ApartmentTabContent+=`</tbody>
    </table>`;
    ApartmentTab.innerHTML=ApartmentTabContent;
}
function displayTypeOfServices(){
    const TypeOfServicesTab=document.getElementById('TypeOfServices');
    let TypeOfServicesTabContent=`
        <h3>Вид послуг</h3>
          <table class="table">
            <thead>
                <tr>
                    <th>Назва</th>
                    <th>Наявність лічильника</th>
                    <th>Ціна за 1 місяць</th>
                </tr>
            </thead>
            <tbody>
        `;
        for(let i=0;i<TypeOfServices.length;i++){
            TypeOfServicesTabContent+=`
                    <tr>
                        <td>${TypeOfServices[i].Name}</td>
                        <td>${TypeOfServices[i].Counter}</td>
                        <td>${TypeOfServices[i].PricePerMonth}</td>
                        <td>
						    <button data-id="${TypeOfServices[i].id}" class="edit-typeOfServices btn btn-warning">Редагувати</button>
						    <button data-id="${TypeOfServices[i].id}" class="delete-typeOfServices btn btn-danger">Видалити</button>
					    </td>
                    </tr>
            `;
        }
        TypeOfServicesTabContent+=`</tbody>
        </table>`;
        TypeOfServicesTab.innerHTML=TypeOfServicesTabContent;
}
function displayPayment(){
    const PaymentTab=document.getElementById('Payment');
    let PaymentTabContent=`
	<h3>Оплата</h3>
      <table class="table">
		<thead>
			<tr>
				<th>Квартира</th>
				<th>Вид послуг</th>
				<th>Місяць, рік</th>
			</tr>
		</thead>
		<tbody>
	`;
    for(let i=0;i<Payment.length;i++){
        PaymentTabContent+=`
                <tr>
                    <td>${Payment[i].Month}</td>
                    <td>${Payment[i].Sum}</td>
                    <td>${Payment[i].DateOfEntry}</td>
                    <td>
						<button data-id="${Payment[i].id}" class="edit-payment btn btn-warning">Редагувати</button>
						<button data-id="${Payment[i].id}" class="delete-payment btn btn-danger">Видалити</button>
					</td>
                </tr>
        `;
    }
    PaymentTabContent+=`</tbody></table>`;
    PaymentTab.innerHTML=PaymentTabContent;
}
displayApartment();
displayTypeOfServices();
displayPayment();

document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-apartment')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<Apartment.length;i++){
		if(elementId==Apartment[i].id){
			Apartment.splice(i,1);
			break;
		}
	}
	displayApartment();
  } 
  else if(e.target.classList.contains('delete-typeOfServices')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<TypeOfServices.length;i++){
		if(elementId==TypeOfServices[i].id){
			TypeOfServices.splice(i,1);
			break;
		}
	}
	displayTypeOfServices();
  } 
  else if(e.target.classList.contains('delete-payment')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<Payment.length;i++){
		if(elementId==Payment[i].id){
			Payment.splice(i,1);
			break;
		}
	}
	displayPayment();
  } else if(e.target.classList.contains('edit-apartment')){A
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<Payment.length;i++){
		if(elementId==Payment[i].id){
			document.getElementById('apartmentIdInput').value=Apartment[i].id;
			document.getElementById('apartmentApartNumberInput').value=Apartment[i].ApartNumber;
			document.getElementById('apartmentHouseNumberInput').value=Apartment[i].HouseNumber; 
			document.getElementById('apartmentStreetInput').value=Apartment[i].Street;
			document.getElementById('apartmentOwnerInput').value=Apartment[i].Owner;
			document.getElementById('addApartment').click();
			break;
		}
	}
  } else if(e.target.classList.contains('edit-typeOfServices')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<scientists.length;i++){
		if(elementId==scientists[i].id){
			document.getElementById('typeOfServicesIdInput').value=TypeOfServices[i].id;
			document.getElementById('typeOfServicesNameInput').value=TypeOfServices[i].Name;
			document.getElementById('typeOfServicesCounterInput').value=TypeOfServices[i].Counter; 
			document.getElementById('typeOfServicesPricePerMonthInput').value=TypeOfServices[i].PricePerMonth;
			document.getElementById('addTypeOfServices').click();
			break;
		}
	}
  } else if(e.target.classList.contains('edit-payment')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<Payment.length;i++){
		if(elementId==Payment[i].id){
			document.getElementById('paymentIdInput').value=participations[i].id;
			document.getElementById('paymentMonthInput').value=participations[i].Month;
			document.getElementById('paymentSumInput').value=participations[i].Sum; 
			document.getElementById('paymentDateOfEntryInput').value=participations[i].DateOfEntry;
			document.getElementById('addPayment').click();
			break;
		}
	}
  }
});

document.addEventListener('submit', function(e){
	if(e.target.id=="apartmentForm"){
		e.preventDefault();
		let id=document.getElementById('apartmentIdInput').value;
		let ApartNumber=document.getElementById('apartmentApartNumberInput').value;
		let HouseNumber=document.getElementById('apartmentHouseNumberInput').value; 
		let Street=document.getElementById('apartmentStreetInput').value;
		let Owner=document.getElementById('apartmentOwnerInput').value;
		if(id==""){
			let newApartment={
				id:++ApartmentLastId,
				ApartNumber:ApartNumber,
				HouseNumber:HouseNumber,
				Street:Street,
				Owner:Owner
				}
			Apartment.push(newApartment);
		} else{
			for(let i=0;i<Apartment.length;i++){
				if(id==Apartment[i].id){
					Apartment[i].id=document.getElementById('apartmentIdInput').value;
					Apartment[i].ApartNumber=document.getElementById('apartmentApartNumberInput').value; 
					Apartment[i].HouseNumber=document.getElementById('apartmentHouseNumberInput').value;
					Apartment[i].Street=document.getElementById('apartmentStreetInput').value;
					Apartment[i].Owner=document.getElementById('apartmentOwnerInput').value;
					break;
				}
			}
		}
		displayApartment();
		document.getElementById('apartmentIdInput').value="";
		document.getElementById('apartmentForm').reset();
		document.getElementById('closeApartmentModal').click();
		
	} else if(e.target.id=="typeOfServicesForm"){
		e.preventDefault();
		let id=document.getElementById('typeOfServicesIdInput').value;
		let Name=document.getElementById('typeOfServicesNameInput').value;
		let Counter=document.getElementById('typeOfServicesCounterInput').value; 
		let PricePerMonth=document.getElementById('typeOfServicesPricePerMonthInput').value;
		if(id==""){
			let newTypeOfServices={
				id:++TypeOfServicesLastId,
				Name:Name,
				Counter:Counter,
				PricePerMonth:PricePerMonth
				}
			TypeOfServices.push(newTypeOfServices)
		} else{
			for(let i=0;i<TypeOfServices.length;i++){
				if(id==TypeOfServices[i].id){
					TypeOfServices[i].id=document.getElementById('typeOfServicesIdInput').value
					TypeOfServices[i].Name=document.getElementById('typeOfServicesNameInput').value
					TypeOfServices[i].Counter=document.getElementById('typeOfServicesCounterInput').value
					TypeOfServices[i].PricePerMonth=document.getElementById('typeOfServicesPricePerMonthInput').value
					break;
				}
			}
		}
		displayScientists();
		document.getElementById('typeOfServicesIdInput').value="";
		document.getElementById('typeOfServicesForm').reset();
		document.getElementById('closeTypeOfServicesModal').click();
		
	} else if(e.target.id=="paymentForm"){
		e.preventDefault();
		let id=document.getElementById('paymentIdInput').value;
		let Month=document.getElementById('paymentMonthInput').value;
		let Sum=document.getElementById('paymentSumInput').value; 
		let DateOfEntry=document.getElementById('paymentDateOfEntryInput').value;
		if(id==""){
			let newPayment={
				id:++PaymentLastId,
				Month:Month,
				Sum:Sum,
				DateOfEntry:DateOfEntry
				}
			Payment.push(newPayment)
		} else{
			for(let i=0;i<Payment.length;i++){
				if(id==Payment[i].id){
					Payment[i].id=document.getElementById('paymentIdInput').value
					Payment[i].Month=document.getElementById('paymentMonthInput').value
					Payment[i].Sum=document.getElementById('paymentSumInput').value
					Payment[i].DateOfEntry=document.getElementById('paymentDateOfEntryInput').value
					break;
				}
			}
		}
		displayPayment();
		document.getElementById('paymentIdInput').value="";
		document.getElementById('paymentForm').reset();
		document.getElementById('closePaymentModal').click();
		
	} 
  });
