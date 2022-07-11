
export const getGifs = async(category) => {
    const url= `https://api.giphy.com/v1/gifs/search?api_key=KlkcUt2tbq0ASv9v3E3KGNrLrFwEpn7n&q=${ category }&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const getGift = data.map(elem => {
        return {
            id: elem.id,
            title: elem.title,
            image: elem.images.downsized_medium.url
        }
    })
    
    return getGift;

}
