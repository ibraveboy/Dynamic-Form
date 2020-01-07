import React, { Component } from "react";
import { Page, StyleSheet, View, Text } from "@react-pdf/renderer";

export default class Guidelines extends Component {
  render() {
    // Create styles
    const styles = StyleSheet.create({
      page: {
        flexDirection: "column",
        padding: 75,
        fontFamily: "Times-Roman"
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
              ...styles.smallText
            }}
          >
            GUIDELINES FOR LOGO USE
          </Text>
        </View>
        <View
          style={{ ...styles.m1, ...styles.italicText, ...styles.smallText }}
        >
          <Text styles={{ ...styles.smallText }}>
            Unauthorized use of the “Certified Vegan” Logo is a violation of
            federal and international trademark laws.
          </Text>
        </View>
        <View style={{ ...styles.orderList, ...styles.smallText }}>
          <View style={styles.listItem}>
            <Text>1.&nbsp;&nbsp;</Text>
            <Text>
              Permission to use the logo occurs only after written application
              approval for approved products and payment of fees. (For
              additional details, refer to the Fee Schedule outlined in the
              attached Exhibit A).
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>2.&nbsp;&nbsp;</Text>
            <Text>
              Logo only represents that the product is certified and should not
              be placed on the product in a way that could represent the company
              is being promoted or certified by{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!
              </Text>{" "}
              Other than that, the Logo may be placed anywhere visible to the
              consumer to ease the shopping experience.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>3.&nbsp;&nbsp;</Text>
            <Text>
              Logo may not be copied, animated, imitated, morphed, or modified
              in any manner. However, the logo size may be enlarged or shrunk
              for printing and packaging purposes. In addition, the logo may be
              colored with written authorization.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>4.&nbsp;&nbsp;</Text>
            <Text>
              The logo file as delivered to your company must be used in its
              entirety. The logo symbol may not be separated from logotype.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>5.&nbsp;&nbsp;</Text>
            <Text>
              If the product is certified by{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!
              </Text>{" "}
              , the{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!
              </Text>{" "}
              logo may be used on the product and on menus next to the product.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>6.&nbsp;&nbsp;</Text>
            <Text>
              Use of the certified logo is a license that may be revoked for
              failure to return required documentation, improper logo use,
              non-payment of applicable fees, misrepresentation, and any other
              improper use{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!
              </Text>{" "}
              deems legally actionable. If the logo is ever used in error, the
              Company must notify{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!
              </Text>{" "}
              immediately, destroy incorrect labels and replace them
              accordingly, post a consumer notification on your company website
              and a statement for our website. Any misuse is legally actionable
              for damages under the law.
            </Text>
          </View>
        </View>
        <View
          style={{ ...styles.m2, ...styles.smallText, textAlign: "justify" }}
        >
          <Text>
            If approved,{" "}
            <Text style={{ ...styles.logoText, ...styles.heading }}>
              BevVeg!
            </Text>{" "}
            has permission to list certified products and associated company
            names on the official{" "}
            <Text style={{ ...styles.logoText, ...styles.heading }}>
              BevVeg!
            </Text>{" "}
            website and other marketing materials. Any found violation of the{" "}
            <Text style={{ ...styles.logoText, ...styles.heading }}>
              BevVeg!
            </Text>{" "}
            Vegan Standard will result in an immediate request to remedy the
            problem within 30 days of notice, or rights to logo use is
            terminated. Companies must immediately notify{" "}
            <Text style={{ ...styles.logoText, ...styles.heading }}>
              BevVeg!
            </Text>{" "}
            if any of their processes or ingredients compromise the integrity of
            our Vegan Standard, and likewise must immediately notify{" "}
            <Text style={{ ...styles.logoText, ...styles.heading }}>
              BevVeg!
            </Text>{" "}
            in writing if their company is going out of business, has changed
            addresses or websites, or is being acquired or sold to another
            entity. Certification does not transfer to a new entity.{" "}
            <Text style={{ ...styles.logoText, ...styles.heading }}>
              BevVeg!
            </Text>{" "}
            reserves the right to assess a penalty to any company found in
            violation. Any Misuse may be actionable under the law, and said
            company agrees to be governed by jurisdiction in Florida.
          </Text>
        </View>
      </Page>
    );
  }
}
