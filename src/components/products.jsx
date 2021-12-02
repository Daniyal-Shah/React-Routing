import React, { Component } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "blue",
                };
              }}
              to={`/products/${product.id}`}
            >
              {product.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Products;
// <div>
//   <h1>Products</h1>
//   <ul>
//     {this.state.products.map((product) => (
//       <li key={product.id}>
//         <NavLink
//           style={({ isActive }) => {
//             return {
//               color: isActive ? "red" : "blue",
//             };
//           }}
//           to={`/products/${product.id}`}
//         >
//           {product.name}
//         </NavLink>
//       </li>
//     ))}
//   </ul>
//   <Outlet />
// </div>
