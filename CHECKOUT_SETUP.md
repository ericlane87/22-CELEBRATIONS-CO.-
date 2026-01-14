# Stripe Checkout setup

This site now uses a local cart (browser storage) and a Stripe Checkout session.

## Required environment variables

Set these in the Stripe server environment:

- `STRIPE_SECRET_KEY` (Stripe secret key)
- `BASE_URL` (public URL for the site, e.g. `https://example.com`)

## Local dev (example)

1) Install server dependencies

```
cd server
npm install
```

2) Start Stripe server

```
BASE_URL=http://localhost:5173 STRIPE_SECRET_KEY=sk_test_... npm start
```

3) Serve the site (any static server)

```
python3 -m http.server 5173
```

4) Update the checkout endpoint (if server is on a different host/port)

Open the browser console and set:

```
window.CHECKOUT_ENDPOINT = "http://localhost:4242/create-checkout-session";
```

## Notes

- Stripe handles shipping and taxes via `shipping_address_collection` and `automatic_tax`.
- Replace the placeholder key when ready.
- For production hosting, deploy the `server/` as a separate Node service or convert to a serverless function.
