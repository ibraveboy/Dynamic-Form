import React, { Component } from "react";
import { Page, StyleSheet, Image, View } from "@react-pdf/renderer";
import cover from "../../../../assets/BevVeg.png";

export default class Cover extends Component {
  render() {
    // Create styles
    const styles = StyleSheet.create({
      page: {
        flexDirection: "row",
        alignItems: "stretch"
      },
      section: {
        flexGrow: 1,
        position: "relative"
      },
      cover: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });
    return (
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={cover} style={styles.cover} />
        </View>
      </Page>
    );
  }
}
