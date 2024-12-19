import React from 'react';
import Link from 'next/link';

export default function RecipeList({ RecipeLists }) {
    return (
        <div className="w-full h-full p-2 flex flex-wrap items-center justify-around">
            {RecipeLists?.length > 0 ? (
                RecipeLists.map((data, i) => (
                    <div key={i} className="w-[40%] p-2 flex  border-2 border-white m-2 overflow-hidden">
                        <Link href={`/recipes/${data.id}`}>
                            <div className="cursor-pointer">
                                <div className="w-full p-1">
                                    <img
                                        src={data?.image}
                                        alt={data?.name || 'Recipe Image'}
                                        className="w-full h-auto hover:scale-[1.6] transition-all"
                                    />
                                </div>
                                <div className="w-full p-1 text-white">
                                    <h1 className="text-lg font-bold">{data?.name || 'No Name Provided'}</h1>
                                    <h2 className="text-sm">{data?.rating || 'No rating Available'}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <>
                    <h1 className="text-white">No Recipes Found</h1>
                    <Link href="/" className="text-white underline">
                        Go Back to Home
                    </Link>
                </>
            )}
        </div>
    );
}
