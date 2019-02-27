import { combineReducers } from "redux";

import pricingReducer from './pricingReducer';
import itemDetailReducer from './itemDetailReducer';
import promoCodeReducer from './promoCodeReducer';
import whitelistDiscountCode from './whitelistDiscountCode';

export default combineReducers({
    pricingData: pricingReducer,
    itemDetail: itemDetailReducer,
    promoCode: promoCodeReducer,
    whitelistDiscountCode: whitelistDiscountCode
})