import {
	CUSTOM_FONT_FAIL,
	CUSTOM_FONT_REQUEST,
	CUSTOM_FONT_SUCCESS,
	GET_FONT_FAIL,
	GET_FONT_REQUEST,
	GET_FONT_SUCCESS,
	SET_CUSTOMFONT_FAIL,
	SET_CUSTOMFONT_REQUEST,
	SET_CUSTOMFONT_SUCCESS,
	SET_FONT_FAIL,
	SET_FONT_FAIL2,
	SET_FONT_REQUEST,
	SET_FONT_REQUEST2,
	SET_FONT_SUCCESS,
	SET_FONT_SUCCESS2,
  } from "../constants/fontFamily";
  
  export const fontFamilyReducer = (
	state = {
	  fontFamily: "'Roboto', sans-serif",
	  fontFamily2: "'Roboto', sans-serif",
	},
	{ type, payload }
  ) => {
	switch (type) {
	  case SET_FONT_REQUEST:
		return { ...state, fontFamilyReducer: "", isloading: true };
	  case SET_FONT_SUCCESS:
		return { ...state, fontFamily: payload, isloading: false };
	  case SET_FONT_FAIL:
		return { ...state, fontError: payload, isloading: false };
	  case SET_FONT_REQUEST2:
		return { ...state, fontFamilyReducer: "", isloading: true };
	  case SET_FONT_SUCCESS2:
		return { ...state, fontFamily2: payload, isloading: false };
	  case SET_FONT_FAIL2:
		return { ...state, fontError: payload, isloading: false };
	  default:
		return state;
	}
  };
  
  export const customeFontFamilyReducer = (
	state = { customeFont: false },
	{ type, payload }
  ) => {
	switch (type) {
	  case CUSTOM_FONT_REQUEST:
		return { customeFont: "", isloading: true };
	  case CUSTOM_FONT_SUCCESS:
		return { customeFont: payload, isloading: false };
	  case CUSTOM_FONT_FAIL:
		return { customeFontError: payload, isloading: false };
	  default:
		return state;
	}
  };
  
  export const setCustomeFontFamilyReducer = (
	state = { customeFonts: { first: "'Roboto', sans-serif", second: "'Roboto', sans-serif" } },
	{ type, payload }
  ) => {
	switch (type) {
	  case SET_CUSTOMFONT_REQUEST:
		return { customeFonts: "", isloading: true };
	  case SET_CUSTOMFONT_SUCCESS:
		return { customeFonts: payload, isloading: false };
	  case SET_CUSTOMFONT_FAIL:
		return { customeFontsError: payload, isloading: false };
	  default:
		return state;
	}
  };
  
  export const getFontFamilyReducer = (
	state = { fontFamily: "'Roboto', sans-serif" },
	{ type, payload }
  ) => {
	switch (type) {
	  case GET_FONT_REQUEST:
		return { fontFamilyReducer: "", isloading: true };
	  case GET_FONT_SUCCESS:
		return { fontFamily: payload, isloading: false };
	  case GET_FONT_FAIL:
		return { fontError: payload, isloading: false };
	  default:
		return state;
	}
  };
  