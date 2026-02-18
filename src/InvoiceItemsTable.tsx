import { View, StyleSheet, Text } from "@react-pdf/renderer";
import InvoiceTableRow from "./InvoiceTableRow";
import type { Invoice } from "./InvoiceData";
import { calculateSubtotal, calculateOrderTotal } from "./InvoiceData";

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 8,
    marginBottom: 4,
  },
  headerName: {
    width: "35%",
    fontSize: 8,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  headerPrice: {
    width: "15%",
    fontSize: 8,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  headerQty: {
    width: "15%",
    fontSize: 8,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  headerDiscount: {
    width: "15%",
    fontSize: 8,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  headerTotal: {
    width: "20%",
    fontSize: 8,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    textAlign: "right",
  },
  // Order Summary
  summaryContainer: {
    marginTop: 25,
    alignItems: "flex-end",
  },
  summaryBox: {
    width: "45%",
  },
  summaryTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 10,
    textAlign: "center",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  summaryLabel: {
    fontSize: 10,
    color: "#6b7280",
  },
  summaryValue: {
    fontSize: 10,
    color: "#374151",
    fontFamily: "Helvetica-Bold",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  totalLabel: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
  totalValue: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
});

const InvoiceItemsTable = ({ invoice }: { invoice: Invoice }) => {
  const subtotal = calculateSubtotal(invoice.items);
  const orderTotal = calculateOrderTotal(invoice);

  return (
    <View style={styles.tableContainer}>
      {/* Table Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerName}>Product Name</Text>
        <Text style={styles.headerPrice}>Price</Text>
        <Text style={styles.headerQty}>Quantity</Text>
        <Text style={styles.headerDiscount}>Discount</Text>
        <Text style={styles.headerTotal}>Total Price</Text>
      </View>

      {/* Table Rows */}
      <InvoiceTableRow items={invoice.items} />

      {/* Order Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Order summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(0)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>${invoice.tax}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping estimate</Text>
            <Text style={styles.summaryValue}>${invoice.shippingEstimate}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Order total</Text>
            <Text style={styles.totalValue}>${orderTotal.toFixed(0)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvoiceItemsTable;
