import React from "react";

const Navbar = ()=>{
    return (
        <div className='my-0 bg-black h-12 flex  items-center '>
        <span className="Bold text-lg italic text-white align-baseline text-justify mx-2 mt-16 inset-y-12">Yuvi's Store
        <img src="https://www.pngfind.com/pngs/m/453-4531594_icon-05-min-clip-art-shopping-bag-hd.png "
         className="h-8 w-auto inline mx-2"
         alt="icon" />
        </span>
        <div className="item-end inline ">
          <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png" 
               className="inline h-8 w-auto "/>
        </div>
      </div>
    )
}

export default Navbar; 