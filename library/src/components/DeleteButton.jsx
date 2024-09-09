import React from 'react';
import axios from 'axios';

function DeleteButton({ content, id, setAdvice, advice, setMessage  }) {

    const handleDelete = async (e) => {
        e.stopPropagation();
        try {
          const response = await axios.delete(`http://localhost:3000/books/${id}`);
          console.log('Livro deletado:', response.data);
          setAdvice(true);
          setMessage("Livro deletado com sucesso");

        } catch (error) {
          console.error('Erro ao deletar livro:', error);
        }
      };

    return (
        <button 
            className='text-red-600' 
            onClick={(e) => handleDelete(e)}
        >
            {content}
        </button>
    );
}

export default DeleteButton;
