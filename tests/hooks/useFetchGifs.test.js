import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas al hook useFetchGifs', () => { 
  
  test('debe de regresar el estado inicial', () => { 
    const {result}= renderHook(() => useFetchGifs('one'));
    const { images, isloading } = result.current;

    expect(images).toEqual([]);
    expect(isloading).toBeTruthy();
   })

  test('debe de retornar un arreglo de imagenes y isLoading en false', async() => { 
    const {result}= renderHook(() => useFetchGifs('one'));
    
    await waitFor(
      () => expect(result.current.isloading).toBeFalsy()
      
    )
    
    const { images, isloading } = result.current;
      
    expect(images.length).toBeGreaterThan(0);
    expect(isloading).toBeFalsy();
   })
 })