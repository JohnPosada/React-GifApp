import { render, screen } from "@testing-library/react";
import {GifItem} from "../../src/components/GifItem";


describe('Pruebas a GifItem', () => { 
    
    const title= 'anime scenery GIF';
    const url= 'anime.jpg';


    test('Debe hacer match con el snapshot', () => { 

        const { container } = render( <GifItem title={ title } image={ url } /> );
        expect( container ).toMatchSnapshot();

     })

     test('Debe de mostrar la imagen con el scr y el Alt especificado', () => { 
        render( <GifItem title={ title } image={ url } /> );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(`http://localhost/${url}`)
        expect(alt).toBe(title)

      })
 })