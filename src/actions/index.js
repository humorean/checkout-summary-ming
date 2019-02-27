import { getPrice } from '../api/mock';
import { getItemDetail } from '../api/mock';
import { getPromoCode } from '../api/mock';

export const fetchPrice = ()=> async (dispatch,setState)=>{
        const res = await getPrice();
        // With redux thunk we can manually execute the dispatch function
        dispatch({
            type: 'FETCH_PRICE',
            payload: res
        })
    }

export const addDiscount = (discountPercent) =>  (dispatch, setState)=>{
    dispatch({
        type: 'ADD_DISCOUNT',
        payload: discountPercent
    })
}

export const fetchWhitelistDiscountCode = ()=> (dispatch, setState)=>{
    dispatch({
        type: 'FETCH_WHITELISTDISCOUNTCODE',
        payload: []
    })
}
export const addWhitelistDiscountCode = (code)=> (dispatch, setState)=>{
    console.log(code);
    dispatch({
        type: 'ADD_WHITELISTDISCOUNTCODE',
        payload: code
    })
}
export const removeWhitelistDiscountCode = ()=> (dispatch, setState)=>{
    dispatch({
        type: 'REMOVE_WHITELISTDISCOUNTCODE',
        payload: 123
    })
}

export const fetchItemDetail = ()=> async (dispatch, setState)=>{
    const res = await getItemDetail();
    dispatch({
        type: 'FETCH_ITEMDETAIL',
        payload: res
    })
}

export const checkCode = ()=> async (dispatch, setState)=>{
    const res = await getPromoCode();
    dispatch({
        type: 'FETCH_PROMOCODE',
        payload: res
    })

}