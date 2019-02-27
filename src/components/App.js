import React from 'react';

import Summary from './Summary'
import ItemDetail from './ItemDetail'
import PromoCode from './PromoCode'

class App extends React.Component{
    render(){
        return(
            <div className='main-app'>
                <div className='checkout-summary'>
                    <Summary />
                    <ItemDetail />
                    <PromoCode />
                </div>
            </div>
        ) 
    }
}

export default App;

