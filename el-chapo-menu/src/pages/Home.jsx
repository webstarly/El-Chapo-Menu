import CategorySection from '@/components/CategorySection'
import categoryMenu from '@/components/helper/Category'
import { useTheme } from '@/themecontext/themeContext'
//import Alcohol from '@/components/Alcohol'
//import Brandy from '@/components/Brandy'
//import Breakfast from '@/components/Breakfast'
//import BreakfastExtra from '@/components/BreakfastExtra'
//import Cakes from '@/components/Cakes'
//import Champagne from '@/components/Champagne'
//import Milkshakes from '@/components/Milkshakes'
//import Pastries from '@/components/Pastries'
//import Smoothies from '@/components/Smoothies'
//import Soups from '@/components/Soups'
//import React from 'react'

const Home = () => {

    const { theme , toggleTheme } = useTheme();

  return (
    <>
    {
        categoryMenu.map((category) =>(
            <CategorySection key={category.Id} category={category}/>
        ))
    }

        {/**
         * <section id='milkshakes' className=''>
            <Milkshakes/>
        </section>

        <section id='smoothies' className=''>
            <Smoothies/>
        </section>

        <section id='brandy' className=''>
            <Brandy/>
        </section>

        <section id='breakfast' className=''>
            <Breakfast/>
        </section>

        <section id='breakfastextra' className='h-screen'>
            <BreakfastExtra/>
        </section>

        <section id='champagne' className='h-screen'>
            <Champagne/>
        </section>

        <section id='pastries' className='h-screen'>
            <Pastries/>
        </section>

        <section id='soups' className='h-screen'>
            <Soups />
        </section>

        <section id='cakes' className='h-screen'>
            <Cakes/>
        </section>

        <section id='alcohol' className=''>
            <Alcohol/>
        </section>
         * 
         */}
    </>
  )
}

export default Home