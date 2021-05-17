import React, { Component } from 'react';

const todos = [
  { id: 1, name: 'Learn React' },
  { id: 2, name: 'Make awesome website' },
  { id: 3, name: 'Find good job' },
  { id: 4, name: 'Well Done' },
];

const getTodos = async () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });

const ListItem = ({ id, text, clickHandler }) => {
  return (
    <li>
      {text} <button onClick={() => clickHandler(id)}>del</button>
    </li>
  );
};

const List = ({ items, clickHandler }) => {
  return (
    <>
      {items.map(({ id, name }) => (
        <ListItem key={id} id={id} text={name} clickHandler={clickHandler} />
      ))}
    </>
  );
};

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: null,
      hasError: false,
      searchValue: '',
    };
  }

  componentDidMount() {
    getTodos()
      .then(todos => {
        this.setState({
          todos,
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
        });
      });
  }

  deleteHandler = id => {
    const newTodos = this.state.todos.filter(({ id: itemId }) => id !== itemId);

    this.setState({
      todos: newTodos,
    });
  };

  addHandler = () => {
    const { todos } = this.state;
    const txt = document.getElementById('newTodo');

    if (txt.value !== '') {
      const newId = todos[todos.length - 1].id + 1;
      this.setState({
        todos: [
          ...todos,
          {
            id: newId,
            name: txt.value,
          },
        ],
      });
      txt.value = '';
    }
  };

  //TODO: 
  // 1. ADD filter for todo items (start filtering when search key length >= 3)
  
  searchHandler = (event) =>{
    const search = event.target.value.toLowerCase();
    let filteredTodos = todos;

    if(search.length >= 3){
      filteredTodos = this.state.todos.filter(item =>{
        return item.name.toLowerCase().indexOf(search) > -1;
      });  
    }
    
    if(search !== ''){
      this.setState({
        todos: filteredTodos,
        searchValue: search,
      });
    }
    else{
      this.setState({
        todos: todos,
        searchValue: '',
      });
    } 
    
  }

  
  render() {
    const { deleteHandler, addHandler, searchHandler } = this;
    const { todos, hasError } = this.state;

    if (hasError && todos === null) return <p>Server ERROR</p>;
    if (todos === null) return <p>Loading...</p>;

    return (
      <div>
        <h1>Todo LIST</h1>
        <input 
          id='filterTodo' 
          type='text'
          placeholder = 'Search...' 
          onChange={searchHandler} 
          value={this.state.searchValue}/>
        <br />  
        <List items={todos} clickHandler={deleteHandler} />
        <br />
        Enter new todo:
        <input id='newTodo' type='text' />
        <button onClick={addHandler}>Add</button>
      </div>
    );
  }
}
