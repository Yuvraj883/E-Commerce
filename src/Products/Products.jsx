import React from "react";
import ProductCard from "./ProductCard";

const products=[
    {   id: 1,
        title: "Book",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWMlVS8Vod9LaE6d1l3MVq08aYG_kNECpA4TdB1D2olL2WLs6MnDaWLvwrjDDV4pu6cA&usqp=CAU",
        price:"$12.99",
        description: "This is the New York Times best seller book 'The Subtle Art of Not Giving a Fuck'"
    }, 
    {
        id:2, 
        title: "MacBook", 
        img: "https://inventstore.in/wp-content/uploads/2020/12/MacBook-Air-3.png",
        price:"$1100",
        description: "This is the most premium, best performing macbook from the Apple."
    },
    {
        id:3, 
        title: "Football", 
        img: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/16/full/1631766502-0839.jpg",
        price:"$299",
        description: "It is the replica of the official 'UEFA Champions League' Adidas match ball."
    },
    

]

const Products = ()=>{
    return(
        <>
    <div className=" flex flex-row">
    {
        products.map((product)=>(
            
            <ProductCard product={product}/>

        ))
    }
    </div>

        </>
    )
}

export default Products;