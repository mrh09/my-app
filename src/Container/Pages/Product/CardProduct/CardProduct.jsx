import React, {Component} from "react";
import Counter from "./Counter"


class CardProduct extends Component {
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://store.ichibot.id/wp-content/uploads/2020/12/20388262_777cd214-c5c1-441e-82f3-887e0052af8e_700_700-300x300.jpeg" alt="product_img"/>
                </div>
                <p className="product-title">Socket Jack Audio 3.5mm 3.5 mm Mono Plug</p>
                <p className="product-price">Rp 2.000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
            </div>
        );    
    }
}

export default CardProduct;