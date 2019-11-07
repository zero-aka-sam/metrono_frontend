import React from 'react'
import PromotionItem from './promotionItem/promotionItem'
import '../promotionList/promotionItem/promotionItem.css'


const promotionList= (props)=> {
    console.log(props)
    const promotions = props.promotion.map(promotion=>{
        return (
            <PromotionItem key={promotion._id} promotionId={promotion._id}/>
            )
    })
    return <div className="hero_container">{promotions}</div>
}

export default promotionList;
