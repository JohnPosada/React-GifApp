import { useState } from "react"
import { DeleteImages } from "./DeleteImages";

export const AddCategory = ( { onNewCategory, onDelete, categories }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange= (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit= (event) => {
    event.preventDefault();
    if (inputValue.trim().length <=1) return ;
    //setCategories(categories => [...categories, inputValue]);
    onNewCategory(inputValue.trim())
    setInputValue('');
  }

  return (
    <form className="display: flex" onSubmit={ (event) => onSubmit(event) }>

      <input 
          type="text"
          placeholder='buscar gifs'
          value={inputValue}
          onChange={ (event) => onInputChange(event) }
      />
      {
        categories.length!=0 && (<DeleteImages onDelete= {onDelete} />)
      }
    </form>
  )
}
