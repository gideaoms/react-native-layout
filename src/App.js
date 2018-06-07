import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import ProductList from "./components/ProductList";
import Tabs from "./components/Tabs";
import { colors } from "./styles";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <Header />
        <ScrollView>
          <SubHeader />
          <ProductList />
        </ScrollView>
        <Tabs />
      </View>
    );
  }
}
