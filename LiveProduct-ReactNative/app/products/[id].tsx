import { useMutation } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { ViewProduct } from "../../features/products/api/products";

export default function SeeProduct() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const mutation = useMutation({
    mutationFn: () => ViewProduct(id),
  });

  if (mutation.isPending) {
    return <Text>Cargando...</Text>;
  }

  if (mutation.isError) {
    return <Text>Error al cargar los datos...</Text>;
  }

  return <Text style={style.info}>producto {id} visto exitosamente!</Text>;
}

const style = StyleSheet.create({
  info: {
    color: "green",
    fontSize: 12,
  },
});
