// app/api/paystack/webhook/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  if (payload.event === "charge.success") {
    const { reference, amount, metadata } = payload.data;
    // Save donation to your database (e.g., Strapi)
    console.log("Successful donation:", { reference, amount: amount / 100, metadata });
    // TODO: Save to Strapi or database
  }
  return NextResponse.json({ received: true });
}