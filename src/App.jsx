import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { Button, ButtonGroup } from "@mui/material";

const App = () => {
  const initialProducts = [
    { id: 1, name: "Tablet", price: 8.99, inStock: true },
    { id: 2, name: "Fancy Litter Box", price: 500.0, inStock: false },
    { id: 3, name: "Catnip Toy", price: 4.5, inStock: true },
    { id: 4, name: "Cat Shampoo", price: 9.0, inStock: false },
        { id: 5, name: "Phone", price: 150.00, inStock: false },
            { id: 6, name: "Laptop", price: 6.9, inStock: false },



  ];

  const [productList, setProductList] = useState(initialProducts);
  const [filter, setFilter] = useState("all");

  const handleRemove = (id) => {
    setProductList((prev) => prev.filter((product) => product.id !== id));
  };

  const filteredProducts =
    filter === "in-stock"
      ? productList.filter((product) => product.inStock)
      : productList;

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ButtonGroup variant="contained" sx={{ marginBottom: 2 }}>
        <Button onClick={() => setFilter("all")} data-testid="filter-all">
          All Products
        </Button>
        <Button
          onClick={() => setFilter("in-stock")}
          data-testid="filter-in-stock"
        >
          In Stock Only
        </Button>
      </ButtonGroup>
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;
