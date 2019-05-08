import React, { Component} from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PaymentsCharity extends Component{
    render(){
        return (
            <StripeCheckout
                name="OnSurvey"
                description="$6.00 for 5 email credits + $1.00 donation"
                amount={600}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn btn-lg btn-primary">
                    Add 5 Credits + $1 Donation
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions) (PaymentsCharity);