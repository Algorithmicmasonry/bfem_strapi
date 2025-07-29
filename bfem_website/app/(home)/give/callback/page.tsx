import { redirect } from "next/navigation";

export default function CallbackPage({ searchParams }: { searchParams: { reference: string } }) {
  // Redirect to the give page with a success message or handle verification
  redirect(`/give?reference=${searchParams.reference}`);
}