import image1 from "@/assets/pictures/image1.webp";
import image3 from "@/assets/pictures/image3.webp";
import image4 from "@/assets/pictures/image4.webp";
import image5 from "@/assets/pictures/image5.webp";
import image2 from "@/assets/pictures/image2.webp";
import image6 from "@/assets/pictures/image6.webp";
import image7 from "@/assets/pictures/image7.webp";
import image8 from "@/assets/pictures/image8.webp";
import image9 from "@/assets/pictures/image9.webp";
import image10 from "@/assets/pictures/image10.webp";
import image11 from "@/assets/pictures/image11.webp";
import image12 from "@/assets/pictures/image12.webp";
import image13 from "@/assets/pictures/image13.webp";
import image14 from "@/assets/pictures/image14.webp";
import image15 from "@/assets/pictures/image15.webp";
import image16 from "@/assets/pictures/image16.webp";
import image17 from "@/assets/pictures/image17.webp";
import image18 from "@/assets/pictures/image18.webp";
import image19 from "@/assets/pictures/image19.webp";
import image20 from "@/assets/pictures/image20.webp";


const milkshakesItems = [
    {Id: 1, image: image1, title : " ", price : " " },
    {Id: 2, image: image2, title : " ", price: " " },
    {Id: 3, image: image3, title : " ", price: " " },
    {Id: 4, image: image4, title : " ", price: " " },
]

const smoothiesItems = [
    {Id: 5, image: image5, title : " ", price: " " },
    {Id: 6, image: image6, title : " ", price: " " },
    {Id: 7, image: image7, title : " ", price: " " },
    {Id: 8, image: image8, title : " ", price: " " },
]

const brandyItems = [
    {Id: 9, image: image9, title : " ", price: " " },
    {Id: 10, image: image10, title : " ", price: " " },
    {Id: 11, image: image11, title : " ", price: " "},
    {Id: 12, image: image12, title : " ", price: " "},
]

const breakfastItems = [
    {Id: 13, image: image13, title : " ", price: " " },
    {Id: 12, image: image12, title : " ", price: " " },
    {Id: 13, image: image13, title : " ", price: " " },
    {Id: 14, image: image14, title : " ", price: " " },
]

const breakfastExtraItems = [
    {Id: 15, image: image15, title : " ", price: " " },
    {Id: 16, image: image16, title : " ", price: " " },
    {Id: 17, image: image17, title : " ", price: " " },
    {Id: 18, image: image18, title : " ", price: " " },
]

const champagneItems = [
    {Id: 1, image: image1, title : " ", price: " " },
    {Id: 2, image: image2, title : " ", price: " " },
    {Id: 3, image: image3, title : " ", price: " " },
    {Id: 4, image: image4, title : " ", price: " " },
]

const pastriesItems = [
    {Id: 1, image: image1, title : " ", price: " " },
    {Id: 2, image: image2, title : " ", price: " " },
    {Id: 3, image: image3, title : " ", price: " " },
    {Id: 4, image: image4, title : " ", price: " " },
]

const soupsItems = [
    {Id: 1, image: image1, title : " ", price: " " },
    {Id: 2, image: image2, title : " ", price: " " },
    {Id: 3, image: image3, title : " ", price: " " },
    {Id: 4, image: image4, title : " ", price: " " },
]

const cakesItems = [
    {Id: 1, image: image1, title : " ", price: " " },
    {Id: 2, image: image2, title : " ", price: " " },
    {Id: 3, image: image3, title : " ", price: " " },
    {Id: 4, image: image4, title : " ", price: " " },
]

const alcoholItems = [
    {Id: 1, image: image1, title : " ", price: " " },
    {Id: 2, image: image2, title : " ", price: " " },
    {Id: 3, image: image3, title : " ", price: " " },
    {Id: 4, image: image4, title : " ", price: " " },
]




const categoryMenu = [
    { Id :1, label :'Milkshakes', link:'milkshakes', items : milkshakesItems },
    { Id :2, label :'Smoothies', link:'smoothies', items : smoothiesItems},
    { Id :3, label :'Brandy', link: 'brandy', items : brandyItems},
    { Id :4, label :'Breakfast', link: 'breakfast', items : breakfastItems},
    { Id :5, label :'Breakfast Extra', link: 'breakfastextra', items : breakfastExtraItems},
    { Id :6, label :'Champagne', link: 'champagne', items : champagneItems},
    { Id :7, label :'Pastries', link: 'pastries', items : pastriesItems},
    { Id :8, label :'Soups', link: 'soups', items : soupsItems},
    { Id :9, label :'Cakes', link: 'cakes', items : cakesItems},
    { Id :10, label :'Alcohol-Cocktails', link:'alcohol', items : alcoholItems},
   ]
export default categoryMenu;