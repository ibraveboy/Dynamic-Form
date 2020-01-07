import "./CertificationApplication.scss";
import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { Document, Font, BlobProvider } from "@react-pdf/renderer";
import Affidavit from "../../Components/CertificationApplication/Certificate/Affidavit/Affidavit";
import { connect } from "react-redux";
import { setAffidavitBlob } from "../../Redux/Actions";

class CertificationApplication extends Component {
  state = {
    country: "",
    stateCompany: "",
    company: "",
    product: "",
    ready: false
  };
  componentDidMount() {
    if (this.state.ready) {
      this.setState({
        stateCompany: "Florida"
      });
    } else {
      setTimeout(() => {
        this.setState({
          stateCompany: "Florida"
        });
      }, 1);
    }
  }
  onClickHandler = () => {
    this.setState({
      country: "Beach Palms"
    });
  };
  render() {
    Font.register({
      family: "Oswald",
      src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf"
    });
    return (
      <div className="certification-application">
        <Box>
          <BlobProvider
            className="pdf-viewer"
            document={
              <Document
                author="Carissa Kranz"
                creator="Carissa Kranz"
                onRender={() => {
                  this.setState({ ready: "true" });
                }}
              >
                <Affidavit data={this.props} />
              </Document>
            }
          >
            {({ blob, url, loading, error }) => {
              if (!loading) {
                this.props.setAffidavitBlob(blob);
                return null;
              } else {
                return null;
              }
            }}
          </BlobProvider>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.addProductReducer;
};

export default connect(mapStateToProps, { setAffidavitBlob })(
  CertificationApplication
);
