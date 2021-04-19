import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css"

class Product extends Component {
    state = {
        stock: 20,
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://store.ichibot.id/wp-content/uploads/2020/01/cropped-Logo-3-1.png"/>
                    </div>
                    <div className="troley">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3144/3144456.svg"/>
                    <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
        );    
    }
}

export default Product;