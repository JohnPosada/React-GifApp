import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Prueba a GitExpert', () => {
    
    const category ='one'


    test('no debe agregar un valor repetido', () => { 

        render(<GifExpertApp />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, {target:{ value: category}});
        fireEvent.submit(form);
        fireEvent.input(input, {target:{ value: category}});
        fireEvent.submit(form);
        
        expect(screen.getAllByText(category)).toHaveLength(1)


     })
 })