import React from 'react';
import "./css/Footer.css";
import Payment from './Payments';
import PaymentCharity from './PaymentsCharity';
import './css/PayOption.css'

const PayOption = () => {
    return(
        <div className="box char bg-light">
            <div className="Button">
                <a role="button" href='/surveys' className="btn btn-secondary">Back to Dashboard</a>
            </div>

            <h1 className="donateText text-center">Would you like to donate $1 to charity?</h1>
            <div className="Button text-center">
                <Payment/>
            </div>
            <div className="Button text-center">
                <PaymentCharity/>
            </div>

        </div>
    )
};

export default PayOption;
