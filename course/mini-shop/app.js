(function(){

	const PRODUCTS_LINK = 'http://my-json-server.typicode.com/achubirka/db/products';
	const APP = document.getElementById('app');
	const CARD_LIST = document.getElementById('productsList');
	const CART = document.getElementById('cart-content'); 
	let cartData = getCartData() || {}; // Get data cart or create new object (if there are not any data)

	const counter_el = document.getElementById('counter');
	const total_el = document.getElementById('total');

	let totalNum;
	let totalPrice;

	productsRender();
	getCartData()
	openCart();
	
	// Get vs watch products list
	function productsRender(){
		fetch(PRODUCTS_LINK).then((response) => response.json()).then((data) => {
			let item = '';
			const items = []; 
			data.map((value, index)=>{
				item = `
					<div class="card-body card-box-${index}" data-id="${value.available}">
						<h3 class="card-title">${value.name}</h3>
						<p class="card-text">Short description</p>
						<span>$</span>
						<span class="card-text card-price">${value.price}</span>
						<a href="#" class="btn btn-primary js_add_to_cart" data-action="add" id="${index}">Add</a>
					</div>`;
				items.push(item);
				return items;      
			});  
			
			CARD_LIST.innerHTML = items.join('');
			
			}).catch((response) => {
				console.log('REQUEST error --->', response);
			});
	
		};


	// Pattern - set event handler
	function addEvent(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		} else {
			element.attachEvent('on'+type, function(){ 
				handler.call(element); 
			});
		}
		return false;
	}

	// Get data from LocalStorage
	function getCartData(){
		return JSON.parse(localStorage.getItem('cart-content'));
	}

	// Set data to LocalStorage
	function saveCartData(value){
		localStorage.setItem('cart-content', JSON.stringify(value));
		return false;
	}


	// Add product to cart
	function addToCart(target){
		
			let	parent_element = CARD_LIST.querySelector(`.card-box-${target.id}`), // button's "Add" parent element
				item_avalaible = Number(CARD_LIST.querySelector(`.card-box-${target.id}`).getAttribute('data-id')), 
				item_id = target.id,
				item_title = parent_element.querySelector('.card-title').innerHTML, // product name
				item_price = parent_element.querySelector('.card-price').innerHTML; // product price
				
				if(!cartData.hasOwnProperty(item_id) && item_avalaible !=0){
					cartData[item_id] = [item_title, item_price, 0, item_avalaible];	
				}
				
				// if product is in the cart, change number of it
				
				if(cartData.hasOwnProperty(item_id) 
					&& (cartData[item_id][2] < item_avalaible) 
					&& (item_avalaible != 0)){ 
					
					cartData[item_id][2] += 1;
					count(cartData);
					getTotal(cartData);					
				}
				if(cartData[item_id][2] == null){
					cartData[item_id][2] = 0;
				}
				
				if(cartData[item_id][2] === item_avalaible){
					target.setAttribute('disabled', true);
					
				}
						
				count(cartData);
				getTotal(cartData);					
		// update data LocalStorage
		if(!saveCartData(cartData)){
			CART.innerHTML = 'Product is added to cart!';
		} 
		openCart();
		return false;
	}

	
	// get data from the cart
	function openCart(){
		let items = getCartData(), 
				item_html = '',
				count_id = 0,
				product_name,
				product_count,
				product_price,
				product_avalaible,
				result;			
				
		// data for output
		if(items !== null){
				for(let item in items){
					count_id++;
					product_name = items[item][0];
					product_price = +items[item][1];
					product_count = items[item][2];
					product_avalaible = items[item][3];
					result = product_price*product_count;
					if(result<0){
						result = 0;
					}
					if(product_count == null){
						product_count = 0;
					}
					if(product_avalaible !=0 && product_count !=0){
						item_html += `
							<li class="card-text card-item" data-target="${product_avalaible}">
								<div class="card-wrap">
									<span class="card-text card-name">${product_name}</span>
									<div>
										<span>$</span>
										<span class="card-text card-price">${result.toFixed(2)}</span>
									</div>
								</div>
								<button type="button" class="btn-count js_counter" data-action="plus" id="add-${count_id}"> + </button>
								<button type="button" class="btn-count js_counter" data-action="minus" id="min-${count_id}"> - </button>
								<span class="card-text card-count" id="count-${count_id}"> ${product_count}</span>
							</li>
						<hr/>`;
				}
				
			CART.innerHTML = item_html;
					}
					
		}else {
			CART.innerHTML = 'Cart is empty!';
		}
		count(cartData);
		getTotal(cartData);
		
		return false;
	}


	function count(value){
		const _items = Object.values(value);
		if(_items.length 	!== 0){
			let arrNum = []; // array for counts
			for(let _item of _items){
				arrNum.push(_item[2]);
			}
			totalNum = arrNum.reduce((sum, current)=>{
				return sum + current;
			});

			if(totalNum < 0 || totalNum === null){
				totalNum = 0;
			}	
		}	
		else{
			totalNum = 0;
		}
		counter_el.innerHTML = `Cart ( ${totalNum} )`;
	}

	function getTotal(value){
		const _items = Object.values(value);
		if(_items.length 	!== 0){
			let arrTotalPrice = []; // array for total price
			for(let _item of _items){
				arrTotalPrice.push(+_item[1]*_item[2]);
			}
			totalPrice = arrTotalPrice.reduce((sum, current)=>{
				return sum + current;
			});

			if(totalPrice < 0 || totalPrice === null){
				totalPrice = 0;
			}

		}else{
			totalPrice = 0;
		}
		total_el.innerHTML = 	`$ ${totalPrice.toFixed(2)} `;
	}


	/* Open the cart */
	// addEvent(document.getElementById('checkout'), 'click', openCart);

	/* Update the cart */
	function updateCartData(){
		let items = CART.querySelectorAll('.card-count');
		const _items = Object.values(cartData);
		let result =[];
		for(let item of items){
			[...items].map(value=>{
				result.push(value.innerHTML);
			})

			if(_items.length !== 0){
				for(let i=0; i<_items.length; i++){
					_items[i][2] = +result[i];
				}				 
			}
		}
		getTotal(cartData);
		count(cartData);
		saveCartData(cartData);
	}

	// Add item to LocalStorage and html render
	addEvent(CARD_LIST, 'click', function(event) {
		let target = event.target;
		// If  available = 0, don't add to cart
		if(target.parentElement.dataset.id === '0'){
			alert('There is no such item...');
			return false;
		}
		else{ 
			addToCart(target);
		}
	});
	

	CART.addEventListener('click', function(event) {
		let target = event.target;
		let id = target.id.slice(4);

		let card_count = document.getElementById(`count-${id}`);
		const name = target.parentElement.querySelector('.card-name').innerHTML;
		let price_html = target.parentElement.querySelector('.card-price');

		let card_count_value = card_count.innerHTML;
		let card_price_value = price_html.innerHTML;
		
		const cart = Object.values(cartData);
		
		let price_item;
		let get_count_value_from_cart;

		for(let i=0; i<cart.length; i++){
			if(cart[i][0] == name){
				get_count_value_from_cart = cart[i][2];
				price_item = cart[i][1];
		  }
		}

		switch(target.dataset.action) {
			case 'plus':
				let card_available = card_count.parentElement.dataset.target; // define available parent element
				
				if(card_count.innerHTML !== card_available || card_count.innerHTML < card_available){
					card_count.innerHTML = +card_count_value + 1;
					price_html.innerHTML = (Number(card_price_value) + Number(price_item)).toFixed(2);
					getTotal(cartData);
					count(cartData);
				}

				if(get_count_value_from_cart === +card_available){
					card_count.innerHTML = +card_count_value;
					price_html.innerHTML = card_price_value;
				}
				
				updateCartData()
				break;
			case 'minus':
				card_count.innerHTML = +card_count_value - 1;
				price_html.innerHTML = (Number(card_price_value) - Number(price_item)).toFixed(2); 
				counter_el.innerHTML = +counter_el.innerHTML - 1;
				total_el.innerHTML = Number(total_el.innerHTML - Number(price_item));

				if(+card_count.innerHTML < 1){
					target.setAttribute('disabled', true);
					card_count.innerHTML = '';
					card_count.parentElement.style.display='none';
					localStorage.clear();
				}else{
					target.removeAttribute('disabled');
				}
				
				updateCartData();
				break;
			
			default:	
				break;
		}
			
	});


	window.addEventListener('storage', function(event) {
	  console.log(event);
	});
	
	
})();