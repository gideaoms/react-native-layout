import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import Product from "./Product";

export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        image:
          "https://w1.ezcdn.com.br/epibrasil/fotos/zoom/5609fz1/sapato-social-20lsa600-spcf20lsa600.jpg",
        title: "Acne Studios",
        description: "Andrea nappa dusty pink",
        price: "R$50,00"
      },
      {
        id: 2,
        image:
          "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
        title: "Acne Studios",
        description: "Lain pop sky blue",
        price: "R$70,00"
      },
      {
        id: 3,
        image:
          "https://w1.ezcdn.com.br/epibrasil/fotos/zoom/5609fz1/sapato-social-20lsa600-spcf20lsa600.jpg",
        title: "Acne Studios",
        description: "Andrea nappa dusty pink",
        price: "R$30,00"
      },
      {
        id: 4,
        image:
          "https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg",
        title: "Acne Studios",
        description: "Lain pop sky blue",
        price: "R$70,00"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </View>
    );
  }
}
