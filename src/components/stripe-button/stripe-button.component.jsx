import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_OsA0VV7Bzyagl6vqBPTvx8i000WdSMJwKw';
	
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}
	
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Ecommerce'
			image='http://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			billingAddress
			shippingAddress
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;