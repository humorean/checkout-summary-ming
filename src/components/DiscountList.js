import React from 'react';
import { connect } from 'react-redux';

import { fetchWhitelistDiscountCode } from '../actions';

function DiscountList(props){
    let renderList = ()=>
        props.whitelistDiscountCode.map(code=>{
            return <li key={code} className='listItem'>'{code}' has been applied</li>
        });
    return(
        <ul className='discount-list'>
            {renderList()}
        </ul>
    )
}

const mapStateToProps = state =>{
    return{
        whitelistDiscountCode: state.whitelistDiscountCode
    } 
}

export default connect(mapStateToProps,{fetchWhitelistDiscountCode})(DiscountList);

