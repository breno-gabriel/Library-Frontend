const createBook = async (values) => {

    try {
        const response = await axios.post('http://localhost:3000/books', values);
        console.log('Response:', response.data);
        setForms(false);
    } catch (error) {
        console.error('Error:', error);
    }

}

export default createBook; 