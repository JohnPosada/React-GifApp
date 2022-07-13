import { getGifs } from "../../src/helpers/GetGifs"


describe('Pruebas a getGifts', () => { 
    
    test('Debe retonar un arreglo con los gifs', async () => { 
        const gifs= await getGifs('One')
        expect(gifs.length ).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String), 
            title: expect.any(String),
            image:expect.any(String)
        })
     })
 })