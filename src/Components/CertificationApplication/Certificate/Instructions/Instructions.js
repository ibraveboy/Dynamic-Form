import React, { Component } from "react";
import { Page, StyleSheet, View, Text } from "@react-pdf/renderer";

export default class Instructions extends Component {
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
        width: "93%"
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
            Instructions
          </Text>
        </View>
        <View
          style={{ ...styles.m1, ...styles.italicText, ...styles.smallText }}
        >
          <Text styles={{ ...styles.smallText }}>
            Please note, we certify products, not companies. Companies seeking
            certification for multiple products must submit separate
            applications for each product they wish to have certified.
          </Text>
        </View>
        <View style={{ ...styles.orderList, ...styles.smallText }}>
          <View style={styles.listItem}>
            <Text>1.&nbsp;&nbsp;</Text>
            <Text>
              A completed application must be submitted. A late fee may be
              assessed for any applications that need to be returned to the
              applicant due to incompleteness. Please be advised that our review
              of the completed application may require contact with suppliers
              and manufacturers, or follow up discussion with the company for
              additional information.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>2.&nbsp;&nbsp;</Text>
            <Text>
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!
              </Text>{" "}
              reserves the right, when determined necessary, to perform onsite
              inspection of the premises to verify that the information
              submitted to{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!
              </Text>{" "}
              or its agents in connection with this application is true and
              accurate.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>3.&nbsp;&nbsp;</Text>
            <Text>
              A complete list of all ingredients, including the source of
              ingredients, manufactured ingredients, and genetically modified
              organism ingredients that may have involved animal genes or
              substances. Companies must also specifically list any incidental
              or “insignificant” ingredients, including, but not limited to,
              natural flavors and colors.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>4.&nbsp;&nbsp;</Text>
            <Text>
              A written statement detailing all processing and filtration
              methods that may contain animal products or possible trace amounts
              of animal ingredients due to use of shared machinery. If shared
              machinery is used, please provide a brief explanation, including a
              detailed description of any cleaning methods used to prevent
              possible cross contamination. (Please note, use of shared
              machinery does not disqualify a product from certification.
              However, the use of shared machinery must be explained to ensure
              that no cross-contamination takes place.)
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>5.&nbsp;&nbsp;</Text>
            <Text>
              A signed Affidavit certifying that no animal products or by
              products (including animal GMOs) are used in the product
              ingredients, or in the manufacturing process before packaging; and
              that there is no animal testing of the finished product by the
              company or a third party. The Affidavit certifies future intent to
              uphold the Vegan Standard.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>6.&nbsp;&nbsp;</Text>
            <Text>
              If applicable, a detailed description of any deacidification
              techniques (i.e., any processes used to achieve an acid reduction
              in beverage) employed. If any non-vegan deacidification agents are
              used, they must be disclosed.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>7.&nbsp;&nbsp;</Text>
            <Text>
              For products containing sugar, verification that the sugar has not
              been filtered through bone char, often disguised as natural
              charcoal, is required. Sugar companies will have this information
              on file, and this information must be included as part of the
              application.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text>8.&nbsp;&nbsp;</Text>
            <Text>
              Upon review of the application,{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!
              </Text>{" "}
              will engage in certification deliberations. If Certification is
              approved,{" "}
              <Text style={{ ...styles.logoText, ...styles.heading }}>
                BevVeg!{" "}
              </Text>
              will issue an electronic, high resolution format of the logo for
              immediate use in production. With the exception of alterations to
              the logo’s color, the trademark logo may not be altered in any
              way. Companies must comply with all guidelines for the use of the
              logo.{" "}
              <Text style={styles.boldItalicText}>
                Unauthorized use of the certification logo is a violation of
                federal and international trademark laws.
              </Text>{" "}
              Companies may license the Certification for one 12-month period.
              After the 12-month period, the approved product(s) must be
              re-certified.
            </Text>
          </View>
        </View>
      </Page>
    );
  }
}
