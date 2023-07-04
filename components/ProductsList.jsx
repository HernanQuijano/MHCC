import * as React from "react";
import { FlatList } from "react-native";
import { products } from "../data";
import ProductCard from "./ProductCard2";

export function ProductsList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} />}
      contentContainerStyle={{
      paddingHorizontal: 15,
      paddingBottom: 20
      }}
    />
  );
}

export default ProductsList;