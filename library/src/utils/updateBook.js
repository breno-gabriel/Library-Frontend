import axios from 'axios';

const updateBook = async (bookId, updatedBook) => {
  try {
    const response = await axios.put(`http://localhost:3000/books/${bookId}`, updatedBook);
    console.log('Livro atualizado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    throw error;
  }
};

export default updateBook;