import { combineReducers } from "redux";
import accounts from './reducers/accountsReducer';

const rootReducer = combineReducers({
    accounts,
})

export default rootReducer;