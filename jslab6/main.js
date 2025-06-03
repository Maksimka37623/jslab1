class Apartment{
    id=null;
    ApartNumber=null;
    HouseNumber=null;
    Street=null;
    Owner=null;
    constructor(dataObj){
            this.id=dataObj.id;
            this.ApartNumber=dataObj.ApartNumber;
            this.HouseNumber=dataObj.HouseNumber;
            this.Street=dataObj.Street;
            this.Owner=dataObj.Owner;
    }
    displayAsTableRow(){
        return `<tr>
                    <td>${this.ApartNumber}</td>
                    <td>${this.HouseNumber}</td>
                    <td>${this.Street}</td>
                    <td>${this.Owner}</td>
                    <td>
						<button data-id="${this.id}" class="edit-apartment btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-apartment btn btn-danger">Видалити</button>
					</td>
                </tr>`
    }
    displayAsOption(){
        return `<option value ="${this.Street}">${this.Street}</option>`
    }
    edit(dataObj){
        this.ApartNumber=dataObj.ApartNumber;
        this.HouseNumber=dataObj.HouseNumber;
        this.Street=dataObj.Street;
        this.Owner=dataObj.Owner;
    }
}
class TypeOfServices{
    id=null;
    Name=null;
    Counter=null;
    PricePerMonth=null;
    constructor(dataObj){
            this.id=dataObj.id;
            this.Name=dataObj.Name;
            this.Counter=dataObj.Counter;
            this.PricePerMonth=dataObj.PricePerMonth;
    }
    displayAsTableRow(){
        return `<tr>
                    <td>${this.Name}</td>
                    <td>${this.Counter}</td>
                    <td>${this.PricePerMonth}</td>
                    <td>
						<button data-id="${this.id}" class="edit-typeOfServices btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-typeOfServices btn btn-danger">Видалити</button>
					</td>
                </tr>`
    }
    displayAsOption(){
        return `<option value= "${this.Name}">${this.Name}</option>`
    }
    edit(dataObj){
        this.Name=dataObj.Name;
        this.Counter=dataObj.Counter;
        this.PricePerMonth=dataObj.PricePerMonth;
    }
}
class Payment{
    id=null;
    Month=null;
    Sum=null;
    DateOfEntry=null;
    constructor(dataObj){
        this.id=dataObj.id;
        this.Month=dataObj.Month;
        this.Sum=dataObj.Sum;
        this.DateOfEntry=dataObj.DateOfEntry;
    }
    displayAsTableRow(){
        return `<tr>
                    <td>${this.Month}</td>
                    <td>${this.Sum}</td>
                    <td>${this.DateOfEntry}</td>
                    <td>
						<button data-id="${this.id}" class="edit-payment btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-payment btn btn-danger">Видалити</button>
					</td>
                </tr>`
    }
    edit(dataObj){
        this.Month=dataObj.Month;
        this.Sum=dataObj.Sum;
        this.DateOfEntry=dataObj.DateOfEntry;
    }
}

