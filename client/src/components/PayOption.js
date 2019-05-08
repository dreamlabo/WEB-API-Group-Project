import React from 'react';
import "./css/Footer.css";
import Payment from './Payments';
import PaymentCharity from './PaymentsCharity';

const PayOption = () => {
    return(
        <div className="box bg-light text-center">
            <h1 className="display-3">Would you like to donate $1 to charity</h1>
            <Payment/>
            <PaymentCharity/>
        </div>
    )
};

export default PayOption;
