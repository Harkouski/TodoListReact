import { useContext} from 'react'
import ToDo from './Todo'
import ToDoForm from './ToDoForm'
import Context from './Context'
import Value from './ToDoValue'

function App() {
  
  const {todos,setTodos}=useContext(Context)

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random.toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo !== id)])
  }

  const handletoggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo === id ? { ...todo, complete: !todo.complete } : { ...todo })
    ])
  }
   
  return(
   
    <div className="App">
      <header>
        <Value/>
      </header>
      <ToDoForm addTask = {addTask}/>
      {todos.map((todo) => {
         return <ToDo
          todo={todo}
          key={todo}
          toggleTask={handletoggle}
          removeTask={removeTask}
        />
      })}
    </div>
  );
}
export default App;

