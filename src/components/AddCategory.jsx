import PropTypes from "prop-types";
import { useState } from "react"
import { DeleteImages } from "./DeleteImages";
//import PropType from "prop-types"

export const AddCategory = ( { onNewCategory, onDelete, actIcon }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange= (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit= (event) => {
    event.preventDefault();
    if (inputValue.trim().length <=1) return ;
    onNewCategory(inputValue.trim())
    setInputValue('');
  }

  return (
    <form aria-label="form" onSubmit={ (event) => onSubmit(event) }>

      <input 
          type="text"
          placeholder='buscar gifs'
          value={inputValue}
          onChange={ (event) => onInputChange(event) }
      />
      {
        actIcon && (<DeleteImages onDelete= {onDelete} />)
      }
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory:PropTypes.func.isRequired,
  onDelete:PropTypes.func,
  actIcon:PropTypes.bool.isRequired

}
