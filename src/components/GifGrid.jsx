
import {GifItem} from './GifItem.jsx'
import { useFetchGifs } from '../hooks/useFetchGifs.js'
import PropTypes from 'prop-types';


export const GifGrid = ({category}) => {

  const {images, isloading} = useFetchGifs(category);

  return (<>
    <h2> {category} </h2>

    {
      isloading && (<p>Cargando...</p>)
    }

    <div className='card-grid'>
      {
        images.map((img) => {
          return <GifItem 
            key={img.id}
            {...img}

            />
      })}
    </div>
  </>   
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}