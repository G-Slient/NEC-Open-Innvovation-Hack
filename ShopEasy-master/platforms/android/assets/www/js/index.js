var options = {
	data : {
		"Beverages":["Red Bull Energy Drink", "Lipton Green Tea Bags", "Red Wine", "Nescafe Coffee Powder"],
		"Snacks":["Mixed Vegetables", "Dabur Honey", "Knorr Instant Tomato Soup", "Cadbury Chocolate Bar", "Cadbury Diary Milk", "Kissan Fresh Tomato Ketchup", "Black Olive oil ", "Maggi Masala Noodles", "Lays Potato Chips ", "Kelloggs Chocos", "Cadbury Oreo Biscuit", "Hakka Noodles", "Maggi Cuppa Masala Noodles", "Parle-G", "Treat -Jim Jam Biscuits"],
		"Beauty & Hygiene":["Anti-Dandruff Shampoo", "He Body Spray ", "Light Complete Night Cream", "Santoor Sandal & Turmeric Soap", "Dettol Handwash ", "Colgate Toothpaste", "Oral-B Tooth Brush"],
		"Fruits & Vegetables":["Grapes", "Fresho Tomato", "Potato", "Fresho Palak"],
		"Bakery, Cakes & Dairy":["GoodLife Toned Milk", "Britannia cake -fruity fun", "mother dairy curd ", "Milky Mist Paneer "],
		"Foodgrains, Oil & Masala":["Almonds", "Atta Whole Wheat ", "Saffola Edible Oil", "Black Pepper", "Moong Dal", "Chana Dal", "Urad Dal", "Tata Salt"]
	},
	categories:[
		{
			listLocation: "Beverages",
            header: "-- Beverages --"
		},
		{
			listLocation: "Snacks",
            header: "-- Snacks --"
		},
		{
			listLocation: "Beauty & Hygiene",
            header: "-- Beauty & Hygiene --"
		},
		{
			listLocation: "Fruits & Vegetables",
            header: "-- Fruits & Vegetables --"
		},
		{
			listLocation: "Bakery, Cakes & Dairy",
            header: "-- Bakery, Cakes & Dairy --"
		},
		{
			listLocation:"Foodgrains, Oil & Masala",
	    header: "-- Foodgrains, Oil & Masala --"
		}
	],
	list: {
		maxNumberOfElements:6,
		match: {
			enabled: true
		}
	}
};
var back1 = () => {
	document.getElementById('exploreView').style.visibility = 'hidden';
		document.getElementById('selectView').style.visibility = 'visible';


}


var back2 = () => {
	document.getElementById('selectView').style.visibility = 'visible';
	document.getElementById('selectStore').style.visibility = 'hidden';
}

var back3 = () => {
	document.getElementById('exploreView').style.visibility = 'visible';
	document.getElementById('recommendedStores').style.visibility = 'hidden';
}

var back4 = () => {
	document.getElementById('selectStore').style.visibility = 'visible';
	document.getElementById('shopView').style.visibility = 'hidden';
}

var back5 = () => {
	document.getElementById('shopView').style.visibility = 'visible';
	document.getElementById('checkout').style.visibility = 'hidden';
}

var back6 = () => {
	document.getElementById('checkout').style.visibility = 'visible';
	document.getElementById('billingQr').style.visibility = 'hidden';
}



$("#itemInput").easyAutocomplete(options);
var itemList =[];

var addItem = () =>{

	var itemName = document.getElementById("itemInput").value;
	if(itemName!='')
	{
	itemList.push(itemName);
	document.getElementById("itemInput").value = "";
	var listItem = '<div class="item white mark border-light-blue margin-button shadow">'+
            '<h2><strong>'+itemName+'</strong></h2>'+'<button class="red-400 icon-text right" onclick="removeItem(this.parentNode)"><i class="icon ion-trash-b"></i></button></div>';       
	document.getElementById("itemList").innerHTML +=  listItem;
	}
}

var addCart = () => {
	// var cartItem = '<div class="item white mark border-light-blue margin-button shadow"><h2><strong>'+itemname+'</strong></h2><h2>'+itemcost+'</h2><span style="background-color:#2196f3 ; color: white;">'+itemoffer+'</span><button class="green right radius" style="right: 25%; font-size: 26px;height: 20px;top:3px;">+</button><h2 class="right" style="right: 55px;font-size: 18px"><strong style="position: absolute;right: 21%;top: 10%;">'+quant+'</strong></h2><button class="red right radius" style="right:3%;font-size: 30px;height: 20px;top:3px;">-</button></div>';
	var cartItem = '<div class="item white mark border-light-blue margin-button shadow"><h2><strong>Maggi</strong></h2><h2>Rs.200</h2><span style=" background-color:#2196f3 ; color: white;">Buy 1 Get 1</span><button class="green right radius" style="right: 25%; font-size: 26px;height: 20px;top:3px;">+</button><h2 id="quant'+count+'class="right" style="right: 55px;font-size: 18px"><strong style="position: absolute;right: 21%;top: 10%;">'+quant+'</strong></h2><button class="red right radius" style="right:3%;font-size: 30px;height: 20px;top:3px;">-</button></div>';
}
var storeNumber; 

