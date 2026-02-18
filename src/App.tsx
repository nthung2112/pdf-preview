import { PDFViewer, StyleSheet, Page, Document } from "@react-pdf/renderer";
import InvoiceComponent from "./InvoiceComponent";
import InvoiceData from "./InvoiceData";
import InvoiceForm from "./InvoiceForm";
import { useState } from "react";
import type { Invoice } from "./InvoiceData";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 20,
  },
});

function App() {
  const [invoice, setInvoice] = useState<Invoice>(InvoiceData);

  return (
    <div className="app-container">
      <div className="app-layout">
        <div className="form-panel">
          <InvoiceForm currentInvoice={invoice} applyInvoice={setInvoice} />
        </div>
        <div className="preview-panel">
          <PDFViewer style={{ width: "100%", height: "100%" }} showToolbar={true}>
            <Document title="Invoice Preview">
              <Page size="A4" style={styles.page}>
                <InvoiceComponent invoice={invoice} />
              </Page>
            </Document>
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}

export default App;
