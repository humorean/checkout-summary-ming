import React from 'react';
import { connect } from 'react-redux';

import { fetchItemDetail } from '../actions'

class ItemDetail extends React.Component{
    state={
        expanded:false
    }
    seeItemRef = React.createRef();
    itemDetailRef = React.createRef();
    seeMoreRef =React.createRef();

    componentDidMount(){
        this.props.fetchItemDetail();
        // when user click on see-item, it toggles component state and class for itemDetail then re-render
        // let _seeItemRef = this.seeItemRef.current;
        this.seeItemRef.current.addEventListener('click',event=>{
            this.seeItemRef.current.style.border='1px dotted black';
            this.itemDetailRef.current.classList.toggle('hidden');
            this.seeMoreRef.current.classList.toggle('less');
            if(this.state.expanded===false){
                this.setState({expanded:true});
            }else{
                this.setState({expanded:false});
            }
        })
        document.addEventListener('click', event=>{
            if (event.target.closest('.see-item')) return;
            // ouside of see-item
                this.seeItemRef.current.style.border='1px dotted white';  
        },false)
    }
    
    renderText(){
        let text = this.state.expanded===false?'See item detail':'Hide item detail';
        return text;
    }
    render(){
        return(
            <div className='item-detail-container'>
                <div className='see-item' ref={this.seeItemRef}>
                    <span className='under-line'>{this.renderText()}</span>
                    <span className='see-more' ref={this.seeMoreRef}></span>
                </div>    
                <div className='item-detail hidden' ref={this.itemDetailRef}>
                    <div className=' grid-container-3'>
                        <img className='item-image col-1' src={this.props.itemDetail.imageUrl}></img>
                        <div className='col-2-3'>
                        <p className='item-name'>{this.props.itemDetail.item_name}</p>
                        <p className='grid-container-2 product-price'>
                            <span className='col-1'>${this.props.itemDetail.savingPrice}</span>
                            <span className='col-2'>Qty:{this.props.itemDetail.quantity}</span>
                        </p>
                        <p className='original-price'>${this.props.itemDetail.originalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{itemDetail:state.itemDetail}
}

export default connect(mapStateToProps,{fetchItemDetail})(ItemDetail);