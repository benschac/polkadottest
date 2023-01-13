import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { u8aToHex } from "@polkadot/util";
import { bip39Generate, bip39ToSeed, waitReady } from "@polkadot/wasm-crypto";
import React from "react";
import "@polkadot/wasm-crypto/initOnlyAsm";

export default function App() {
  // first wait until the WASM has been loaded (async init)
  React.useEffect(() => {
    (async () => {
      await waitReady();
      // generate phrase
      const phrase = bip39Generate(12);

      // get ed25519 seed from phrase
      const seed = bip39ToSeed(phrase, "");

      // display
      console.log("phrase:", phrase);
      console.log("seed:", u8aToHex(seed));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
