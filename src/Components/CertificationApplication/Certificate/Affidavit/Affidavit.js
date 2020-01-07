import React, { Component } from "react";
import { Page, StyleSheet, View, Text, Image } from "@react-pdf/renderer";

class Affidavit extends Component {
  render() {
    console.log(this.props);

    const { products } = this.props.data;
    var productNames = "";
    if (products) {
      if (products.length > 0) {
        productNames = products.map(product => {
          return product.name;
        });
        productNames = productNames.join(", ");
      }
    }
    // Create styles
    const styles = StyleSheet.create({
      page: {
        flexDirection: "column",
        padding: 75,
        fontFamily: "Times-Roman",
        textAlign: "justify",
        lineHeight: 1.1
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
        fontSize: 14
      },
      smallText: {
        fontSize: 12
      },
      orderList: {
        textAlign: "justify"
      },
      listItem: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 8,
        width: "100%"
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
              textAlign: "center"
            }}
          >
            AFFIDAVIT
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            style={{
              ...styles.logoText,
              ...styles.heading,
              ...styles.mainText,
              textAlign: "center"
            }}
          >
            The BeVeg Vegan Standard
          </Text>
        </View>
        <View style={{ ...styles.section, ...styles.m1 }}>
          <Text
            style={{
              ...styles.heading,
              ...styles.upperCase,
              ...styles.smallText,
              ...styles.listItem
            }}
          >
            STATE OF{" "}
            {this.props.data.affidavitState ? (
              <Text style={{ textDecoration: "underline" }}>
                &nbsp;&nbsp;{this.props.data.affidavitState}&nbsp;&nbsp;
              </Text>
            ) : (
              <Text style={{ textDecoration: "underline" }}>
                __________________
              </Text>
            )}
          </Text>
          <Text
            style={{
              ...styles.heading,
              ...styles.upperCase,
              ...styles.smallText,
              ...styles.listItem
            }}
          >
            COUNTRY OF{" "}
            {this.props.data.country ? (
              <Text style={{ textDecoration: "underline" }}>
                &nbsp;&nbsp; {this.props.data.country} &nbsp;&nbsp;
              </Text>
            ) : (
              <Text style={{ textDecoration: "underline" }}>
                __________________
              </Text>
            )}
          </Text>
        </View>

        <View style={{ ...styles.smallText }}>
          <View style={styles.listItem}>
            <Text>
              <Text style={{ ...styles.heading }}>BEFORE ME</Text>, the
              undersigned authority, personally appeared on behalf of{" "}
              {this.props.data.companyName ? (
                <Text style={{ textDecoration: "underline" }}>
                  &nbsp;&nbsp;{this.props.data.companyName}&nbsp;&nbsp;
                </Text>
              ) : (
                "____________________________________"
              )}{" "}
              ​ (Company), ​ who after being first duly sworn under oath, hereby
              asserts under penalty of perjury the following: ​
              {this.props.data.companyName ? (
                <Text style={{ textDecoration: "underline" }}>
                  &nbsp;&nbsp;{this.props.data.companyName}&nbsp;&nbsp;
                </Text>
              ) : (
                "____________________________________"
              )}{" "}
              (Company) certifies{" "}
              {productNames ? (
                <Text
                  style={{ textDecoration: "underline", ...styles.heading }}
                >
                  &nbsp;&nbsp;{productNames}&nbsp;&nbsp;
                </Text>
              ) : (
                "____________________________________"
              )}{" "}
              (product(s)) submitted for Vegan Certification stand by the ​{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BeVeg Vegan Standard
              </Text>
              , and also submits to the following:
            </Text>
          </View>
        </View>

        <View style={{ ...styles.orderList, ...styles.smallText }}>
          <View style={styles.listItem}>
            <Text>1.&nbsp;&nbsp;</Text>
            <Text>
              Product(s) ​ does not ​ contain, did not use, and ​ will not use
              ingredients or sourced materials that contain animal products or
              animal by-products in the manufacturing, processing, filtration,
              clarification, or in any other capacity when making the BeVeg
              certified vegan finished product(s).
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>2.&nbsp;&nbsp;</Text>
            <Text>
              Product(s) does not use a shared facility, or if it does, cleaning
              methods to prevent cross contamination from trace non-vegan
              ingredients are hereby disclosed, explained, and deemed sufficient
              based on the representations made in the application.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>3.&nbsp;&nbsp;</Text>
            <Text>
              Product(s) submitted for review have not been tested on animals,
              will not be tested on animals in the future, and have not been
              outsourced to a third-party, or independent contractor for any
              testing on animals.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>4.&nbsp;&nbsp;</Text>
            <Text>
              Product(s), ingredients, and sourced ingredients, submitted for
              review do not use sugar or honey. If sugar or other sweetener is
              used, verification from the supplier that the sugar has not been
              filtered through bone char, sometimes disguised as natural
              charcoal, is submitted with this completed application.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>5.&nbsp;&nbsp;</Text>
            <Text>
              All incidental ingredients, insignificant ingredients, natural
              food coloring, and natural food flavoring, if applicable, have
              been disclosed, even though current truth in labelling laws do not
              require such disclosures. Affiant further certifies that all
              disclosures do not contain animal by-products, and that if any
              ingredients are obtained from a third party source, it has been
              verified that the third party also does not use any animal
              by-products in the specific source ingredient.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>6.&nbsp;&nbsp;</Text>
            <Text>
              Affidavit certifies all information submitted in the application
              is accurate and truthful.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>7.&nbsp;&nbsp;</Text>
            <Text>
              Affidavit certifies agreement to “Guidelines for Logo Use.”
            </Text>
          </View>
          <View style={{ ...styles.listItem, marginBottom: 0 }}>
            <Text>8.&nbsp;&nbsp;</Text>
            <Text>
              Affidavit certifies future intent to uphold the ​{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BeVeg Vegan Standard
              </Text>{" "}
              , and will notify BeVeg immediately if anything were to change.
            </Text>
          </View>
        </View>

        <View
          style={{
            ...styles.section,
            ...styles.m1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View style={{ textAlign: "center", width: "50%" }}>
            {this.props.data.representativeName ? (
              <Text
                style={{ textDecoration: "underline", ...styles.smallText }}
              >
                &nbsp;&nbsp; {this.props.data.representativeName} &nbsp;&nbsp;
              </Text>
            ) : (
              <Text style={{ ...styles.smallText }}>__________________</Text>
            )}
            <Text style={styles.smallText}>Representative Name, Title</Text>
          </View>
          <View
            style={{ textAlign: "center", width: "50%", position: "relative" }}
          >
            {this.props.data.representativeSignature ? (
              <View
                style={{
                  height: 25,
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  src={this.props.data.representativeSignature}
                  style={{ position: "absolute", top: -20, height: "100%" }}
                />
              </View>
            ) : null}
            <Text style={styles.smallText}>
              ________________________________
            </Text>
            <Text style={styles.smallText}>Representative Signature</Text>
          </View>
        </View>

        <View
          style={{
            ...styles.smallText,
            textAlign: "justify"
          }}
        >
          <Text>
            The foregoing instrument was acknowledged before me this
            _____________ by __________________________, who is personally known
            to me or who produced ___________ as ID and did take an oath.
          </Text>
        </View>

        <View
          style={{
            ...styles.section,
            ...styles.m2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={styles.smallText}>
              ________________________________
            </Text>
            <Text style={styles.smallText}>Notary Public</Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.smallText}>
              ________________________________
            </Text>
            <Text style={styles.smallText}>Commission Number</Text>
          </View>
        </View>
      </Page>
    );
  }
}

export default Affidavit;
