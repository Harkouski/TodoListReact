import { useContext } from 'react'
import Context from './Context'

function Value(){
    const{todos}=useContext(Context)
    return(
        <h1>ToDo List: {todos.length}</h1>
    )
}
export default Value