import { Text, View, StyleSheet } from "@react-pdf/renderer";
import type { Invoice } from "./InvoiceData";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 25,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  section: {
    width: "48%",
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 5,
  },
  text: {
    fontSize: 9,
    color: "#4b5563",
    lineHeight: 1.6,
  },
  textItalic: {
    fontSize: 9,
    color: "#4b5563",
    fontFamily: "Helvetica-Oblique",
  },
});

const InvoiceBillTo = ({ invoice }: { invoice: Invoice }) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pay to:</Text>
      <Text style={styles.text}>
        {invoice.companyName}, {invoice.companyCity}, {invoice.companyState}
      </Text>
      <Text style={styles.text}>{invoice.companyAddress}</Text>
      <Text style={styles.text}>VAT Code: {invoice.companyVatCode}</Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Invoice to:</Text>
      <Text style={styles.text}>
        {invoice.invoiceToName}, {invoice.invoiceToCity}, {invoice.invoiceToState}
      </Text>
      <Text style={styles.text}>{invoice.invoiceToAddress}</Text>
      <Text style={styles.textItalic}>{invoice.invoiceToEmail}</Text>
    </View>
  </View>
);

export default InvoiceBillTo;
