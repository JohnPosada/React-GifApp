import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas componente addCategory', () => { 

    const category='one'
    
    test('debe llamar cambiar el valor de la caja de texto', () => { 
        
        render(<AddCategory onNewCategory ={ () => {} } categories={[]}  />)
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: category}});

        expect( input.value ).toBe(category);
     })

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const onNewCategory= jest.fn()
        
        render(<AddCategory onNewCategory ={ onNewCategory } categories={[]}  />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: category}});
        fireEvent.submit( form);

        expect( input.value ).toBe('');
        expect(onNewCategory ).toBeCalled();
        expect(onNewCategory ).toBeCalledWith(category);
     })

    test('No debe de llamar onNewCategory si el input esta vacio', () => { 

        const onNewCategory= jest.fn();
        
        render(<AddCategory onNewCategory ={ onNewCategory } categories={[]}  />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.submit( form)
        
        expect( input.value ).toBe('');
        expect(onNewCategory ).not.toBeCalled()
     })


 })