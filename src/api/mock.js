const data = {
    pricing:{
        subtotal:102.96,
        saving: 3.85,
        tax: 8.92,
        total: 108.03,
        zip: 94577
    },
    itemDetail:{
        item_name: 'Best Office High Back Recliner Office Chair Computer Racing Gaming Chair',
        originalPrice: 102.96,
        savingPrice: 99.11,
        quantity: 1,
        imageUrl:'https://i5.walmartimages.com/asr/fa6b57c3-9e8a-44d0-aeaa-533c5248f0f1_1.5ac344a30d72d7ac817dc79eec949260.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
    },
    // assuming promoCodes will change from time to time with different code for different % of discount:
    // in our case we have DISCOUNT with 10%:
    promoCodes: {'DISCOUNT': 0.1}
}

const feed = (delay=1000, obj)=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(obj);
        },delay)
    })
}

export const getPrice = ()=> feed(1000,data.pricing);
export const getItemDetail = ()=> feed(1000,data.itemDetail);
export const getPromoCode = ()=> feed(1000,data.promoCodes);