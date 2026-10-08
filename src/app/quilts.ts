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
  // $1 test item (product prod_UJ6fh9EZdBgbPX). Not listed on the page;
  // buy it at /api/checkout?item=test. Remove when done testing.
  test: {
    name: "Test",
    image: "/coaster-4.png",
    price: "$1",
    size: "",
    id: "price_1UOJlVDmpUhmwBg0qGTFkARP",
    amount: 100,
    sold: false,
    hidden: true,
  },
};

export type QuiltKey = keyof typeof quilts;
