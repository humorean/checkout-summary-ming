export default (state=[], action)=>{
    switch(action.type){
        case "FETCH_PROMOCODE":
            // console.log('in FETCH_PRICE case: '+ action.type)
            return action.payload;
        default : 
            // console.log('NOT in FETCH_PRICE case:' + action.type)
            return state
    }
}