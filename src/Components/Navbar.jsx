import React from "react";

const Navbar = ()=>{
    return (
        <div className='my-0 bg-red-400 h-12 flex  items-center '>
        <span className="font-bold text-lg italic  align-baseline text-justify mx-2 ">
        <img src="https://www.pngfind.com/pngs/m/453-4531594_icon-05-min-clip-art-shopping-bag-hd.png "
         className="h-8 w-auto inline mx-2"
         alt="icon" />
         Yuviz Store
        </span>
        <div className="item-end inline ml-auto pr-4">
          <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" 
               className="inline h-8 w-auto " alt="Cart"/>
        </div>
      </div>
    )
}

export default Navbar; 