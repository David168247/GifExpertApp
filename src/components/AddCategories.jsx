import { useState } from "react";


export const AddCategories = ({ onNewCategory }) => {
 
  const [inputValue, setInputValue] = useState('');
  const onInputChanges = ({ target }) => {
    setInputValue (target.value )
  }


  const onSubmit =( event )=> {
    setInputValue ( '' );
    event.preventDefault();
    if (inputValue.trim().length <=1 ) return;
    // setCategories ( categorias =>  [ inputValue, ...categorias]) 

    onNewCategory ( inputValue.trim() );

  }

  
  return (
   <form 
      onSubmit={ onSubmit }
    >

    <input
        type="text"
        placeholder="Buscar Gift"
        value = { inputValue }
        onChange={ onInputChanges }
    />
   </form>
  )
}

