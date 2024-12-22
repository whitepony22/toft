import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 my-4">
        Clothing Brand Products
      </h1>
      <ul>
        {products.map((product) => (
          <li key={product._id} className="p-4 border-b">
            <h2 className="text-xl">{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
