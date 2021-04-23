(function(){

	const PRODUCTS_LINK = 'http://my-json-server.typicode.com/achubirka/db/products';
	const APP = document.getElementById('app');
	const CARD_LIST = document.getElementById('productsList');
	const CART = document.getElementById('cart-content'); 
	const cartData = getCartData() || {}; // Get data cart or create new object (if there are not any data)

	const counter_el = document.getElementById('counter');
	const total_el = document.getElementById('total');

	let totalNum;
	let totalPrice;
	let card_count;

	// Get vs watch products list
	const productsRender = () =>{
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

	productsRender();

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
		// console.log(JSON.parse(localStorage.getItem('cart-content')));
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
				item_avalaible = CARD_LIST.querySelector(`.card-box-${target.id}`).getAttribute('data-id'), 
				item_id = target.id,
				item_title = parent_element.querySelector('.card-title').innerHTML, // product name
				item_price = parent_element.querySelector('.card-price').innerHTML; // product price

		if(cartData.hasOwnProperty(item_id) && (cartData[item_id][2] <= item_avalaible)){ // if product is in the cart, change number of it
			cartData[item_id][2] += 1;
			// if product isn't in the cart, add it 
		} else if(item_avalaible !=0) { 
				cartData[item_id] = [item_title, item_price, 1];	
		}
		else if(item_avalaible === 0) {			
			target.setAttribute('disabled', true);
			alert('There is no such item...')
		}
		else {
			target.setAttribute('disabled', true);
			alert('There is no such item...')
		}
		
		// update data LocalStorage
		if(!saveCartData(cartData)){
			CART.innerHTML = 'Product is added to cart!';
			// openCart();
		} 
		count(cartData);
		getTotal(cartData);
		return false;
	}

	addEvent(CARD_LIST, 'click', function(event) {
		let target = event.target;
		addToCart(target);
	});
	
	// get data from the cart
	function openCart(){
		let items = getCartData(), 
				item_html = '',
				count_id = 0,
				product_name,
				product_count,
				product_price,
				result;			
		// data for output
		if(items !== null){
				for(let item in items){
					count_id++;
					product_name = items[item][0];
					product_price = +items[item][1];
					product_count = items[item][2];
					result = product_price*product_count;
					if(result<0){
						result = 0;
					}
					item_html += `
							<li class="card-text card-item">
								<div class="card-wrap">
									<span class="card-text">${product_name}</span>
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
		}else {
			CART.innerHTML = 'Cart is empty!';
		}
		count(cartData);
		getTotal(cartData);	
		return false;
	}

	openCart();

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

			if(totalNum < 0){
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

			if(totalPrice<0){
				totalPrice = 0;
			}

		}else{
			totalPrice = 0;
		}
		total_el.innerHTML = 	`$ ${totalPrice.toFixed(2)} `;
	}

	getTotal(cartData);
	count(cartData);

	/* Open the cart */
	addEvent(document.getElementById('checkout'), 'click', openCart);

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

	function removeItem() {
		const arr = Object.values(cartData);
		for(let i=0; i<arr.length; i++){
			if(arr[i][2] < 1){
				arr.splice(i, 1);
			}
		}
		return arr;
	}

	CART.addEventListener('click', function(event) {
		let target = event.target;
		let id = target.id.slice(4);

		card_count = document.getElementById(`count-${id}`);
		let card_count_value = card_count.innerHTML;
		
		switch(target.dataset.action) {
			case 'plus':
				card_count.innerHTML = +card_count_value + 1;
				updateCartData()
				break;
			case 'minus':
				target.setAttribute('disabled', true);
				card_count.innerHTML = +card_count_value - 1;
				let newCartData;
				if(+card_count.innerHTML < 1){
					target.setAttribute('disabled', true);
					card_count.innerHTML = '0';
					card_count.parentElement.style.display='none';
					newCartData = removeItem();
				}else{
					target.removeAttribute('disabled');
				}
				updateCartData();
				saveCartData(newCartData);
				// console.log(cartData);
				break;
			default:	
				break;
		}
			
	});

	window.addEventListener('storage', function(event) {
		if (event.key === 'cart-content') {
			console.log(event);
		}
	});
	
})();

