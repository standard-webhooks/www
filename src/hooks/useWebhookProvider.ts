import { WEBHOOK_PROVIDERS } from "@/utils/providers/index";
import { useParams } from "next/navigation";

const STANDARD = WEBHOOK_PROVIDERS[0];

export const useWebhookProvider = () => {
  const { provider } = useParams();

  if (!provider || provider === "" || (typeof provider !== "string")) {
    return STANDARD;
  }

  return (
    WEBHOOK_PROVIDERS.find(
      (c) => c.provider.toLocaleLowerCase() === provider.toLocaleLowerCase()
    ) || STANDARD
  );
};