class BaseList{
    constructor(){
        this.id=1;
        this.list=[];
    }
    edit(dataObj){
        for(let i = 0;i<this.list.length;i++){
            if(dataObj.id==this.list[i].id){
                this.list[i].edit(dataObj);
                break;
            }
        }
    }
    delete(id){
		for(let i=0;i<this.list.length;i++){
			if(id==this.list[i].id){
				this.list.splice(i,1);
				break;
			}
		}
	}
	displayTableRows(){
		let content=``;
		for(let i=0; i<this.list.length; i++){
			content+=this.list[i].displayAsTableRow();
		}
		
		return content;
	}
	displaySelectOptions(){
		let content=``;
		for(let i=0;i<this.list.length;i++){
			content+=this.list[i].displayAsOption();
		}
		return content;
	}
	getById(id){
		for(let i=0;i<this.list.length;i++){
			if(id==this.list[i].id){
				return this.list[i];
			}
		}
	}
}
class ApartmentList extends BaseList{
    add(dataObj){
		    dataObj.id=this.id++
		    let apartment=new Apartment(dataObj);
		    this.list.push(apartment);
	}
}
class TypeOfServicesList extends BaseList{
	add(dataObj){
		dataObj.id=this.id++
		let typeOfServices=new TypeOfServices(dataObj);
		this.list.push(typeOfServices);
	}
}
class PaymentList extends BaseList{
	add(dataObj){
		dataObj.id=this.id++
		let payment=new Payment(dataObj);
		this.list.push(payment);
	}
}	
let apartments =new ApartmentList();
fetch('https://683f0e8c1cd60dca33de1d22.mockapi.io/api/apartments')
  .then(response => response.json())
  .then(data => {
	for(let i=0;i<data.length;i++){
		apartments.add(data[i]);
	}
	displayApartment();
  });
    
let typeOfServicess = new TypeOfServicesList();
fetch('https://683f0e8c1cd60dca33de1d22.mockapi.io/api/typeOfServicess')
  .then(response => response.json())
  .then(data => {
	for(let i=0;i<data.length;i++){
		typeOfServicess.add(data[i]);
	}
	displayTypeOfServices();
  });
