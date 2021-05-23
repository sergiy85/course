import React, { useEffect, useRef, useState, useMemo } from 'react';
import { connect, useSelector } from 'react-redux';
import List from './components/List';
import ListItem from './components/ListItem';
import { bindActionCreators } from 'redux';

import * as actions from './actions';

const App = props => {
  const [todoList] = useState({
    inProgress: [],
    done: [],
  });

  const { setTodos, todos, startLoad, fetching, endLoad, addTodo, makeActive, setTodoStart, deleteTodo } = props;
  
  const loading = <p>Loading...</p>;
  const addInputRef = useRef();
  const searchInputRef = useRef();
  
  useEffect(() => {
    (async () => {
      startLoad();
      const { in_progress, done } = await fetch('/todos.json').then(res =>
        res.json()
      );
      setTodos({
        in_progress,
        done,
      });
      endLoad();
    })();

    return () => {};
  }, []);
 
  // search   
  const [searchKey, setSearchKey] = useState('');
  const todosProgress = useSelector(state => state.todos?.in_progress || []);
  const todosDone = useSelector(state => state.todos?.done || []);
  
  // filtered progress
  const filteredTodosProgress = useMemo(() =>{
    return todosProgress.filter(item =>{
      if(searchKey.length >= 3) return item.name.toLowerCase().includes(searchKey.toLowerCase());
      return [];
      }
    );
  }, [todosProgress, searchKey]);
  
  // filtered done
  const filteredTodosDone = useMemo(() =>{
    return todosDone.filter(item =>{
      if(searchKey.length >= 3) return item.name.toLowerCase().includes(searchKey.toLowerCase());
      return [];
      }
    );
  }, [todosDone, searchKey]);
  
  // add new todo 
  const sendInputValue = () => {
    const inputValue = addInputRef.current.value;
    addTodo(inputValue);
    addInputRef.current.value = '';
  }
  
  const renderDoneItem = ({ name, finishedTime }) => (
    <>
      <span className='badge'>
        {new Date(finishedTime).toLocaleTimeString()}
      </span>
      {name}
    </>
  );
  
  const renderInProgressItem = ({ id, name, ...todos }) =>{
    if(todos.isActive === true && filteredTodosProgress?.[0].id=== id) return (<>{name}</>);

    if(todos.isActive === false && filteredTodosProgress?.[1]?.id === id) return (
        <>
          {name}
          <button 
            type='button' 
            className='btn btn-primary'
            onClick = {() =>{
              makeActive(id);
              setTodoStart(id);
            }}
          >
            Start
          </button>
          <button 
            type='button' 
            className='btn btn-danger'
            onClick={() => {
            deleteTodo(id);       
          }}>
          Delete
          </button>               
        </>
      );
    
    return (
      <>
        {name}
        <button 
            type='button' 
            className='btn btn-danger'
            onClick={() => {
            deleteTodo(id);       
          }}>
          Delete
        </button>
      </>
    )  
        
  } 
    
  return (
    <div className='container'>
      <h1>Todo React APP</h1>
      <div className='row'>
        <div className='col-xs-12'>
          <form>
            <div className='form-group'>
              <label htmlFor='addInput'>New Todo Item: </label>
              <input
                ref={addInputRef}
                id='addInput'
                type='text'
                className='form-control'
                placeholder='New todo name'
              />
            </div>
            <button type='button' className='btn btn-success pull-right' onClick = {() => sendInputValue()}>
              Add New Item
            </button>
          </form>
          <input 
            ref={searchInputRef}
            id='filterTodo' 
            type='text'
            placeholder = 'Search...'
            className='form-control' 
            onChange={(e) => {setSearchKey(e.target.value);}} 
            value={searchKey}
          />
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <h3>Todos in progress</h3>
          {fetching ? (
            loading
          ) : (
            <List>
              {filteredTodosProgress.map(item => {
                const { id } = item;
                return (
                  <ListItem
                    key={id}
                    item={item}
                    render={renderInProgressItem}
                  />
                );
              })}
            </List>
          )}
          <p>
            Things to do: {(fetching) ? (loading) : (filteredTodosProgress.length)}
          </p>
        </div>
        <div className='col-xs-12 col-sm-6'>
          <h3>Done</h3>

          {fetching ? (
            loading
          ) : (
            <List>
              {filteredTodosDone.map(({ id, ...item }) => (
                <ListItem key={id} item={item} render={renderDoneItem} />
              ))}
            </List>
          )}
          <p>
            Done: {(fetching) ? (loading) : (filteredTodosDone.length)}
          </p>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  fetching: state.fetching,
  todos: state.todos,
});


const mapDispatchToProps = dispatch => {
  const { startLoad, setTodos, endLoad, addTodo, makeActive, setTodoStart, deleteTodo } = bindActionCreators(
    actions,
    dispatch
  );

  return {
    startLoad,
    endLoad,
    deleteTodo: id => deleteTodo(id),
    addTodo: newItemValue => addTodo(newItemValue),
    makeActive: id => makeActive(id),
    setTodoStart: id => setTodoStart(id),
    setTodos: list => setTodos(list),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

