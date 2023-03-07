import React from "react";

const ProductCard = ({product})=>{
    console.log(product); 
    return(
        <div className="p-2 m-2 h-128 w-64 bg-red-300">

            <img className=" h-64 w-64 p-2 m-2" src={product.img} alt={product.title}/>
            <p className="font-bold  ">{product.title}</p>
            <p className="text-sm p-1">{product.description}</p>
            <p className="font-bold flex p-2">{product.price}
            <button className="bg-green-500 text-white p-1 mr-auto cursor-pointer rounded ml-auto  ">Add To Cart</button>
            </p>

            
        </div>
    )
}

export default ProductCard; 