let payments = new PaymentList();
function displayApartment(){
    const apartmentTab=document.getElementById('apartment');
    let apartmentTabContent=`
	    <h3>Квартира</h3>
        <button id="addApartment" class="btn btn-success" data-toggle="modal" data-target="#apartmentModal">Додати</button>
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
	apartmentTabContent+=apartments.displayTableRows();
    apartmentTabContent+=`</tbody>
    </table>`;  
    apartmentTab.innerHTML=apartmentTabContent;
}
function displayTypeOfServices(){
    const typeOfServicesTab=document.getElementById('typeOfServices');
    let typeOfServicesTabContent=`
        <h3>Вид послуг</h3>
        <button id="addTypeOfServices" class="btn btn-success" data-toggle="modal" data-target="#typeOfServicesModal">Додати</button>
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
	typeOfServicesTabContent+=typeOfServicess.displayTableRows();
    typeOfServicesTabContent+=`</tbody>
    </table>`;
    typeOfServicesTab.innerHTML=typeOfServicesTabContent;
}
function displayPayment(){
    const paymentTab=document.getElementById('payment');
    let paymentTabContent=`
	    <h3>Оплата</h3>
        <button id="addPayment" class="btn btn-success" data-toggle="modal" data-target="#paymentModal">Додати</button>
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
    paymentTabContent+=payments.displayTableRows();
    paymentTabContent+=`</tbody>
    </table>`;
    paymentTab.innerHTML=paymentTabContent;
}
displayApartment();
displayTypeOfServices();
displayPayment();

document.addEventListener('click', function(e){
   if(e.target.classList.contains('delete-apartment')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	apartments.delete(elementId);
	fetch('https://683f0e8c1cd60dca33de1d22.mockapi.io/api/apartments/'+elementId,{
		method:"DELETE",
	})
	.then(response => response.json())
	.then(data => {
		displayApartment();
	});
  } else if(e.target.classList.contains('delete-typeOfServices')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	typeOfServicess.delete(elementId)
	fetch('https://683f0e8c1cd60dca33de1d22.mockapi.io/api/typeOfServicess/'+elementId,{
		method:"DELETE",
	})
	.then(response => response.json())
	.then(data => {
		displayTypeOfServices();
	});
  }  else if(e.target.classList.contains('delete-payment')){
		e.preventDefault();
		let elementId=e.target.getAttribute('data-id');
    	payments.delete(elementId);
		displayPayment();
  } else if(e.target.classList.contains('edit-apartment')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
    let apartment=apartments.getById(elementId);
	document.getElementById('apartmentIdInput').value=apartment.id;
	document.getElementById('apartmentApartNumberInput').value=apartment.ApartNumber;
	document.getElementById('apartmentHouseNumberInput').value=apartment.HouseNumber; 
	document.getElementById('apartmentStreetInput').value=apartment.Street;
	document.getElementById('apartmentOwnerInput').value=apartment.Owner;
	document.getElementById('addApartment').click();

  } else if(e.target.classList.contains('edit-typeOfServices')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
    let typeOfServices=typeOfServicess.getById(elementId);
	document.getElementById('typeOfServicesIdInput').value=typeOfServices.id;
	document.getElementById('typeOfServicesNameInput').value=typeOfServices.Name;
	document.getElementById('typeOfServicesCounterInput').value=typeOfServices.Counter; 
	document.getElementById('typeOfServicesPricePerMonthInput').value=typeOfServices.PricePerMonth;
	document.getElementById('addTypeOfServices').click();

  } else if(e.target.classList.contains('edit-payment')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let payment=payments.getById(elementId);
	document.getElementById('paymentIdInput').value=payment.id;
	document.getElementById('paymentMonthInput').value=payment.Month;
	document.getElementById('paymentSumInput').value=payment.Sum; 
	document.getElementById('paymentDateOfEntryInput').value=payment.DateOfEntry;
	document.getElementById('addPayment').click();
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
        let newApartment={
            id:id,
            ApartNumber:ApartNumber,
            HouseNumber:HouseNumber,
            Street:Street,
            Owner:Owner
        }
		if(id==""){
			fetch('https://683f0e8c1cd60dca33de1d22.mockapi.io/api/apartments',{
				method:"POST",
				body:JSON.stringify(newConference)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					apartments.add(data[i]);
				}
				displayApartment();
			});
            apartments.add(newApartment);	
		}else{
			fetch('https://683f0e8c1cd60dca33de1d22.mockapi.io/api/apartments/'+newApartment.id,{
				method:"PUT",
				body:JSON.stringify(newApartment)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					conferences.add(data[i]);
				}
				displayApartment();
			});	
			apartments.edit(newApartment);
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
        let newTypeOfServices={
            id:id,
            Name:Name,
            Counter:Counter,
            PricePerMonth:PricePerMonth
        }
		if(id==""){
			fetch('https://683f0e8c1cd60dca33de1d22.mockapi.io/api/typeOfServicess',{
				method:"POST",
				body:JSON.stringify(newTypeOfServices)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					scientists.add(data[i]);
				}
				displayTypeOfServices();
			});		
			scientists.add(newTypeOfServices)
			
		} else{
			fetch('https://683f0e8c1cd60dca33de1d22.mockapi.io/api/typeOfServicess/'+newTypeOfServices.id,{
				method:"PUT",
				body:JSON.stringify(newTypeOfServices)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					scientists.add(data[i]);
				}
				displayTypeOfServices();
			});	
			typeOfServicess.edit(newTypeOfServices)
		}
		displayTypeOfServices();
		document.getElementById('typeOfServicesIdInput').value="";
		document.getElementById('typeOfServicesForm').reset();
		document.getElementById('closeTypeOfServicesModal').click();
		
	} else if(e.target.id=="paymentForm"){
		e.preventDefault();
		let id=document.getElementById('paymentIdInput').value;
		let Month=document.getElementById('paymentMonthInput').value;
		let Sum=document.getElementById('paymentSumInput').value; 
		let DateOfEntry=document.getElementById('paymentDateOfEntryInput').value;
        let newPayment = {
            id:id,
            Month:Month,
            Sum:Sum,
            DateOfEntry:DateOfEntry
        }
		if(id==""){
			payments.add(newPayment);
		} else{
			payments.edit(newPayment);
		}
            displayPayment();
            document.getElementById('paymentIdInput').value="";
		document.getElementById('paymentForm').reset();
		document.getElementById('closePaymentModal').click();
    }
});
