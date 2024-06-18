import React, { useEffect, useState } from 'react';

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkxODM4LCJpYXQiOjE3MTg2OTE1MzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNjYTgyYzI0LTVkODgtNDQwMS1hY2M5LThlMjdhYTIzZjgwYiIsInN1YiI6InNvd3JhYmhhYS4yMWNzZUBrb25ndS5lZHUifSwiY29tcGFueU5hbWUiOiJBZmZvcmRNZWRpY2FscyIsImNsaWVudElEIjoiY2NhODJjMjQtNWQ4OC00NDAxLWFjYzktOGUyN2FhMjNmODBiIiwiY2xpZW50U2VjcmV0IjoiRUZYb0VUQW1RWHFSTnlSdSIsIm93bmVyTmFtZSI6IlNvd3JhYmhhIiwib3duZXJFbWFpbCI6InNvd3JhYmhhYS4yMWNzZUBrb25ndS5lZHUiLCJyb2xsTm8iOiIyMUNTUjE5OSJ9.yeLeaeoRZMzI6Tnuwdpfuyn2NuP-JFWa8buOxyw3cvk'; 

      try {
        const response = await fetch(
          'http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q',
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }
        );
        
        const data = await response.json();
        console.log('Fetched data:', data); 
        setProducts(data);
      } catch (error) {
        console.error('Fetching error:', error); 
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.productName}>
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
