import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  id: string;
  name: string;
  price: number;
}

export function Card({ id, name, price }: Props) {
  return (
    <View style={style.container}>
      <View>
        <Image />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 50,
  },
});
