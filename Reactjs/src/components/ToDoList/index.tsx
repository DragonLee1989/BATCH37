import { todos } from "../../data/todos"

type TSingleItem = {
    content: string,
    done?: boolean
}

const SingleItem = ({content, done} : TSingleItem) => {
    return (
        // <li>{done ? <del>{content}</del> : content}</li>
        <li> {done ? <del>{content}</del> : content} {done ? "✔" : null}</li>
    )
}

export const ToDoList = () => {
  return (
    <div>
        <h3>Session 3 - Conditional Rendering & Lists and Keys</h3>
        {/* <ul>
            <SingleItem content="Quét nhà" done={true}/>
            <SingleItem content="Lau nhà" done={true}/>
            <SingleItem content="Chùi nhà"/>
        </ul> */}
        {todos.map((todo, index)=>{
            return (
                <SingleItem key={`TodoList_${index}`} content={todo.name} done={todo.done ? todo.done : false}/>
            )
        })}
    </div>   
  )
}

 