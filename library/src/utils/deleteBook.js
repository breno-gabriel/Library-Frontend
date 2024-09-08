import axios from "axios";

const deleteBook = async (id) => {

    await axios.delete(`http://localhost:3000/books/${id}`).then(() => {
      console.log("livro deletado")
    })
  
  }

export default deleteBook; 