import { todo } from "../api/todoModel/todo.model";

export default function Home(props) {
    console.log(props);
    return (
      <div style={{display:"flex", alignItems:"center", height:"100vvh", paddingTop:"55px", flexDirection:"column"}}>
        <h1>Todo List Application</h1>
        <div style={{marginTop:"34px"}} >
          {/* Todo List container */}
          {props.books.map((book) => {
            return (
              <div style={{display:"flex", flexDirection:"column", border:"1px solid black", width:"500px", padding:"10px", margin:"10px"}}>
                <h2>{todos.params.title}</h2>
                <p>{todos.params.author}</p>
              </div>
            );
          }
          )}
        </div>
      </div>
    )
  }
  
  export const getStaticProps = async () => { 
    const res = await fetch('http://localhost:3002/api/adminGetTodos');
    const data = await res.json();
    return {
      props: { todos: data }
    }
  }