# Stripe Integration TODO

## Values to Replace

The following values are placeholders and must be updated before going live.

**Files containing placeholders:**
- [src/app/api/checkout/route.ts](src/app/quilts.ts)
- [.env.local](.env.local)

| Field | Current Value | What to Set |
|-------|--------------|-------------|
| mode | payment | Set to "payment" for one-time charges (quilts) or "subscription" for recurring billing. `payment` is correct for one-off quilt sales. |
| success_url | `${origin}/art?success=true&session_id={CHECKOUT_SESSION_ID}` | Your actual post-payment success page URL. Keep the `{CHECKOUT_SESSION_ID}` template. Currently sends buyers back to `/art` — consider a dedicated thank-you page. |
| cancel_url | `${origin}/art` | Your actual cancel/return page URL. `/art` is likely fine. |
| `quilts.orange.id` | price_1UOJlUDmpUhmwBg08if9PgKq | ✅ Set (Orange quilt, product prod_VKpzlTaCfa3Dcn). |
| `quilts.light.id` | price_1UOJlUDmpUhmwBg09rSbxiH2 | ✅ Set (Light quilt, product prod_VKq1md2hQrryok). |
| STRIPE_SECRET_KEY | sk_test_... | Your secret key from https://dashboard.stripe.com/test/apikeys |

## Configured Parameters

These parameters were configured in Checkout Studio and are already set correctly.

**Files containing these parameters:**
- [src/app/api/checkout/route.ts](src/app/api/checkout/route.ts)

| Parameter | Value |
|-----------|-------|
| ui_mode | hosted_page (stripe SDK 23.0.0 installed; versions below 21.0.0 would need `hosted`) |
| billing_address_collection | auto |
| phone_number_collection | `{ enabled: false }` |
| automatic_tax | `{ enabled: false }` |
| allow_promotion_codes | false |
| payment_method_collection | always — **omitted**, because it only applies when mode is `subscription` |
| submit_type | auto |
| shipping_address_collection | `{ allowed_countries: ["US"] }` |
| name_collection | `{ individual: { enabled: true } }` |
| integration_identifier | hosted_web_0001 |
| origin_context | web |

## Setup

1. **Dependency:** `stripe` (^23.0.0) was added to `package.json`.
2. **Environment variables:** set `STRIPE_SECRET_KEY` in `.env.local` (already gitignored). No publishable key is needed for hosted Checkout. Add the same variable in your Vercel project settings (Production + Preview) before deploying.
3. **Products:** create a Product for each quilt in the Dashboard (https://dashboard.stripe.com/products) and paste its ID into `quilts` in src/app/quilts.ts. A Product ID (`prod_...`) uses the `amount` set in code; a Price ID (`price_...`) uses the price saved in Stripe.

## Project structure

```
src/app/api/checkout/route.ts      # NEW — creates a Checkout Session and redirects to Stripe
src/app/quilts.ts                  # NEW — quilt details, Stripe IDs, sold flags
src/app/(frontend)/art/page.tsx    # renders quilts; links to /api/checkout?item=...
```

## How it works

1. Visitor clicks a quilt on `/art` → `GET /api/checkout?item=orange` (or `light`).
2. The route looks up the quilt's Product/Price ID, creates a Checkout Session, and 303-redirects to the Stripe-hosted page.
3. Buyer enters name, US shipping address, and payment.
4. Stripe redirects to `success_url` (or `cancel_url` if they back out).

To add a quilt: add an entry to `quilts` in src/app/quilts.ts; the page lists it automatically.

## Testing

- Use test-mode keys (`sk_test_...`) and test-mode Price IDs.
- Card `4242 4242 4242 4242`, any future expiry, any CVC, any ZIP → success.
- Card `4000 0000 0000 9995` → declined. More: https://docs.stripe.com/testing
- Run `npm run dev`, visit http://localhost:3000/art, click a quilt.

## Next steps

- **Marking a quilt sold:** set `sold: true` for it in [src/app/quilts.ts](src/app/quilts.ts) and deploy. The page shows SOLD and its checkout link stops working. Optionally also archive the price in Stripe. To automate this, add a webhook for `checkout.session.completed`.
- **Fulfillment:** you'll get Dashboard + email notifications for each payment; shipping address is on the payment in the Dashboard.
- **Success page:** show a "thanks!" message when `?success=true` is present, or create a dedicated page.
- **Go live:** swap to live keys and live Price IDs.

## Resources

- https://support.stripe.com
- https://docs.stripe.com/mcp
