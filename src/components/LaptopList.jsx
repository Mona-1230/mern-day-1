import React, { useState, useEffect } from 'react'

export default function LaptopList() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        const data = await response.json();
        
        const laptopData = data.slice(0, 2).map((item, index) => ({
          id: item.id,
          name: `Laptop ${index + 1}`,
          price: `$${(item.price * 50).toFixed(2)}`,
          description: item.description.substring(0, 100) + '...',
          performance: ['High', 'Medium', 'Ultra'][index] || 'High'
        }));
        
        setLaptops(laptopData);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };

    fetchLaptops();
  }, []);

  return (
    <div>
      <h2>Laptop Products:</h2>
      {laptops.map((laptop) => (
        <div key={laptop.id} style={{ margin: '10px', padding: '10px' }}>
          <h3>{laptop.name}</h3>
          <p><strong>Price:</strong> {laptop.price}</p>
          <p><strong>Description:</strong> {laptop.description}</p>
          <p><strong>Performance:</strong> {laptop.performance}</p>
        </div>
      ))}
    </div>
  )
}