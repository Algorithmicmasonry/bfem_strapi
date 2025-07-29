import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, amount, fund, frequency, coverFee } = await request.json();

    // Validate inputs
    if (!email || !amount || !fund) {
      return NextResponse.json(
        { error: "Missing required fields: email, amount, and fund are required" },
        { status: 400 }
      );
    }

    // Convert amount to kobo (Paystack expects amount in smallest currency unit)
    const amountInKobo = Math.round(Number(amount) * 100);
    const adjustedAmount = coverFee ? Math.round(amountInKobo * 1.03) : amountInKobo; // Add 3% fee if coverFee is true

    // Prepare metadata
    const metadata = {
      fund,
      frequency: frequency || "one-time",
      coverFee: coverFee || false,
    };

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({
        email,
        amount: adjustedAmount,
        currency: "NGN",
        callback_url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/give/callback`,
        metadata,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.status) {
      return NextResponse.json(
        { error: data.message || "Failed to initialize transaction" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      access_code: data.data.access_code,
      reference: data.data.reference,
    });
  } catch (error) {
    console.error("Paystack initialization error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}