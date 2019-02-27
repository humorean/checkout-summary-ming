export default (state=[], action)=>{
    switch(action.type){
        case "FETCH_PRICE":
            return action.payload;
        case "ADD_DISCOUNT":
            let discountedPrice = (state.subtotal*(1-action.payload)).toFixed(2);
            // Assuming tax and fees are not affected by discount
            let discountedTotal = (discountedPrice-state.saving+state.tax).toFixed(2);
            return {...state, subtotal:discountedPrice, total:discountedTotal}
        default : 
            return state
    }
}