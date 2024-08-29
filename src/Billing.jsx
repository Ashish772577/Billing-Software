import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Billing.css';

const Billing = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [rate, setRate] = useState(0);
  const [total, setTotal] = useState(0);

  const addProduct = () => {
    const productTotal = quantity * rate;
    const newProduct = { productName, quantity, rate, total: productTotal };
    setProducts([...products, newProduct]);
    setTotal(total + productTotal);
  };

  const calculateTax = (amount) => amount * 0.18;

  return (
    <div className="container mt-5">
      <div className="navbar bg-light p-3 mb-3">
        <h2>Billing Software</h2>
      </div>
      <button className="btn btn-danger mb-3">Generate New Bill</button>
      <div className="row mb-1">
        <div className="col font-weight-bold">Product</div>
        <div className="col font-weight-bold">Quantity(kg/l/items)</div>
        <div className="col font-weight-bold">Rate</div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="number" 
            className="form-control"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Rate"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={addProduct}>
            Add Product
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.rate}</td>
              <td>{product.quantity}</td>
              <td>{product.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col-9"></div>
        <div className="col-3">
          <div className="mb-2">
            <strong>Sub Total:</strong> {total.toFixed(2)}
          </div>
          <div className="mb-2">
            <strong>Taxes 18%:</strong> {calculateTax(total).toFixed(2)}
          </div>
          <div className="mb-2">
            <strong>Total:</strong> {(total + calculateTax(total)).toFixed(2)}
          </div>
          <button className="btn btn-primary">Click For Next</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
