

export const GifItem = ({title, image}) => {


  return (
    <div className="card">
        <img src={image} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
