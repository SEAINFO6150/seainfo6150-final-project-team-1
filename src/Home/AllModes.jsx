import React from "react";
import { Link } from 'react-router-dom';


const allBrands = () => {
  return(
          <div>
          <h3>All Brands</h3>

          <div>This is All Brands!</div>
          <div>
          <Link to="/AllBrands/Audi" >
          <div>Audi</div>
          </Link>
          <Link to="/AllBrands/BMW" >
          <div>Main Course</div>
          </Link>
          <Link to="/AllBrands/Mercedes" >
          <div>Mercedess</div>
          </Link>
          </div>
        </div>
  )
}

export default allBrands;
