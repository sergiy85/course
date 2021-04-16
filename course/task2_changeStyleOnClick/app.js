(function(){

    let app_el = document.getElementById('app');
    let add_btn = app_el.querySelector('.js_add');
    let save_btn = app_el.querySelector('.js_save');
    let cancel_btn = app_el.querySelector('.js_cancel');
    let add_input = app_el.querySelector('.js_add_input');
    let todo_list_el = app_el.querySelector('.js_todo_list');
    let todo_items = app_el.querySelectorAll('.js_todo_item');


    let tasks = JSON.parse(localStorage.getItem('taskList')) || [{
        name: 'First',
        status: false
    },{
        name: 'Second',
        status: false
    }];

    function render() {
            let tasks_html = tasks.map(function(value, index) {
            return `
                <div class="js_todo_item row" data-index="${index}">
                    <div class="c5 js_item_text">${value.name}</div>
                    <div class="c2 js_item_action">
                        <button type="button" data-action="edit" title="Edit">!</button>
                        <button type="button" data-action="remove" title="Remove">X</button>
                    </div>
                </div>
            `;
        }).join("");

        
        todo_list_el.innerHTML = tasks_html;
        todo_items = app_el.querySelectorAll('.js_todo_item');
    }

    function removeTask(index) {
        tasks.splice(index, 1);
        render();
        saveData();
    }

    function addItem() {
        tasks.push({
            name: add_input.value,
            status: false
        })

        add_input.value = '';
        render();
        saveData();
    }

    function saveData() {
        localStorage.setItem('taskList', JSON.stringify(tasks));
    }

    function startEdit(index) {
        var data = tasks[index];
        add_input.value = data.name;
        save_btn.dataset.index = index;
        add_btn.style.display = 'none';
        save_btn.style.display = '';
        cancel_btn.style.display = '';
        add_btn.classList.remove('show');
    }

    function endEdit() {
        add_input.value = '';
        add_btn.classList.add('show');
        add_btn.style.display = '';
        save_btn.style.display = 'none';
        cancel_btn.style.display = 'none';
    }

    function saveItem(index) {
        tasks[index].name = add_input.value;
        saveData();
        render();
        endEdit();
    }

    render();

    
    app_el.addEventListener('click', function(event) {
        console.log('===== START ======');
        let target = event.target;
        let todo_item = target.closest('.js_todo_item');
        let index = -1;
        switch(target.dataset.action) {
            case 'edit':
                index = Array.prototype.indexOf.call(todo_items, todo_item);
                console.log('RUN EDIT ACTION: ', index);
                startEdit(index);
                break;
            case 'remove':
                index = Array.prototype.indexOf.call(todo_items, todo_item);
                console.log('RUN REMOVE ACTION: ', index);
                removeTask(index);
                break;
            default:
                console.log('IGNOR CLICK');
                break;
        }
        console.log('===== END ======');

    });


    add_btn.addEventListener('click', function(event) {
        addItem();
    });
    save_btn.addEventListener('click', function(event) {
        saveItem(save_btn.dataset.index);
    });
    cancel_btn.addEventListener('click', function(event) {
        endEdit();
    });

    add_input.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            add_btn.click();
        } 
    });
    
    for(const item of todo_items){
        item.addEventListener('click', (event)=>{      
            tasks.forEach((value)=>{
                let str = `${event.target.textContent}`;
                if(value.name === str && value.status === false){
                    item.style.textDecoration = 'line-through';
                    value.status = true;
                    console.log(value.status);
                    saveData();
                }else if(value.name === str && value.status === true){
                    item.style.textDecoration = 'none';
                    value.status = false;
                    console.log(value.status);
                    saveData()
                }
                
            })
        })
    }

})();