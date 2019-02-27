import React from 'react';
import { connect } from 'react-redux';

import DiscountList from './DiscountList';
import { checkCode } from '../actions'
import { addDiscount } from '../actions';
import { fetchWhitelistDiscountCode } from '../actions';
import { addWhitelistDiscountCode } from '../actions';

class PromoCode extends React.Component{
    state={
        expanded:false
    }
    promoInputRef = React.createRef();
    promoCodeToggleRef = React.createRef();
    promoteBtnRef = React.createRef();
    promoCodeInputRef = React.createRef();
    expandApply = React.createRef();

    componentDidMount(){
        this.props.checkCode();
        this.props.fetchWhitelistDiscountCode();
        this.promoCodeToggleRef.current.addEventListener('click',event=>{
            this.promoCodeToggleRef.current.style.border='1px dotted grey';
            this.expandApply.current.classList.toggle('less');
            this.promoInputRef.current.classList.toggle('hidden');
            if(this.state.expanded===false){
                this.setState({expanded:true});
            }else{
                this.setState({expanded:false});
            }
        });

        // When apply btn clicked, check if the entered code is in the list of promo code array and if code already applied
        this.promoteBtnRef.current.addEventListener('click',event=>{
            let codeInput = this.promoCodeInputRef.current.value;
            if(this.props.code.hasOwnProperty(codeInput) && this.props.whitelistDiscountCode.indexOf(codeInput)===-1){
                // if code matches, then reduce the subtotal by correlated code's discount percentage
                this.props.addDiscount(this.props.code[codeInput]);
                // add code to whitelist
                this.props.addWhitelistDiscountCode(codeInput);
                this.promoCodeInputRef.current.value='';
            }else{
                alert(`${codeInput} is not invalid or has already been applied`);
            }
        })

        document.addEventListener('click', event=>{
            if (event.target.closest('.promo-code-toggle')) return;
            // ouside of show-hide-text
                this.promoCodeToggleRef.current.style.border='1px dotted white';  
        },false)
    }

    renderText(){
        let text = this.state.expanded===false?'Apply promo code':'Hide promo code';
        return text;
    }
    
    render(){
        return(
            <div className='promo-code-container'>
                <div className='promo-code-toggle' ref={this.promoCodeToggleRef}>
                    <span className='under-line'>{this.renderText()} </span><span className='see-more' ref={this.expandApply}></span>
                </div>
                <div className='promo-input hidden' ref={this.promoInputRef}>
                    <p className='promo-code-text'>Promo code</p>
                    <input type='text' className='promo-code-input' ref={this.promoCodeInputRef}></input>
                    <button className='apply-btn' ref={this.promoteBtnRef}>Apply</button>
                </div>
                <DiscountList />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        code:state.promoCode,
        whitelistDiscountCode:state.whitelistDiscountCode
    }
}

export default connect(mapStateToProps,{checkCode, addDiscount,fetchWhitelistDiscountCode,addWhitelistDiscountCode})(PromoCode);