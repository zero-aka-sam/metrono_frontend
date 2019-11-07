import React from 'react'
import '../promotionItem/promotionItem.css'
import ad from '../../../../assets/promotion.png'

const promotionItem = (props) => (
                  <div key= {props.promotionId} className="promotionItem">
                  <img className="promotion_img" src={ad}></img>
              </div>
)

export default promotionItem;
//                    <p>{props.promotionId}</p>
