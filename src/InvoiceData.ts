export interface InvoiceItem {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  qty: number;
  discount: number; // percentage
}

export interface Invoice {
  invoice_no: string;
  customer: string;
  paymentCondition: string;
  currency: string;
  issueDate: string;
  dueDate: string;
  object: string;

  // Pay to (company info)
  companyName: string;
  companyCity: string;
  companyState: string;
  companyAddress: string;
  companyCountry: string;
  companyVatCode: string;

  // Invoice to (customer info)
  invoiceToName: string;
  invoiceToCity: string;
  invoiceToState: string;
  invoiceToAddress: string;
  invoiceToCountry: string;
  invoiceToEmail: string;

  items: InvoiceItem[];

  // Order summary
  tax: number;
  shippingEstimate: number;
}

const InvoiceData: Invoice = {
  invoice_no: "FW-XXXXXX",
  customer: "Bonnie Green",
  paymentCondition: "",
  currency: "United States Dollar (USD)",
  issueDate: "",
  dueDate: "",
  object: "",

  companyName: "Flowbite LLC",
  companyCity: "LOUISVILLE",
  companyState: "Selby",
  companyAddress: "3864 Johnson Street, United States of America",
  companyCountry: "United States of America",
  companyVatCode: "AA-1234567890",

  invoiceToName: "Bonnie Green",
  invoiceToCity: "Carolina",
  invoiceToState: "Selby",
  invoiceToAddress: "3864 Johnson Street, United States of America",
  invoiceToCountry: "United States of America",
  invoiceToEmail: "name@company.com",

  items: [
    {
      id: "1",
      name: "Flowbite Developer Edition",
      subtitle: "HTML, Figma, JS",
      price: 269,
      qty: 2,
      discount: 50,
    },
    {
      id: "2",
      name: "Flowbite Designer Edition",
      subtitle: "Figma Design System",
      price: 149,
      qty: 3,
      discount: 0,
    },
    {
      id: "3",
      name: "Flowbite Open Source",
      subtitle: "Open source components",
      price: 0,
      qty: 1,
      discount: 0,
    },
    {
      id: "4",
      name: "2 Years Support",
      subtitle: "Premium support",
      price: 199,
      qty: 1,
      discount: 0,
    },
    {
      id: "5",
      name: "Flowbite Developer (Team License)",
      subtitle: "HTML, Figma, JS",
      price: 799,
      qty: 2,
      discount: 0,
    },
  ],

  tax: 477,
  shippingEstimate: 0,
};

export function calculateItemTotal(item: InvoiceItem): number {
  const subtotal = item.price * item.qty;
  return subtotal - subtotal * (item.discount / 100);
}

export function calculateSubtotal(items: InvoiceItem[]): number {
  return items.reduce((sum, item) => sum + calculateItemTotal(item), 0);
}

export function calculateOrderTotal(invoice: Invoice): number {
  return calculateSubtotal(invoice.items) + invoice.tax + invoice.shippingEstimate;
}

export default InvoiceData;
