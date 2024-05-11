import { NextFunction, Request, Response } from "express";
import { stripe_key } from "../config/enviorment";
import { StripeCheckoutInterface } from "./stripeTypes";
import { ProductInterface } from "../models/productModel";

const stripe = require('stripe')(stripe_key);

interface ProductBasket extends ProductInterface {
	amount: number;
}

async function createCheckoutSession(req: Request, res: Response, next: NextFunction) {
    const origin = req.headers.origin;
    const success_url = `${origin}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url =`${origin}/cancel`;
    const products: ProductBasket[] = req.body;

    // Using URLSearchParams to build the request body
    let params = new URLSearchParams();
    params.append('success_url', success_url);
    params.append('cancel_url', cancel_url);
    params.append('mode', 'payment');

    products.forEach((product, index) => {
        params.append(`line_items[${index}][quantity]`, product.amount.toString());
        params.append(`line_items[${index}][price]`, product.stripePrice);
    });

    const stripeHeaders: HeadersInit = {
        'Authorization': `Bearer ${stripe_key}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    try {
        const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
            method: 'POST',
            body: params, // This should now be correctly formatted
            headers: stripeHeaders
        });

        const data: StripeCheckoutInterface = await response.json();
        console.log(data);
        return res.json({ url: data.url }); // Simplified response handling
    } catch (error) {
        next(error);
    }
}

export {
    createCheckoutSession
}