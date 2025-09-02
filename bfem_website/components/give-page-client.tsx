"use client";

import { useEffect, useState } from "react"; // Import useEffect
// import PaystackPop from "@paystack/inline-js"; // Remove this direct import
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Heart, Landmark, Lock, Repeat } from "lucide-react";

export const metadata = {
  title: "Give | Bible faith evangelical ministries",
  description:
    "Support the mission and ministries of BFEM Church through your generous giving",
};

export default function GivePageClient() {
  const [amount, setAmount] = useState<string>("");
  const [fund, setFund] = useState<string>("general");
  const [frequency, setFrequency] = useState<string>("weekly");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [coverFee, setCoverFee] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [PaystackPop, setPaystackPop] = useState<
    null | typeof import("@paystack/inline-js")
  >(null);

  useEffect(() => {
    // Dynamically import PaystackPop only on the client-side
    async function loadPaystack() {
      if (typeof window !== "undefined") {
        // Double-check if window is defined (extra caution)
        const myModule = await import("@paystack/inline-js");
        setPaystackPop(() => myModule.default); // Assuming it's a default export
      }
    }
    loadPaystack();
  }, []);

  const presetAmounts = ["1000", "5000", "10000", "25000"];

  const handlePayment = async (isRecurring: boolean) => {
    if (!email || !amount) {
      setPaymentStatus("Please provide a valid email and amount.");
      return;
    }

    if (!PaystackPop) {
      setPaymentStatus("Payment library not loaded yet. Please try again.");
      return;
    }

    setIsLoading(true);
    setPaymentStatus(null);

    try {
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount,
          fund,
          frequency: isRecurring ? frequency : "one-time",
          coverFee,
        }),
      });

      const data = await response.json();
      // console.log("This is the data returned from paystack pop: ", data); it returns only access_code and reference

      if (!response.ok) {
        setPaymentStatus(data.error || "Failed to initialize payment.");
        setIsLoading(false);
        return;
      }

      const { access_code } = data;
      const paystack = new PaystackPop(); // Now PaystackPop is guaranteed to be available
      paystack.resumeTransaction(access_code, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSuccess: async (transaction: any) => {
          // Verify transaction on the backend
          const verifyResponse = await fetch("/api/paystack/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reference: transaction.reference }),
          });
          const verifyData = await verifyResponse.json();

          if (verifyData.status === "success") {
            setPaymentStatus(
              "Payment successful! Thank you for your donation."
            );
          } else {
            setPaymentStatus(
              "Payment verification failed. Please contact support."
            );
          }
          setIsLoading(false);
        },
        onCancel: () => {
          setPaymentStatus("Payment cancelled.");
          setIsLoading(false);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
          setPaymentStatus(
            `Payment error: ${error.message || "Unknown error"}`
          );
          setIsLoading(false);
        },
      });
    } catch (error) {
      setPaymentStatus("An error occurred. Please try again.");
      console.log("Error handling payment: ", error);
      setIsLoading(false);
    }
  };

  // ... rest of your component remains the same
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[200px] flex items-center justify-center text-center">
        <div className="container relative z-10 px-4 text-primary">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Give</h1>
          <p className="text-xl max-w-3xl mx-auto text-black">
            Support the mission and ministries of BFEM Church through your
            generous giving
          </p>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Your Generosity Makes a Difference
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your faithful giving supports our church&apos;s ministries,
                outreach efforts, and helps us share the love of Christ with our
                community and beyond.
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            {paymentStatus && (
              <div className="mb-6 text-center text-sm p-4 rounded-lg bg-muted">
                {paymentStatus}
              </div>
            )}

            <Tabs defaultValue="one-time" className="mb-12">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="one-time">One-Time Gift</TabsTrigger>
                <TabsTrigger value="recurring">Recurring Gift</TabsTrigger>
              </TabsList>

              {/* One-Time Gift */}
              <TabsContent value="one-time">
                <Card>
                  <CardHeader>
                    <CardTitle>Make a One-Time Gift</CardTitle>
                    <CardDescription>
                      Your one-time gift will be processed securely through
                      Paystack.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Amount Selection */}
                    <div className="space-y-2">
                      <Label>Select Amount (₦)</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {presetAmounts.map((preset) => (
                          <Button
                            key={preset}
                            variant={amount === preset ? "default" : "outline"}
                            onClick={() => setAmount(preset)}
                            className="h-12"
                          >
                            ₦{preset}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-3">
                        <Label htmlFor="custom-amount">Custom Amount</Label>
                        <div className="relative mt-1">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-muted-foreground">₦</span>
                          </div>
                          <Input
                            id="custom-amount"
                            type="number"
                            className="pl-7"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Fund Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="fund">Select Fund</Label>
                      <RadioGroup
                        value={fund}
                        onValueChange={setFund}
                        defaultValue="general"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">tithe</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="missions" id="missions" />
                          <Label htmlFor="missions">Offering</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="building" id="building" />
                          <Label htmlFor="building">Missionary Funds</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button
                          variant={
                            paymentMethod === "card" ? "default" : "outline"
                          }
                          onClick={() => setPaymentMethod("card")}
                          className="h-20 flex flex-col items-center justify-center"
                        >
                          <CreditCard className="h-6 w-6 mb-1" />
                          <span>Credit/Debit Card</span>
                        </Button>
                        <Button
                          variant={
                            paymentMethod === "bank" ? "default" : "outline"
                          }
                          onClick={() => setPaymentMethod("bank")}
                          className="h-20 flex flex-col items-center justify-center"
                        >
                          <Landmark className="h-6 w-6 mb-1" />
                          <span>Bank Account</span>
                        </Button>
                      </div>
                    </div>

                    {/* Cover Processing Fee */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="cover-fee"
                        checked={coverFee}
                        onCheckedChange={(checked) => setCoverFee(!!checked)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="cover-fee"
                          className="text-sm font-normal"
                        >
                          Cover processing fee (3%)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Adding this amount ensures the church receives your
                          full intended donation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => handlePayment(false)}
                      disabled={isLoading || !email || !amount}
                    >
                      <Lock className="h-4 w-4 mr-2" />{" "}
                      {isLoading ? "Processing..." : "Continue to Payment"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Recurring Gift */}
              <TabsContent value="recurring">
                <Card>
                  <CardHeader>
                    <CardTitle>Set Up Recurring Giving</CardTitle>
                    <CardDescription>
                      Schedule automatic donations to support the church&apos;s
                      ongoing ministries via Paystack.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Amount Selection */}
                    <div className="space-y-2">
                      <Label>Select Amount (₦)</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {presetAmounts.map((preset) => (
                          <Button
                            key={preset}
                            variant={amount === preset ? "default" : "outline"}
                            onClick={() => setAmount(preset)}
                            className="h-12"
                          >
                            ₦{preset}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-3">
                        <Label htmlFor="recurring-amount">Custom Amount</Label>
                        <div className="relative mt-1">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-muted-foreground">₦</span>
                          </div>
                          <Input
                            id="recurring-amount"
                            type="number"
                            className="pl-7"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Frequency Selection */}
                    <div className="space-y-2">
                      <Label>Frequency</Label>
                      <RadioGroup
                        value={frequency}
                        onValueChange={setFrequency}
                        defaultValue="weekly"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weekly" id="weekly" />
                          <Label htmlFor="weekly">Weekly</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="biweekly" id="biweekly" />
                          <Label htmlFor="biweekly">Bi-weekly</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Monthly</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Fund Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="recurring-fund">Select Fund</Label>
                      <RadioGroup
                        value={fund}
                        onValueChange={setFund}
                        defaultValue="general"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="general"
                            id="recurring-general"
                          />
                          <Label htmlFor="recurring-general">
                            General Fund
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="missions"
                            id="recurring-missions"
                          />
                          <Label htmlFor="recurring-missions">Missions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="building"
                            id="recurring-building"
                          />
                          <Label htmlFor="recurring-building">
                            Building Fund
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button
                          variant={
                            paymentMethod === "card" ? "default" : "outline"
                          }
                          onClick={() => setPaymentMethod("card")}
                          className="h-20 flex flex-col items-center justify-center"
                        >
                          <CreditCard className="h-6 w-6 mb-1" />
                          <span>Credit/Debit Card</span>
                        </Button>
                        <Button
                          variant={
                            paymentMethod === "bank" ? "default" : "outline"
                          }
                          onClick={() => setPaymentMethod("bank")}
                          className="h-20 flex flex-col items-center justify-center"
                        >
                          <Landmark className="h-6 w-6 mb-1" />
                          <span>Bank Account</span>
                        </Button>
                      </div>
                    </div>

                    {/* Cover Processing Fee */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="recurring-cover-fee"
                        checked={coverFee}
                        onCheckedChange={(checked) => setCoverFee(!!checked)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="recurring-cover-fee"
                          className="text-sm font-normal"
                        >
                          Cover processing fee (3%)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Adding this amount ensures the church receives your
                          full intended donation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => handlePayment(true)}
                      disabled={isLoading || !email || !amount}
                    >
                      <Repeat className="h-4 w-4 mr-2" />{" "}
                      {isLoading ? "Processing..." : "Set Up Recurring Gift"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why We Give</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your generosity enables us to fulfill our mission and make a
              difference in our community and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-2 rounded-full bg-primary/10">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Supporting Ministries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Your gifts support our children&apos;s, youth, adult, and
                  senior ministries, helping people of all ages grow in their
                  faith.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-2 rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                    <path d="M12 2a4 4 0 0 0 0 8 4 4 0 0 0 0-8" />
                    <path d="M12 14a4 4 0 0 0 0 8 4 4 0 0 0 0-8" />
                    <path d="M6 6a4 4 0 0 0 0 8 4 4 0 0 0 0-8" />
                    <path d="M18 6a4 4 0 0 0 0 8 4 4 0 0 0 0-8" />
                  </svg>
                </div>
                <CardTitle>Community Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We serve our local community through food pantries, homeless
                  ministries, counseling services, and other outreach programs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-2 rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <CardTitle>Global Missions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Your giving supports missionaries and humanitarian efforts
                  around the world, sharing God&apos;s love with those in need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Other Ways to Give
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Direct Transfer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can make a transfer from your bank app or a POS machine
                    to the following account number
                  </p>
                  <p className="mt-2">
                    2008200453,
                    <br />
                    First Bank Plc,
                    <br />
                    Bible Faith Evangelical Ministries
                  </p>
                  <span className="text-muted-foreground"> or</span>
                  <p className="mt-2">
                    0033998542
                    <br />
                    GTB,
                    <br />
                    OLANUSI TOLULOPE ABIODUN
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>In-Person Giving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can give during our Sunday services by placing your gift
                    in the offering boxes located in the sanctuary.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    How is my donation used?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your donations support our church&apos;s ministries,
                    outreach programs, missions, staff salaries, building
                    maintenance, and operational expenses. We are committed to
                    financial transparency and good stewardship.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Is online giving secure?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we use Paystack’s industry-standard encryption and
                    security protocols to ensure your financial information is
                    protected. Your information is never stored on our servers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Can I designate my gift to a specific ministry?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can designate your gift to a specific fund or
                    ministry by selecting the appropriate option when giving
                    online or by noting it on your check memo line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Giving?</h2>
            <p className="text-muted-foreground mb-6">
              Our finance team is happy to help with any questions you may have
              about donations, tax statements, or other giving-related matters.
            </p>
            <a
              className="text-base font-normal leading-normal min-w-40"
              href="mailto:bfem_ministries@yahoo.com"
            >
              <Button size="lg">Contact Us</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
