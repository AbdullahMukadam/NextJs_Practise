import Link from 'next/link'
import React from 'react'

async function getDetails(id) {
  try {
    const apires = await fetch(`https://dummyjson.com/recipes/${id}`)
    const res = await apires.json()

    return res
  } catch (error) {
    console.error("Error in Fetch Details", error)
  }
}

export default async function page({ params }) {

  const details = await getDetails(params?.recipedetail)
  

  return (
    <div className='w-full h-full p-2 flex items-center justify-center bg-black flex-col'>
      <div className='w-[50%] h-[50%] p-2 border-2 border-white text-white'>
        <div className='w-full h-[50%]'>
          <img
            src={details.image || ""}
            className='w-full'
          />
        </div>
        <div className='w-full h-[50%]'>
          <h1 className='text-xl'>
            Name:{details.name || "No Name Found"}
          </h1>
          <h2 className='text-xl'>
            Rating:{details.rating || "No Rating Found"}
          </h2>
        </div>
      </div>

      <div className='w-full p-2 text-white'> 
       <Link href={"/recipes"} className=''>Go Back to Recipes</Link>
      </div>
    </div>
  )
}
