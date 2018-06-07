import React from "react";
import { View, Image, Text } from "react-native";
import Button from "../Button";

import styles from "./styles";

const SubHeader = () => (
  <View style={styles.container}>
    <Image
      style={styles.avatar}
      source={{
        uri: "https://avatars1.githubusercontent.com/u/6031121?s=460&v=4"
      }}
    />

    <View style={styles.profileInfo}>
      <Text style={styles.name}>Gideao</Text>
      <Text style={styles.bio}>Eu sou programador</Text>

      <View style={styles.buttonContainer}>
        <Button style={styles.firstButton}>Mensagem</Button>
        <Button type="outline">Seguir</Button>
      </View>
    </View>
  </View>
);

export default SubHeader;
