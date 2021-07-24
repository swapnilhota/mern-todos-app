import { useEffect, useState } from 'react';
import { createTodo, readTodos, deleteTodo } from './functions';
import Preloader from './components/Preloader.js';

function App() {

  const [todo, setTodo] = useState({ title: '', content: '' });
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos();
      setTodos(result);
    }
    fetchData();
  })

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const result = await createTodo(todo);
    console.log(result);
  }

  const removeTodo = async (id) => {
    await deleteTodo(id);
    const result = await readTodos();
    setTodos(result);
  }

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input id="icon_prefix" type="text" className="validate" onChange={e => setTodo({ ...todo, title: e.target.value })} />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input id="description" type="tel" className="validate" onChange={e => setTodo({ ...todo, content: e.target.value })} />
              <label htmlFor="description">Content</label>
            </div>
          </div>
          <div className="row right-align">
            <button className="waves-effect waves-light btn">Submit</button>
          </div>
        </form>
        {
          !todos ? <Preloader /> : todos.length > 0 ?
            <ul className="collection">
              {
                todos.map(todo => (
                  <li key={todo._id} className="collection-item">
                    <div><h5>{todo.title}</h5>
                      <p>
                        {todo.content}
                        <a href="/" className="secondary-content" onClick={() => removeTodo(todo._id)} ><i className="material-icons">delete</i></a>
                      </p>
                    </div>
                  </li>

                ))
              }
            </ul>
            : <div><h5>Nothing To Do</h5></div>
        }
      </div>
    </div>
  );
}

export default App;
