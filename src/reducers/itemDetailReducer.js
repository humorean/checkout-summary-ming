export default (state=[], action)=>{
    switch(action.type){
        case "FETCH_ITEMDETAIL":
            // console.log('in FETCH_PRICE case: '+ action.type)
            // console.log(action.payload);
            return action.payload;
        default : 
            // console.log('NOT in FETCH_PRICE case:' + action.type)
            return state
    }
}