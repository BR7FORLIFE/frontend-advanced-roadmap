import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  price: number;
  url: string;
}

export function Card({ name, price, url }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>

        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 5,
    margin: 8,
  },

  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },

  content: {
    padding: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    minHeight: 42,
  },

  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
    color: "#2e7d32",
  },
});
