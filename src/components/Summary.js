import React from 'react';
import { connect } from 'react-redux';

import Tooltip from './Tooltip';
import { fetchPrice } from '../actions';
// subtotal, pickup and est tax all need data
class Summary extends React.Component{
    pickupSavingRef = React.createRef();
    tooltipRef = React.createRef();
    componentDidMount(){
        this.props.fetchPrice();
        this.pickupSavingRef.current.addEventListener('click',event=>{
            this.tooltipRef.current.classList.toggle('hidden');
            this.pickupSavingRef.current.style.border='1px dotted black';
        });

        document.addEventListener('click', event=>{
            if (event.target.closest('.tooltip-warpper') || event.target.closest('.pickup-saving')) return;
            // ouside of tooltip
            if(!this.tooltipRef.current.classList.contains('hidden')){
                this.tooltipRef.current.classList.add('hidden');  
            } 
        },false)

        document.addEventListener('click', event=>{
            if (event.target.closest('.pickup-saving')) return;
            // ouside of pickup-saving
                this.pickupSavingRef.current.style.border='1px dotted white';  
        },false)
    }
    render(){
        return(
            <div className='summary'>
                <div className='summary-detail grid-container-2'>
                    <p className='grid-item col-1'>Subtotal</p> 
                    <p className='grid-item col-2'>${this.props.prices.subtotal}</p>
                    <div className='grid-item col-1'>
                        <p className='pickup-saving under-line' ref={this.pickupSavingRef}>Pickup savings</p>
                        <div className='hidden tooltip-warpper' ref={this.tooltipRef}>
                            <Tooltip />
                        </div>
                    </div>
                    <p className='discount grid-item col-2'>${this.props.prices.saving}</p>
                    <p className='grid-item col-1 tax'>Est. taxes & fees</p>
                    <p className='grid-item col-2'> ${this.props.prices.tax}</p>
                    <p className='grid-item col-1 zipcode'>(Base on {this.props.prices.zip})</p>
                    
                </div>
                <div className='summary-total'>
                    <h2 className='grid-container-2'>
                        <span className='col-1'>Est. total</span>
                        <span className='est-total col-2'> ${this.props.prices.total}</span> 
                    </h2>

                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {prices:state.pricingData}
}

export default connect(mapStateToProps,{fetchPrice})(Summary);