var visitedStore = storeNum => {
	storeNumber=storeNum;
	document.getElementById('selectStore').style.visibility='hidden';
	document.getElementById('shopView').style.visibility='visible';
}


var removeItem = (element) => {
	element.parentNode.removeChild(element);
	document.getElementById('shopView').style.visibility='visible';
}

var exploreStore = () => {
	document.getElementById('exploreView').style.visibility = 'visible';
	document.getElementById('selectView').style.visibility = 'hidden';
}

var startShopping = () => {

	document.getElementById('selectStore').style.visibility = 'visible';

	document.getElementById('selectView').style.visibility = 'hidden';
}

var malls_list;
//var first_store;
var recommendStore = () => {
	document.getElementById('recommendedStores').style.visibility = 'visible';
	document.getElementById('exploreView').style.visibility = 'hidden';

	
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				console.log("Done!");
			    //console.log(JSON.parse(xhttp.responseText));
				//Getting the malls list.
				malls_list=JSON.parse(xhttp.responseText);
				console.log(malls_list.items_found[0]);
				console.log(malls_list.store_ids[0]);
				//first_store = malls_list.store_id[0];

				for(var i=0;i<malls_list.items_found.length;i++){
					console.log(i);
					var mallItem =  '<div class="item"><div class="left"><img class="avatar radius" src="img/store.png"></div><h2><strong>'+malls_list.store_ids[i]+'</strong></h2><p class="text-grey-500">Address</p><div class="right"><i class="icon ion-android-locate" style="font-size: 35px;position: absolute;right: 18px; color:#0d47a1"></i></div></div>';
					document.getElementById("mallList").innerHTML +=  mallItem;
			     }	
			
				}
			};	
	
		url = "http://192.168.43.68:5000/mall_recommend?list="+itemList;
		xhttp.open("GET", url, true);
		//xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhttp.send();
			
	

}

var items_array = [];
var quantity_array =[];
var item_name;
var item_id;
var price;
var offer;
var count=1;
var totalPrice=90;


// this is function for QR code and data of QR code is in variable "res"
var scan = () => {
	cordova.plugins.barcodeScanner.scan(
	  function (result) {
		  if(!result.cancelled){
			var res = result.text;
			var get_text = res;
			var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					console.log("Done!");
				    console.log(JSON.parse(xhttp.responseText));
					var data =JSON.parse(xhttp.responseText);
					item_name = data.name;
					item_id = data.item_id;
					price = data.price;
        			offer = data.offer_id;
        			reccommend = data.item_add;
      				items_array.push(item_id);
					//quantity_array.push();
        			
        			if(data.error_code!=1){
        				totalPrice = totalPrice+price;
	        			document.getElementById('totalAmount').innerHTML="Total: Rs."+totalPrice;
						var cartItem = '<div id="heyyyy" class="item white mark border-light-blue margin-button shadow"><h2><strong>'+item_name+'</strong></h2><h2>Rs.'+price+'</h2><span style=" background-color:#2196f3 ; color: white;">'+offer+'</span><button class="green right radius addBtn" style="right: 25%; font-size: 26px;height: 20px;top:3px;">+</button><h2 class="right quantity" style="position: absolute;right: 21%;top: -12%;right: 55px;font-size: 18px;font-weight: bold;">1</h2><button id="sub" class="red right radius subBtn" style="right:3%;font-size: 30px;height: 20px;top:3px;" >-</button></div>';
						document.getElementById("itemCart").innerHTML +=  cartItem;

						if(reccommend!="-1"){
							if(count==1){
								var head = '<h2 style="font-size: 19px;font-weight: bold;margin-left: 15%;margin-bottom: 10px;text-shadow: 1px 1px aqua;">Recommended Products</h2>';
								document.getElementById('recommendedItem').innerHTML = head;
								count =0;
							}
							var listItem = '<div class="item white mark border-light-blue margin-button shadow">'+
            '<h2><strong>'+reccommend+'</strong></h2>'+'<button class="red-400 icon-text right" onclick="removeItem(this.parentNode)"><i class="icon ion-trash-b"></i></button></div>';
            			document.getElementById('recommendedItem').innerHTML += listItem;

						}
					}
					else{
						alert("Item not found in store!");
					}


					}
					};
				
				//first_store	="2";	
				
				
				url = "http://192.168.43.68:5000/get_item?id="+get_text+"&store_id=store_"+storeNumber;
				
			
			
				//url = "http://127.0.0.1:8008/retrieve?id="+get_text;
				xhttp.open("GET", url, true);
				//xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhttp.send();
		

			  //fetch data using 'res'
			// var quant=1;  
			// var cartItem = '<div id="heyyyy" class="item white mark border-light-blue margin-button shadow"><h2><strong>'+item_name+'</strong></h2><h2>Rs.'+price+'</h2><span style=" background-color:#2196f3 ; color: white;">Buy 1 Get 1</span><button class="green right radius addBtn" style="right: 25%; font-size: 26px;height: 20px;top:3px;" >+</button> <h2 class="right quantity" style="position: absolute;right: 21%;top: -12%;right: 55px;font-size: 18px;font-weight: bold;">'+quant+'</h2><button class="red right radius subBtn" style="right:3%;font-size: 30px;height: 20px;top:3px;" >-</button></div>
			// // console.log(res) ;
			// document.getElementById("itemCart").innerHTML +=  cartItem;
		  }
	  },
	  function (error) {
		  alert("error : " + error);
	  }
	);
}

