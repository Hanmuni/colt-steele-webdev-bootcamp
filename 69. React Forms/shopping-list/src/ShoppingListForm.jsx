import { useState } from "react";

export default function ShoppingListForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  const [productValid, setProductValid] = useState(false);
  const [quantityValid, setQuantityValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validateProduct = (product) => {
    if (product.length > 0) {
      setProductValid(true);
    } else {
      setProductValid(false);
    }
  };

  const validateQuantity = (quantity) => {
    if (quantity >= 1) {
      setQuantityValid(true);
    } else {
      setQuantityValid(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "product") {
      validateProduct(e.target.value);
    }

    if (e.target.name === "quantity") {
      validateQuantity(Number(e.target.value));
    }

    setFormData((currentData) => ({
      ...currentData,
      [e.target.name]:
        e.target.name === "quantity" ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    validateProduct(formData.product);
    validateQuantity(formData.quantity);

    if (formData.product.length > 0 && formData.quantity >= 1) {
      onFormSubmit(formData);
      setFormData({ product: "", quantity: 0 });
      setProductValid(false);
      setQuantityValid(false);
      setHasSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product"> Product Name: </label>
      <input
        type="text"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      {hasSubmitted && !productValid && (
        <p style={{ color: "crimson" }}>Product name can't be blank!</p>
      )}

      <label htmlFor="quantity"> Quantity: </label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      {hasSubmitted && !quantityValid && (
        <p style={{ color: "crimson" }}>Quantity must be greater than 0!</p>
      )}

      <button type="submit" style={{ margin: "1em" }}>
        Add Item
      </button>
    </form>
  );
}
