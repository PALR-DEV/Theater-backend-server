import Stripe from "stripe";
const stripe = new Stripe('sk_test_51QyWMfQIfffWksP3k1jEsbWB6cSxC7FAEakfOTsyaPwnWocNPGCPCWYI97oy2UHhVVEx806MQvkzxDz5NAPz4x7d00spAzFWXr');



async function createPaymentIntent(amount) {
    const amountInCents = Math.round(amount * 100);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: 'usd',
        payment_method_types: ['card'],
    })

    return {
        clientSecret: paymentIntent.client_secret
    };

}




export { createPaymentIntent };