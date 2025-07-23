import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import currencySymbol from './helper/currencySymbol';
import { useInView } from 'react-intersection-observer';

const CategorySection = ({category}) => {

  return (
    <section id={category.link} className='p-4 scroll-mt-20'>
        <h2 className='text-xl font-bold mb-4'>{category.label}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                category.items.length > 0 ? (
                    category.items.map((item) => {
                        
                        const { ref , inView } = useInView({ triggerOnce: true, threshold: 0.1 });

                    return(

                        <div ref={ref} className=''>
                            <Card   key={item.Id} className={`flex flex-col bg-gray-50 dark:bg-slate-900 dark:border-b-gray-500 mt-2   hover:scale-102 shadow-md ${inView ? `animate-in fade-in duration-700 ease-in` : `opacity-0`} `} >
                            
                                <CardContent className="mt-8">
                                    {
                                        item.image ? (
                                            <img src={item.image} alt={item.link} className='w-full h-48  rounded-md object-cover'/>
                                        ) : (
                                            <div className="w-full h-48 bg-gray-300  flex items-center justify-center text-gray-600">
                                                No Image
                                            </div>
                                        )
                                    }
                                </CardContent>
                                <CardFooter className='' >
                                    <CardTitle className='space-y-1 font-medium p-2  dark:text-gray-300 text-black'>
                                        <h2 > Price:<i className='text-orange-500'> { currencySymbol(item.price) } </i></h2>
                                        <p>Description: {item.title} </p>
                                    </CardTitle>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                    }    
                )
                ): (
                    <p className="text-gray-500">No items available.</p>
                )
            }
        </div>
    </section>
  )
}

export default CategorySection