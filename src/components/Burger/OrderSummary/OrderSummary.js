import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    componentWillUpdate(){
        console.log('[Order Summary]');
    }

    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
            return <li key={igKey}>
                     <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                   </li>
            });

        return(
            <Aux>
            <div>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price : $ {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </div>
        </Aux>
        );
    }
} 

export default OrderSummary;