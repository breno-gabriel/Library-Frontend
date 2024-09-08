import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios';

function DeleteButton({ content, id }) {

    const handleDelete = async (e) => {
        e.stopPropagation();
        try {
          const response = await axios.delete(`http://localhost:3000/books/${id}`);
          console.log('Livro deletado:', response.data);
        } catch (error) {
          console.error('Erro ao deletar livro:', error);
        }
      };

    return (
        <div className='delete-button'>
        <button 
            className='text-red-600' 
            onClick={(e) => handleDelete(e)}
        >
            {content}
        </button>
        </div>
    );
}

export default DeleteButton;
