// create books component by fetching data from graphql server at localhost:5000/graphql
// // query the books data from the server and display it in the table
// //{
//     books {
//         id
//         title
//         author
//       }
//     }
 
import { useState, useRef } from "react";
import styles from "./BookSearch.module.css"
 
function BooksSearch(){
    const inputReftitle = useRef(null);
    const [books,setBooks] = useState([]);
    const [error,setError] = useState(null);

    function handleSearch(){

        if (inputReftitle.current.value === ''){
            window.alert("Please provide a text to search");
        }
        else {    
            const query = `{
                getBooks(title: "${inputReftitle.current.value}", author: "") {
                        id
                        title
                        author
                    }
                }`
                ;

            fetch('http://localhost:4000/graphql',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({query})
            })
    
    
            .then(response => response.json())
        
            .then(data => {
                console.log(data);
                setBooks(data.data.getBooks);
                if (data.data.getBooks.length === 0)
                {
                    window.alert("No book found with the name entered, try with a different name");
                }
            })
        
            .catch(error => {
                console.log(error);
                setError(error);
            })
        }    
    }
 
    return (
        <div className={styles.form}>
            <h1>Book Search</h1>
            <label htmlFor="title" className={styles.label}>Book Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                className={styles.input}
                ref = {inputReftitle}
            /> 
            <br></br>
            <div className="action_btn">
                <button onClick={handleSearch} type="submit" className={styles.submitButton}>Search</button>  
            </div>
            <br></br>
            <h2>Book List</h2>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>  
                <tbody>  
                    {
                        books.map(book => (
                            <tr key={book.id} className={styles.tr}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                            </tr>
                        ))
                    }
                </tbody>    
            </table>
            <div className={styles.form}>
                <br></br>
            </div>
        </div>
    )
 
 
}
 
export default BooksSearch;