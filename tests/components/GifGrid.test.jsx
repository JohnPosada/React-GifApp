import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas a el componente GifGrid', () => {

    
    const category = 'one';
    
    test('Debe de mostrar el loading inicial', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isloading: true
        });
        
        render( <GifGrid category={ category } /> );
        
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

     })


    test('Debe de mostrar el loading inicial', () => { 
        
        const gif = [{
            id: 'SGE345',
            title: 'One',
            image: 'localhost.com/one.jpg'
        }]
        
        useFetchGifs.mockReturnValue({
            images: gif,
            isloading: false
        });


        render( <GifGrid category={ category } /> );

        expect( screen.getByRole('img')).toBeTruthy()

     })
 })