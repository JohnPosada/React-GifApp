import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ ]);

    const onAddCategory = ( value ) => {
        const repetido= categories.find((cat) => cat === value )
        if (!repetido) setCategories([value,...categories]); 
    };

    return (<>
        
        <h1>GifExpertApps</h1>

        

        <AddCategory 
            onNewCategory = { (value) => onAddCategory(value) }
            onDelete={()=> setCategories([])}
            actIcon= { categories.length != 0 }
            />


        {
            categories.map( category =>(
                <GifGrid 
                    key={category} 
                    category= {category} 
                />
        ))
        }
    </>
    )
    }
