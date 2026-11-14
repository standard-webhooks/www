import { Metadata } from "next";

import { VerifyPage } from "@/app/(sections)/verify/[provider]/VerifyForm";

export const metadata: Metadata = {
  title: "Webhook Verifier",
};

export default function Home() {
  return (
    <main>
      <VerifyPage />
    </main>
  );
}
