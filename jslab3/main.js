let Apartment = [
    {
        ApartNumber:"58",
        HouseNumber:"15",
        Street:"Lesya Ukrainka",
        Owner:"billy herrington"
    },
    {
        ApartNumber:"100",
        HouseNumber:"60",
        Street:"Vasyl Stus",
        Owner:"Steve Jobs"
    },
    {
        ApartNumber:"7",
        HouseNumber:"2",
        Street:"B. Khmelnytskyi",
        Owner:"Marian Slabonyha"
    }
];
let TypeOfServices = [
    {
        Name:"Water supply",
        counter:"Yes",
        PricePerMonth:"150"
    },
    {
        Name:"Heating",
        counter:"No",
        PricePerMonth:"1000"
    },
    {
        Name:"Electricity",
        counter:"Yes",
        PricePerMonth:"320"
    }
];
let Payment = [
    {
        Month:"05",
        Sum:"1500",
        DateOfEntry:"10.05.2025",
    },
    {
        Month:"10",
        Sum:"2000",
        DateOfEntry:"01.10.2024"
    },
    {
        Month:"07",
        Sum:"2300",
        DateOfEntry:"15.07.2024",
    }
];

	
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
                </tr>
        `;
    }
    ApartmentTabContent+=`</tbody></table>`;
    ApartmentTab.innerHTML=ApartmentTabContent;
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
                    <td>${TypeOfServices[i].counter}</td>
                    <td>${TypeOfServices[i].PricePerMonth}</td>
                </tr>
        `;
    }
    TypeOfServicesTabContent+=`</tbody></table>`;
    TypeOfServicesTab.innerHTML=TypeOfServicesTabContent;
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
                </tr>
        `;
    }
    PaymentTabContent+=`</tbody></table>`;
    PaymentTab.innerHTML=PaymentTabContent;