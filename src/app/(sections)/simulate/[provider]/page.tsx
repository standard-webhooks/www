import { Metadata } from "next";
import { CurlCommandForm } from "@/app/(sections)/simulate/[provider]/CurlCommandForm";

export const metadata: Metadata = {
  title: "Simulate Webhook Request",
};

export default function Home() {
  return (
    <main>
      <CurlCommandForm />
    </main>
  );
}
