import { Text, View, StyleSheet } from "@react-pdf/renderer";
import type { Invoice } from "./InvoiceData";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  invoiceTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
  dateText: {
    fontSize: 10,
    color: "#6b7280",
    marginTop: 5,
  },
});

const InvoiceNo = ({ invoice }: { invoice: Invoice }) => (
  <View style={styles.container}>
    <Text style={styles.invoiceTitle}>Invoice #{invoice.invoice_no.replace("FW-", "")}</Text>
    <Text style={styles.dateText}>Date: {invoice.issueDate || "05/07/2025"}</Text>
  </View>
);

export default InvoiceNo;
