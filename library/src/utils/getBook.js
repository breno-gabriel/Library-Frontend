import axios from "axios";

const getBook = async () => {

    try {
        const response = await axios.get('http://localhost:3000/books');
        return response.data; 
      } catch (error) {
        console.log(error);
      }

}

export default getBook; 