var hashed;
var billGeneration = () => {
	document.getElementById('billingQr').style.visibility = 'visible';
	document.getElementById('shopView').style.visibility = 'hidden';
	var money = parseInt(document.getElementByClassName('walletMoney').textContent);
	document.getElementByClassName('walletMoney').innerHTML=money-totalPrice;


	// To store the bill details
		var bill_data ={ 'userid' :"user001",
		'item_ids':items_array,
		'quantity' : ['1'],
		'total_bill_price' : totalPrice,
		'discount_price' : 0,
		'shop_id' : 'store_'+storeNumber}

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		   if (this.readyState == 4 && this.status == 200) {
		   console.log("Done!");
		   var data;
		   data=JSON.parse(xhttp.responseText);
		   console.log(data.hashed_string);

		   var typeNumber = 3;
           var errorCorrectionLevel = 'L';
           var qr = qrcode(typeNumber, errorCorrectionLevel);
           qr.addData(data.hashed_string);
           qr.make();
           document.getElementById('placeHolder').innerHTML = qr.createImgTag(5);
		   hashed=data.hashed_string;
		   if(data.success=="1")
		   {
			 // Print Verified 
			 console.log("Success")  
		   }
		   else
		   {
			 // Unsucesfull Please Contact the help desk
			 console.log("Unsuscessful")
		   }

		   }
		};	

		url = "http://192.168.43.68:5000/transaction_complete?complete_data="+JSON.stringify(bill_data);
		xhttp.open("GET", url, true);
		xhttp.send();
}

var checkQr = () => {
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            if(!result.cancelled){
            var res = result.text;

	      var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			   if (this.readyState == 4 && this.status == 200) {
			   console.log("Done!");
			   var data;
			   data=JSON.parse(xhttp.responseText);
			   console.log(data.hashed_string);
			   if(data.success=='1')
			   {	

			   	var x = '<div class="header blue-900"><div class="left" onclick="back6()"><button class="icon ion-chevron-left" onclick=""></button></div><h1><strong>QNahi</strong></h1></div><h1 style="font-size: 40px;text-align: center;margin-left:30%text: -webkit-match-parent;color: black;text-shadow: 5px 5px #3F51B5;">VERIFIED</h1>';

			   		// var x = '<div class="header blue-900"><div class="left"><button class="icon ion-chevron-left"></button></div><h1><strong>QNahi</strong></h1></div><h2>Verified!</h2><img src="img/happy.png" style="top: 5%;position: absolute;"><h2>Happy Shopping!</h2>';
			   		document.getElementById('guardSection').innerHTML=x;
			   		// alert("VERIFIED");
			   		// document.getElementById('guardSection').innerHTML='';
			   }
			   else
			   {
			   		alert('NOT VERIFIED');
			   }

			   }
			};	

			url = "http://192.168.43.68:5000/check_hash?hash="+res;
			xhttp.open("GET", url, true);
			xhttp.send();

       
              }
          },
          function (error) {
              alert("error : " + error);
          }
        );
}

$('.subBtn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('h2')[2];
    var value = parseInt($input.textContent);
 
    if (value > 1) {
        value = value - 1;
    } else {
        $input.parentNode.remove();
    }
 
  $input.innerHTML=value;
 
});


$('.addBtn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input=$this.closest('div').find('.quantity').text();
    // console.log($this.closest('div').find('.quantity'));
    // var $input = $this.closest('div').find('h2')[2];
    // console.log($this.closest('div').find('.quantity').text());
    var value = parseInt($input);
    // console.log(value);

    if (value >= 1) {
        value = value + 1;
        // console.log(value);
    } 
 
  	$this.closest('div').find('.quantity')["0"].innerHTML=value;
});

var login = () => {
	var user = document.getElementById('useridInput').value;
	if(user == 'g'){
		document.getElementById('loginPage').style.visibility='hidden';
		document.getElementById('guardSection').style.visibility='visible';
	}
	else{
		document.getElementById('loginPage').style.visibility='hidden';
		document.getElementById('selectView').style.visibility='visible';
	}
}



$('.add').click(function () {
		if ($(this).prev().val() < 3) {
    	$(this).prev().val(+$(this).prev().val() + 1);
		}
});
$('.sub').click(function () {
		if ($(this).next().val() > 1) {
    	if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
});