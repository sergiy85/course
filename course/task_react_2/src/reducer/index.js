const initialState = {
  fetching: true,
  todos: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_START':{
      return { ...state, fetching: true };
    }
    case 'FETCH_TODOS_END':{
      return { ...state, fetching: false };
    }
    case 'SET_TODOS':{
      return { ...state, todos: action.payload };
    }
    case 'MAKE_ACTIVE':{ 
      const { todos } = state;     
      const itemIdx = todos.in_progress.findIndex(item => item.id === action.payload);

      if (itemIdx === -1) return state;

      const updatedTodos = todos.in_progress.slice();
      const item = { ...todos.in_progress[itemIdx] };
      
      // update status
      if(item.isActive === true){
        item.isActive = false;
        item.finishedTime = new Date().toUTCString();
      }else{
        item.isActive = true;
        item.startTime = new Date().toUTCString();
      }
      // update array todos.in_progress
      updatedTodos.splice(itemIdx, 1, item);
      
      return {...state, todos: {
        ...todos,
        in_progress: [...updatedTodos]
      }}

    }
    case 'SET_TODO_START':{
      const { todos } = state;
      const itemIdx = todos.in_progress.findIndex(item => item.id === action.payload - 1);
      if (itemIdx === -1) return state;

      const targetItem = todos.in_progress[itemIdx];

      targetItem.finishedTime = new Date().toUTCString();
      targetItem.isActive = false;
          
      // remove item done from  in_progress
      const updatedTodosProgress = todos.in_progress.slice();
      updatedTodosProgress.splice(itemIdx, 1);
      
      // add this item to done 
      todos.done.push(targetItem);
      
      return {...state, todos: {
        in_progress: [...updatedTodosProgress],
        done: [...todos.done]
      }}
    }
    case 'ADD_TODO':{   
      const { todos } = state;      
      const newId = todos.in_progress[todos.in_progress.length - 1].id + 1;
      
      if(action.payload === '') return state;

      const newTodoItem = {
        id: newId,
        name: action.payload, 
        isActive: false
      }
      todos.in_progress.push(newTodoItem);

      return {...state, todos: {
        ...todos,
        in_progress: [...todos.in_progress]
      }}
    } 
    case 'DELETE_TODO_ITEM':{
      const { todos } = state;     
      const id = action.payload;
      const _itemIdx = todos.in_progress.findIndex(item => item.id === id);
      if (_itemIdx === -1) return state;

      const newItems = todos.in_progress.filter(item => item.id !== id);

      return {...state, todos: {
        ...todos,
        in_progress: [...newItems]
      }}
    }
    
    default: {
      return state;
    }
  }
};

export default reducer;
