export default (state=[], action)=>{
    switch(action.type){
        case "FETCH_WHITELISTDISCOUNTCODE":
            console.log(action.payload);
            return action.payload;
        case "ADD_WHITELISTDISCOUNTCODE":
            return [...state, action.payload];
        case "REMOVE_WHITELISTDISCOUNTCODE":
            return action.payload
        default : 
            return state
    }
}