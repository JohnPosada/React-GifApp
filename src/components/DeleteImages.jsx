
import { AiFillDelete } from "react-icons/ai";

export const DeleteImages = ( { onDelete }) => {

  return (
    <AiFillDelete className="delete" size= '35px' onClick={onDelete}/>)
}
