import React, { Component } from "react";
import { Page, StyleSheet, View, Text, Image } from "@react-pdf/renderer";
import veganLogo from "../../../../assets/vegan-logo.png";
import veganLabel from "../../../../assets/vegan-certification-label.png";

export default class Intro extends Component {
  render() {
    // Create styles
    const styles = StyleSheet.create({
      page: {
        flexDirection: "column",
        alignItems: "stretch",
        padding: 75,
        fontFamily: "Times-Roman",
        textAlign: "center",
        letterSpacing: 1
      },
      section: {
        position: "relative"
      },
      alignCenter: {
        textAlign: "center"
      },
      boldText: {
        fontSize: 16,
        fontFamily: "Times-Bold",
        fontWeight: 900
      },
      logoText: {
        color: "#169f85"
      },
      motoText: {
        marginVertical: 25,
        fontSize: 16
      },
      normalText: {
        fontSize: 14,
        fontWeight: 400
      },
      linkText: {
        marginVertical: 16,
        fontSize: 14
      },
      underLinedText: {
        textDecoration: "underline"
      },
      logoWrapper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 40
      },
      logoView: {
        height: 150,
        marginRight: 50
      },
      logoImage: {
        height: 150
      },
      smallText: {
        fontSize: 12
      }
    });
    return (
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ ...styles.alignCenter, ...styles.boldText }}>
            <Text style={styles.logoText}>BevVeg!</Text> is the{" "}
            <Text style={{ fontStyle: "italic" }}>only</Text> Vegan trademark
            specifically licensed by a law firm with international trademarks
            secured.
          </Text>
          <Text style={{ ...styles.motoText, ...styles.alignCenter }}>
            Consumer Trust = Increased Sales
          </Text>
          <Text style={{ ...styles.normalText, ...styles.alignCenter }}>
            Companies seeking certification will be invoiced according to the
            fee schedule set forth in the attached Exhibit A. In order to not
            delay certification, please submit payment at time of application.
            Payment may be submitted securely online by credit card at:
          </Text>
          <Text
            style={{
              ...styles.boldText,
              ...styles.alignCenter,
              ...styles.linkText,
              ...styles.underLinedText
            }}
          >
            www.BevVeg.com/Payments
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "extralight" }}>
            <Text style={styles.boldText}>Certification Process:</Text> Products
            that carry our trademark Vegan Logo, hereinafter referred to as the
            <Text style={styles.logoText}>&nbsp;BevVeg!</Text> “Certification”
            stand by our “Vegan Standard!”
          </Text>
          <View style={styles.logoWrapper}>
            <View style={styles.logoView}>
              <Image src={veganLogo} style={styles.logoImage} />
            </View>
            <View style={styles.logoView}>
              <Image src={veganLabel} style={styles.logoImage} />
            </View>
          </View>
          <View>
            <Text style={{ ...styles.smallText, ...styles.alignCenter }}>
              Thank you for your application! We applaud your conscious efforts
              and appreciate your dedication to marketing vegan products.
            </Text>
          </View>
        </View>
      </Page>
    );
  }
}
