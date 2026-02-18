import { StyleSheet, Text, View } from "@react-pdf/renderer";
import type { Invoice } from "./InvoiceData";
import InvoiceNo from "./InvoiceNo";
import InvoiceBillTo from "./InvoiceBillTo";
import InvoiceItemsTable from "./InvoiceItemsTable";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingTop: 30,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 30,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logoCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#1a56db",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
  },
  brandName: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
});

const InvoiceComponent = ({ invoice }: { invoice: Invoice }) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>▶</Text>
        </View>
        <Text style={styles.brandName}>NTH PDF Preview</Text>
      </View>

      <InvoiceNo invoice={invoice} />

      <InvoiceBillTo invoice={invoice} />

      <InvoiceItemsTable invoice={invoice} />
    </View>
  );
};

export default InvoiceComponent;
