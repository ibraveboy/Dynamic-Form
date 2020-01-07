import React, { Component } from "react";
import { Page, StyleSheet, View, Text } from "@react-pdf/renderer";

export default class FeeSchedule extends Component {
  render() {
    // Create styles
    const styles = StyleSheet.create({
      page: {
        flexDirection: "column",
        padding: 75,
        fontFamily: "Times-Roman",
        textAlign: "justify"
      },
      section: {
        position: "relative"
      },

      heading: {
        fontWeight: "bold",
        fontFamily: "Times-Bold"
      },
      upperCase: {
        textTransform: "uppercase"
      },
      mainText: {
        fontSize: 12
      },
      smallText: {
        fontSize: 11.5
      },
      italicText: {
        fontStyle: "italic",
        fontFamily: "Times-Italic"
      },
      boldItalicText: {
        fontStyle: "italic",
        fontWeight: "bold",
        fontFamily: "Times-Bold"
      },
      orderList: {
        paddingLeft: 20,
        textAlign: "justify"
      },
      listItem: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        width: "90%"
      },
      logoText: {
        color: "#169f85"
      },
      m4: {
        marginVertical: 40
      },
      m3: {
        marginVertical: 30
      },
      m2: {
        marginVertical: 20
      },
      m1: {
        marginVertical: 10
      },
      pL3: {
        paddingLeft: 30
      }
    });
    return (
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text
            style={{
              ...styles.heading,
              ...styles.upperCase,
              ...styles.mainText,
              marginBottom: 10
            }}
          >
            EXHIBIT A: FEE SCHEDULE
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={{
              ...styles.heading,
              ...styles.upperCase,
              ...styles.smallText,
              ...styles.listItem
            }}
          >
            PRICING
          </Text>
        </View>

        <View style={{ ...styles.orderList, ...styles.smallText }}>
          <View style={styles.listItem}>
            <Text>1.&nbsp;&nbsp;</Text>
            <Text>
              For new applications (i.e., applications for product not
              previously certified by BevVeg!), the application fee is $100. For
              renewals only (i.e., applications for products certified by
              BevVeg! during the preceding 12-month period), the application fee
              is $50.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text
            style={{
              ...styles.heading,
              ...styles.upperCase,
              ...styles.smallText,
              ...styles.listItem
            }}
          >
            IMPORTANT INFORMATION
          </Text>
        </View>

        <View style={{ ...styles.orderList, ...styles.smallText }}>
          <View style={styles.listItem}>
            <Text>1.&nbsp;&nbsp;</Text>
            <Text>
              All fees must be paid at the time the application is submitted for
              review. Applications will not be processed until payment is
              submitted.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>2.&nbsp;&nbsp;</Text>
            <Text>
              In the event certification is not granted, the licensing fee will
              be fully refunded.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text
            style={{
              ...styles.heading,
              ...styles.upperCase,
              ...styles.smallText,
              ...styles.listItem
            }}
          >
            PAYMENT
          </Text>
        </View>

        <View
          style={{
            ...styles.smallText,
            textAlign: "justify"
          }}
        >
          <Text>
            In order to not delay certification, please submit payment at time
            of application. Companies may submit payment securely online by
            credit card at:
          </Text>
        </View>
      </Page>
    );
  }
}
