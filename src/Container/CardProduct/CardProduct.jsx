import React, {Component} from "react";


class CardProduct extends Component {
    state = {
        stock: 20,
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        if(this.state.stock > 0){
            this.setState({
                order: this.state.order + 1,
                stock: this.state.stock - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1,
                stock: this.state.stock + 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://store.ichibot.id/wp-content/uploads/2020/12/20388262_777cd214-c5c1-441e-82f3-887e0052af8e_700_700-300x300.jpeg" alt="product_img"/>
                     </div>
                <p className="product-title">Socket Jack Audio 3.5mm 3.5 mm Mono Plug</p>
                <p className="product-price">Rp 2.000</p>
                <p className="stock">Stock : {this.state.stock}</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input className="input" type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );    
    }
}

export default CardProduct;