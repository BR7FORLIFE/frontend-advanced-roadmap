import
  {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
  } from "react-native";
import { useProducts } from "../../../shared/hooks/products";
import Screen from "../../../shared/layout/screen.layout";
import { Card } from "../components/card";

export default function SeeAllProducts() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Error en obtener los Datos</Text>;
  }

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card id={item.id} name={item.name} price={item.price} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
