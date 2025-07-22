import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CategorySection = ({category}) => {
  return (
    <section id={category.link} className='p-4'>
        <h2 className='text-xl font-bold mb-4'>{category.label}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                category.items.length > 0 ? (
                    category.items.map((item) => (
                        <div className=''>
                            <Card key={item.Id} className='flex flex-col dark:bg-slate-900 dark:border-b-white  hover: shadow-sm '>
                            
                                <CardContent className="p-4 gap-2">
                                    {
                                        item.image ? (
                                            <img src={item.image} alt={item.link} className='w-full h-48  rounded-b-md object-contain'/>
                                        ) : (
                                            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                                                No Image
                                            </div>
                                        )
                                    }
                                </CardContent>
                                <CardFooter>
                                    <CardTitle></CardTitle>
                                </CardFooter>
                            </Card>
                        </div>
                        
                    ))
                ): (
                    <p className="text-gray-500">No items available.</p>
                )
            }
        </div>
    </section>
  )
}

export default CategorySection