# NTH PDF Preview

A real-time invoice PDF preview application built with React, TypeScript, and `@react-pdf/renderer`. Edit invoice details in a form on the left and instantly preview the generated PDF on the right.

![Invoice Preview](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)

## Features

- **Live PDF Preview** — Changes in the form are reflected in the PDF after clicking "Preview PDF"
- **Invoice Form** — Invoice number, customer, payment condition, currency, dates, and more
- **Product Management** — Add/remove products with price, quantity, and discount
- **Order Summary** — Auto-calculated subtotal, tax, shipping, and order total
- **PDF Toolbar** — Built-in zoom, page navigation, download, and print controls

## Tech Stack

| Technology                                   | Purpose                 |
| -------------------------------------------- | ----------------------- |
| [React 19](https://react.dev)                | UI framework            |
| [TypeScript](https://www.typescriptlang.org) | Type safety             |
| [Vite 7](https://vite.dev)                   | Build tool & dev server |
| [@react-pdf/renderer](https://react-pdf.org) | PDF generation          |
| [Tailwind CSS 4](https://tailwindcss.com)    | Utility styling         |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 18
- [Bun](https://bun.sh) (recommended) or npm

### Install & Run

```bash
# Install dependencies
bun install

# Start dev server
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
bun run build
```

Output will be in the `dist/` directory.

## Project Structure

```
src/
├── App.tsx                 # Main layout (form panel + PDF viewer)
├── InvoiceForm.tsx         # Invoice form with product table
├── InvoiceData.ts          # Data model & calculation helpers
├── InvoiceComponent.tsx    # PDF template root component
├── InvoiceNo.tsx           # PDF invoice number & date
├── InvoiceBillTo.tsx       # PDF pay-to & invoice-to sections
├── InvoiceItemsTable.tsx   # PDF product table & order summary
├── InvoiceTableRow.tsx     # PDF product row rendering
├── index.css               # Global styles
└── main.tsx                # App entry point
```

## License

MIT
