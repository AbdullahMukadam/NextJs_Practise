import React from 'react'
import RecipeList from '../Components/RecipeList';



const fetchData = async () => {
        try {
            const res = await fetch("https://dummyjson.com/recipes");
            const data = await res.json();
            return data?.recipes
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

export default async function Recipepage() {
    const RecipeLists = await fetchData()
    //console.log(RecipeLists)

    return (
        <div className="w-full min-h-screen bg-black pt-24">
        
           <RecipeList RecipeLists={RecipeLists} />
        </div>
    )
}

