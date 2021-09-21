import { combineReducers } from "redux";
import { emailData } from "../../data/EmailData";

const emailReducer = (state = emailData, action) => {
  switch (action.type) {
    case "Flagged":
      return state + 1;
    case "UNFlagged":
      return state - 1;
    default:
      return state;
  }
};

const filterReducer = (state = emailData, action) => {
  switch (action.type) {
    case "Filter":
      return action.payload;
    case "Flag":
      const updateStateByFlag = state.map((item) => {
        if (action.payload.id === item.id) {
          return { ...item, flag: !action.payload.flag };
        } else {
          return item;
        }
      });
      return updateStateByFlag;
    case "Read":
      const updateStateByRead = state.map((item) => {
        if (action.payload.id === item.id) {
          return { ...item, read: !action.payload.read };
        } else {
          return item;
        }
      });
      return updateStateByRead;
    case "Delete":
      const updateStateByDelete = state.filter(
        (item) => item.id !== action.payload
      );
      return updateStateByDelete;
    default:
      return state;
  }
};

const allReducers = combineReducers({ emailReducer, filterReducer });
export default allReducers;
