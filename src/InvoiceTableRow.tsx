import { Text, View, StyleSheet } from "@react-pdf/renderer";
import type { Invoice } from "./InvoiceData";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  name: {
    width: "35%",
  },
  nameText: {
    fontSize: 10,
    color: "#111827",
    fontFamily: "Helvetica-Bold",
  },
  subtitleText: {
    fontSize: 8,
    color: "#9ca3af",
    marginTop: 2,
  },
  price: {
    width: "15%",
    fontSize: 10,
    color: "#374151",
    textAlign: "center",
  },
  qty: {
    width: "15%",
    fontSize: 10,
    color: "#374151",
    textAlign: "center",
  },
  discount: {
    width: "15%",
    fontSize: 10,
    color: "#374151",
    textAlign: "center",
  },
  total: {
    width: "20%",
    fontSize: 10,
    color: "#111827",
    textAlign: "right",
    fontFamily: "Helvetica-Bold",
  },
});

const InvoiceTableRow = ({ items }: { items: Invoice["items"] }) => {
  const rows = items.map((item) => {
    const subtotal = item.price * item.qty;
    const total = subtotal - subtotal * (item.discount / 100);
    return (
      <View style={styles.row} key={item.id}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{item.name}</Text>
          {item.subtitle && <Text style={styles.subtitleText}>{item.subtitle}</Text>}
        </View>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.qty}>{item.qty}</Text>
        <Text style={styles.discount}>{item.discount}%</Text>
        <Text style={styles.total}>${total.toFixed(0)}</Text>
      </View>
    );
  });
  return <>{rows}</>;
};

export default InvoiceTableRow;
