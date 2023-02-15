export default function Home(props) {
    console.log(props);
    return (
      <div style={{display:"flex", alignItems:"center", height:"100vvh", paddingTop:"55px", flexDirection:"column"}}>
        <h1>Book List Application</h1>
        <div style={{marginTop:"34px"}} >
          {/* book List container */}
          {props.books.map((book) => {
            return (
              <div style={{display:"flex", flexDirection:"column", border:"1px solid black", width:"500px", padding:"10px", margin:"10px"}}>
                <h2>{book.params.title}</h2>
                <p>{book.params.author}</p>
              </div>
            );
          }
          )}
        </div>
      </div>
    )
  }
  
  export const getStaticProps = async () => { 
    const res = await fetch('http://localhost:3001/api/adminGetBooks');
    const data = await res.json();
    return {
      props: { books: data }
    }
  }