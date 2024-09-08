import UpdateBookForms from "./UpdateBookForms";

const EditButton = ({setUpdateForms}) => {

    const handleUpdateClick = () => {
        setUpdateForms(true);
    }

    return (
        <button className='text-blue-600 border-2 border-blue-600 w-auto' onClick={() => handleUpdateClick()}>
            Atualizar informações do livro
        </button>
    );
};

export default EditButton;
