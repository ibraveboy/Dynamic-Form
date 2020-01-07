import {
  PRODUCT_TITLE_CHANGE,
  ADD_PRODUCT,
  ADD_INGREDIENT,
  INGREDIENT_FIELD_CHANGE,
  OPEN_CHOOSE_INGREDIENT_MODAL,
  CLOSE_CHOOSE_INGREDIENT_MODAL,
  REPLACE_INGREDIENT,
  SET_ERROR,
  INGREDIENT_FILE_UPLOAD,
  DELETE_PRODUCT,
  DELETE_INGREDIENT,
  SET_INTERVAL_ID,
  ANSWER_TEXT_CHANGE,
  ANSWER_FILE_UPLOAD,
  SET_FORM_ID,
  SET_FORM_DATA,
  CLEAR_INTERVAL_ID,
  INGREDIENT_FILE_DELETE,
  ANSWER_FILE_DELETE,
  TOGGLE_SUCCESS_MODAL,
  SAVE_FORM_DATA,
  TOGGLE_LOADER,
  SET_REPRESENTATIVE_SIGNATURE,
  SET_AFFIDAVIT_BLOB,
  SET_ACCEPT_TERMS
} from "../Constants";
import axios from "axios";

//
// set signature in redux
//

export const setRepresentativeSign = imgUrlData => {
  return {
    type: SET_REPRESENTATIVE_SIGNATURE,
    payload: imgUrlData
  };
};

//
// set Affidavit Blob
//

export const setAffidavitBlob = blob => {
  return {
    type: SET_AFFIDAVIT_BLOB,
    payload: blob
  };
};

///
// set accept terms
//
export const setAcceptTerms = bool => {
  return {
    type: SET_ACCEPT_TERMS,
    payload: bool
  };
};

//
// sent affidavit PDF to API
//

export const sendAffidavitPDF = blob => {
  return dispatch => {
    let formData = new FormData();
    formData.append("affidavit", blob);
    axios
      .post("some url", formData)
      .then(res => {
        console.log("File has been uploaded");
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };
};

export const productTitleChangeHandler = (e, index) => {
  return {
    type: PRODUCT_TITLE_CHANGE,
    payload: { target: e.target, index }
  };
};

export const addProductHandler = newProduct => {
  return {
    type: ADD_PRODUCT,
    payload: newProduct
  };
};

export const deleteProductHandler = (index, id) => {
  return {
    type: DELETE_PRODUCT,
    payload: { index, id }
  };
};

export const addIngredientHandler = (newIngredient, productIndex) => {
  return {
    type: ADD_INGREDIENT,
    payload: { newIngredient, productIndex }
  };
};

export const deleteIngredientHandler = (productIndex, index, id) => {
  return {
    type: DELETE_INGREDIENT,
    payload: { productIndex, index, id }
  };
};

export const replaceIngredientHandler = (
  newIngredient,
  productIndex,
  ingredientIndex
) => {
  return {
    type: REPLACE_INGREDIENT,
    payload: { newIngredient, productIndex, ingredientIndex }
  };
};

export const ingredientFieldChangeHandler = (
  e,
  productIndex,
  ingredientIndex
) => {
  return {
    type: INGREDIENT_FIELD_CHANGE,
    payload: { target: e.target, productIndex, ingredientIndex }
  };
};

export const ingredientFileUpload = (
  file,
  e,
  productIndex,
  ingredientIndex
) => {
  return dispatch => {
    axios
      .post("http://www.mocky.io/v2/5dfb82d32f000056c4ff9fe4")
      .then(res => {
        //Upload file to the server Api call and after Response call dispatch
        let url = res.data.url;
        return dispatch({
          type: INGREDIENT_FILE_UPLOAD,
          payload: {
            file: {
              name: file.name,
              size:
                file.size / 1000000 < 1
                  ? file.size / 1000 + "KB"
                  : file.size / 1000000 + "MB",
              url: url
            },
            target: e.target,
            productIndex,
            ingredientIndex
          }
        });
      })
      .catch(err => {
        //err message
        alert("OOPS! Something went wrong.");
      });
  };
};

export const ingredientFileDelete = (file, productIndex, ingredientIndex) => {
  return dispatch => {
    return dispatch({
      type: INGREDIENT_FILE_DELETE,
      payload: {
        productIndex,
        ingredientIndex
      }
    });
  };
};

export const openChooseIngredientModal = productIndex => {
  return {
    type: OPEN_CHOOSE_INGREDIENT_MODAL,
    payload: productIndex
  };
};

export const closeChooseIngredientModal = () => {
  return {
    type: CLOSE_CHOOSE_INGREDIENT_MODAL
  };
};

export const setError = (key, value) => {
  return {
    type: SET_ERROR,
    payload: { key, value }
  };
};

export const setIntervalId = id => {
  return {
    type: SET_INTERVAL_ID,
    payload: id
  };
};

export const clearIntervalId = id => {
  clearInterval(id);
  return {
    type: CLEAR_INTERVAL_ID
  };
};

export const answerTextChangeHandler = (e, index) => {
  return {
    type: ANSWER_TEXT_CHANGE,
    payload: { target: e.target, index }
  };
};

export const answerFileChangeHandler = (e, file, index) => {
  // API call for file upload
  return dispatch => {
    axios
      .post("http://www.mocky.io/v2/5dfb82d32f000056c4ff9fe4")
      .then(res => {
        console.log(res.data);

        let url = res.data;
        return dispatch({
          type: ANSWER_FILE_UPLOAD,
          payload: {
            file: {
              name: file.name,
              size:
                file.size / 1000000 < 1
                  ? file.size / 1000 + "KB"
                  : file.size / 1000000 + "MB",
              url: url.url
            },
            index
          }
        });
      })
      .catch(err => {
        alert("OOPS! Something went wrong.");
      });
  };
};

export const answerFileDeleteHandler = (file, index) => {
  return dispatch => {
    return dispatch({
      type: ANSWER_FILE_DELETE,
      payload: {
        index
      }
    });
  };
};

export const setFormId = () => {
  return {
    type: SET_FORM_ID
  };
};

export const setFormData = (id, history) => {
  return dispatch => {
    axios
      .post("http://demo1011396.mockable.io/productForms", { id })
      .then(res => {
        console.log(res.data);

        if (res.data.isEmpty) history.push("/404");
        return dispatch({
          type: SET_FORM_DATA,
          payload: res.data
        });
      })
      .catch(err => {});
  };
};

export const saveFormData = data => {
  return dispatch => {
    axios
      .post("https://webhook.site/a3b5809c-00f7-4dcb-94ab-c8daef2b8050", data)
      .then(res => {
        return dispatch({
          type: SAVE_FORM_DATA,
          payload: res.data
        });
      });
  };
};

export const toggleSuccessModal = text => {
  return {
    type: TOGGLE_SUCCESS_MODAL,
    payload: text
  };
};
export const toggleLoader = () => {
  return {
    type: TOGGLE_LOADER
  };
};
