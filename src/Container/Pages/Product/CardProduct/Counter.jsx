import React, { Component } from 'react'

class Counter extends Component{

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
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input className="input" type="text" value={this.state.order}/>
                <button className="plus" onClick={this.handlePlus}>+</button>
                <p className="stock">Stock : {this.state.stock}</p>
            </div>   
        )
    }
}

export default Counter;