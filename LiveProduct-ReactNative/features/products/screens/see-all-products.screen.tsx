import { router } from "expo-router";
import
  {
    ActivityIndicator,
    Button,
    FlatList,
    Pressable,
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
            <Pressable
              onPress={() => router.push(`/products/${item.id}`)}
              id={item.id}
            >
              <Card name={item.name} price={item.price} url={item.url} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.buttonProducts}>
        <Button
          title="ver visitas de cada producto"
          onPress={() => router.push("/stats")}
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
  buttonProducts: {
    width: "50%",
  },
});
