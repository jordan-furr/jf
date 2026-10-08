// Quilts for sale. Set `sold: true` to show SOLD and disable checkout.
// `id` is a Stripe Price ID (price_...) or Product ID (prod_...).
// With a Product ID, `amount` (in cents) is charged.
export const quilts = {
  orange: {
    name: "Orange",
    image: "/boat.JPG",
    price: "$180",
    size: '23"x12.5"',
    id: "price_1UOJlUDmpUhmwBg08if9PgKq",
    amount: 18000,
    sold: false,
  },
  light: {
    name: "Light",
    image: "/triangle.JPG",
    price: "$150",
    size: '21"x11"',
    id: "price_1UOJlUDmpUhmwBg09rSbxiH2",
    amount: 15000,
    sold: false,
  },
};

export type QuiltKey = keyof typeof quilts;
