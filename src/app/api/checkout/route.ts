import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { quilts, QuiltKey } from "../../quilts";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("item") ?? "";
  const item = Object.hasOwn(quilts, key) ? quilts[key as QuiltKey] : undefined;
  if (!item || item.sold) {
    return NextResponse.redirect(new URL("/art", req.url), 303);
  }
  const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = item.id.startsWith("price_")
    ? { price: item.id, quantity: 1 }
    : {
        price_data: { currency: "usd", product: item.id, unit_amount: item.amount },
        quantity: 1,
      };

  const origin = req.nextUrl.origin;
  const session = await stripe.checkout.sessions.create({
    ui_mode: "hosted_page",
    mode: "payment",
    billing_address_collection: "auto",
    phone_number_collection: { enabled: false },
    automatic_tax: { enabled: false },
    allow_promotion_codes: false,
    submit_type: "auto",
    shipping_address_collection: { allowed_countries: ["US"] },
    name_collection: { individual: { enabled: true } },
    integration_identifier: "hosted_web_0001",
    origin_context: "web",
    branding_settings: { button_color: "#35C6FF" },
    success_url: `${origin}/thanks`,
    cancel_url: `${origin}/art`,
    line_items: [lineItem],
  });

  return NextResponse.redirect(session.url!, 303);
}
