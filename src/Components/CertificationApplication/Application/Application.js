import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { PDFViewer, Document, Font } from "@react-pdf/renderer";
import { connect } from "react-redux";
import { setAffidavitBlob } from "../../../Redux/Actions";
import Affidavit from "../Certificate/Affidavit/Affidavit";

class Application extends Component {
  state = {
    ready: false
  };

  render() {
    Font.register({
      family: "Oswald",
      src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf"
    });
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <Box>
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Document
              author="Carissa Kranz"
              creator="Carissa Kranz"
              onRender={() => {
                this.setState({ ready: "true" });
              }}
            >
              <Affidavit data={this.props} />
            </Document>
          </PDFViewer>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.addProductReducer;
};

export default connect(mapStateToProps, { setAffidavitBlob })(Application);
