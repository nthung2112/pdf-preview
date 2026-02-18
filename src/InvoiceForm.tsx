import { useState } from "react";
import type { Invoice, InvoiceItem } from "./InvoiceData";
import { calculateItemTotal } from "./InvoiceData";

export default function InvoiceForm({
  currentInvoice,
  applyInvoice,
}: {
  currentInvoice: Invoice;
  applyInvoice: (invoice: Invoice) => void;
}) {
  const [invoice, setInvoice] = useState(currentInvoice);
  const [newItem, setNewItem] = useState<InvoiceItem>({
    id: "",
    name: "",
    price: 0,
    qty: 1,
    discount: 10,
  });

  const handleApply = () => {
    applyInvoice(invoice);
  };

  const handleChange = (field: keyof Invoice, value: string | boolean | number) => {
    setInvoice({ ...invoice, [field]: value });
  };

  const handleRemoveItem = (id: string) => {
    setInvoice({
      ...invoice,
      items: invoice.items.filter((item) => item.id !== id),
    });
  };

  const handleSaveNewItem = () => {
    if (!newItem.name) return;
    const item: InvoiceItem = {
      ...newItem,
      id: Date.now().toString(),
    };
    setInvoice({ ...invoice, items: [...invoice.items, item] });
    setNewItem({ id: "", name: "", price: 0, qty: 12, discount: 10 });
  };

  return (
    <div className="invoice-form">
      {/* Row 1: Invoice Number + Customer */}
      <div className="form-row">
        <div className="form-group">
          <label>Invoice Number*</label>
          <input
            type="text"
            value={invoice.invoice_no}
            onChange={(e) => handleChange("invoice_no", e.target.value)}
            placeholder="FW-XXXXXX"
          />
        </div>
        <div className="form-group">
          <label>Customer*</label>
          <input
            type="text"
            value={invoice.customer}
            onChange={(e) => handleChange("customer", e.target.value)}
            placeholder="Customer name"
          />
        </div>
      </div>

      {/* Row 2: Payment Condition + Currency */}
      <div className="form-row">
        <div className="form-group">
          <label>
            Payment Condition
            <span className="info-icon" title="Payment condition info">
              ⓘ
            </span>
          </label>
          <select
            value={invoice.paymentCondition}
            onChange={(e) => handleChange("paymentCondition", e.target.value)}
          >
            <option value="">Select condition</option>
            <option value="net30">Net 30</option>
            <option value="net60">Net 60</option>
            <option value="due_on_receipt">Due on receipt</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Currency
            <span className="info-icon" title="Currency info">
              ⓘ
            </span>
          </label>
          <select
            value={invoice.currency}
            onChange={(e) => handleChange("currency", e.target.value)}
          >
            <option value="United States Dollar (USD)">United States Dollar (USD)</option>
            <option value="Euro (EUR)">Euro (EUR)</option>
            <option value="British Pound (GBP)">British Pound (GBP)</option>
            <option value="Vietnamese Dong (VND)">Vietnamese Dong (VND)</option>
          </select>
        </div>
      </div>

      {/* Row 3: Issue Date + Due Date */}
      <div className="form-row">
        <div className="form-group">
          <label>Issue Date*</label>
          <input
            type="date"
            value={invoice.issueDate}
            onChange={(e) => handleChange("issueDate", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Due Date*</label>
          <input
            type="date"
            value={invoice.dueDate}
            onChange={(e) => handleChange("dueDate", e.target.value)}
          />
        </div>
      </div>

      {/* Object */}
      <div className="form-group full-width">
        <label>Object</label>
        <input
          type="text"
          value={invoice.object}
          onChange={(e) => handleChange("object", e.target.value)}
          placeholder="Payment terms"
        />
      </div>

      {/* Product Table */}
      <div className="product-table-section">
        <table className="product-table">
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>DISCOUNT</th>
              <th>TOTAL PRICE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.qty}</td>
                <td>{item.discount}%</td>
                <td>${calculateItemTotal(item).toFixed(0)}</td>
                <td>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                    title="Remove"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add New Product Row */}
        <div className="new-product-row">
          <input
            type="text"
            placeholder="Product name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="new-product-name"
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price || ""}
            onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
            className="new-product-price"
          />
          <div className="qty-control">
            <button
              type="button"
              onClick={() => setNewItem({ ...newItem, qty: Math.max(1, newItem.qty - 1) })}
            >
              −
            </button>
            <span>{newItem.qty}</span>
            <button type="button" onClick={() => setNewItem({ ...newItem, qty: newItem.qty + 1 })}>
              +
            </button>
          </div>
          <select
            value={newItem.discount}
            onChange={(e) => setNewItem({ ...newItem, discount: Number(e.target.value) })}
            className="new-product-discount"
          >
            <option value={0}>0%</option>
            <option value={10}>10%</option>
            <option value={20}>20%</option>
            <option value={30}>30%</option>
            <option value={50}>50%</option>
          </select>
          <span className="new-product-total">${calculateItemTotal(newItem).toFixed(0)}</span>
          <button type="button" className="save-product-btn" onClick={handleSaveNewItem}>
            Save product
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button type="button" onClick={handleApply} className="apply-btn">
          Preview PDF
        </button>
      </div>
    </div>
  );
}
