import { Webhook } from "svix";
import { IFormConfig, IWebhookVerificationForm } from "../providers";
import {
  Box,
  Code,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ICurlCommandForm } from "@/app/(sections)/simulate/[provider]/CurlCommandForm";
import { FormCodeBlock } from "@/components/FormCodeBlock";
import { TextInput } from "@/components/TextInput";
import { PayloadEditor } from "@/components/PayloadEditor";
import { SecretInput } from "@/components/SecretInput";
import { getCurrentTimestamp } from "../curl";
import { RepeatClockIcon } from "@chakra-ui/icons";
import * as base64 from "@stablelib/base64";

const standardSignature = (data: IWebhookVerificationForm) => {
  const wh = new Webhook(data.secret);
  const timestampAsDate = new Date(parseInt(data.webhookTimestamp) * 1000);
  const generatedSignature = wh.sign(
    data.webhookId,
    timestampAsDate,
    data.rawPayload
  );

  return generatedSignature;
};

export const validateBase64 = (value: string) => {
  try {
    let secret = value;
    if (value.startsWith("whsec_")) {
      secret = value.substring("whsec_".length);
    }
    base64.decode(secret);
    return true;
  } catch {
    return false;
  }
};

// TODO: remove anys
export const StandardVerificationForm = (props: {
  control: any;
  errors: any;
}) => {
  const { control, errors } = props;
  return (
    <>
      <Box>
        <Heading as="h3" size="md" mb={2} p={0}>
          Generate signature
        </Heading>
        <Text fontSize="sm">
          Standard webhooks signatures are generated using HMAC with SHA-256.
        </Text>
        <Text fontSize="sm">
          The signed content is composed by concatenating the id, timestamp and
          payload, separated by the full-stop character (<Code>.</Code>){" "}
        </Text>
      </Box>
      <Stack border="1px solid" borderColor="gray.100" p={4} mt={0}>
        <FormCodeBlock>HMACSHA256(</FormCodeBlock>

        <HStack pl={4}>
          <TextInput
            name="webhookId"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[^\s]+$/,
                message: "Webhook id contains invalid characters",
              },
            }}
            placeholder="webhook-id"
            tooltip="The unique message identifier for the webhook message."
            errors={errors}
          />
          <FormCodeBlock>{" + '.' + "}</FormCodeBlock>
        </HStack>

        <HStack pl={4}>
          <TextInput
            name="webhookTimestamp"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[0-9]*$/,
                message: "Webhook timestamp must be numeric",
              },
            }}
            placeholder="webhook-timestamp"
            tooltip="Timestamp in seconds since epoch"
            errors={errors}
          />
          <FormCodeBlock>{" + '.' + "}</FormCodeBlock>
        </HStack>

        <HStack px={4}>
          <Box w="100%" maxWidth="60rem">
            <PayloadEditor name="rawPayload" control={control} />
          </Box>
          <FormCodeBlock>,</FormCodeBlock>
        </HStack>

        <HStack pl={4}>
          <SecretInput
            name="secret"
            control={control}
            errors={errors}
            validate={validateBase64}
          />
        </HStack>
        <FormCodeBlock>)</FormCodeBlock>
      </Stack>
    </>
  );
};

export const SvixVerificationForm = (props: { control: any; errors: any }) => {
  const { control, errors } = props;
  return (
    <>
      <Box>
        <Heading as="h3" size="md" mb={2} p={0}>
          Generate signature
        </Heading>
        <Text fontSize="sm">
          Standard webhooks signatures are generated using HMAC with SHA-256.
        </Text>
        <Text fontSize="sm">
          The signed content is composed by concatenating the id, timestamp and
          payload, separated by the full-stop character (<Code>.</Code>){" "}
        </Text>
      </Box>
      <Stack spacing={2} border="1px solid" borderColor="gray.100" p={4} mt={0}>
        <FormCodeBlock>HMACSHA256(</FormCodeBlock>

        <HStack pl={4}>
          <TextInput
            name="webhookId"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[^\s]+$/,
                message: "Webhook id contains invalid characters",
              },
            }}
            placeholder="svix-id"
            tooltip="The unique message identifier for the webhook message."
            errors={errors}
          />
          <FormCodeBlock>{" + '.' + "}</FormCodeBlock>
        </HStack>

        <HStack pl={4}>
          <TextInput
            name="webhookTimestamp"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[0-9]*$/,
                message: "Webhook timestamp must be numeric",
              },
            }}
            placeholder="svix-timestamp"
            tooltip="Timestamp in seconds since epoch"
            errors={errors}
          />
          <FormCodeBlock>{" + '.' + "}</FormCodeBlock>
        </HStack>

        <HStack px={4}>
          <Box w="100%" maxWidth="60em">
            <PayloadEditor name="rawPayload" control={control} />
          </Box>
          <FormCodeBlock>,</FormCodeBlock>
        </HStack>

        <HStack pl={4}>
          <SecretInput
            name="secret"
            control={control}
            errors={errors}
            validate={validateBase64}
          />
        </HStack>
        <FormCodeBlock>)</FormCodeBlock>
      </Stack>
    </>
  );
};

const StandardRequestSignatureForm = (props: {
  control: any;
  errors: any;
  setValue: any;
}) => {
  const { control, errors, setValue } = props;
  return (
    <Stack spacing={2}>
      <FormCodeBlock fontSize={14}>HMACSHA256(</FormCodeBlock>

      <HStack pl={4}>
        <TextInput
          name="webhookId"
          control={control}
          w={{ base: "15rem", md: "15rem" }}
          rules={{
            required: true,
            pattern: {
              value: /^[^\s]+$/,
              message: "Webhook id contains invalid characters",
            },
          }}
          placeholder="webhook-id"
          errors={errors}
        />
        <FormCodeBlock fontSize={14}>+ '.' +</FormCodeBlock>
      </HStack>

      <HStack pl={4}>
        <TextInput
          name="webhookTimestamp"
          control={control}
          w={{ base: "15rem", md: "15rem" }}
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]*$/,
              message: "Webhook timestamp must be numeric",
            },
          }}
          placeholder="webhook-timestamp"
          errors={errors}
          actionButton={
            <Tooltip label="Refresh timestamp" fontSize="sm">
              <IconButton
                variant="ghost"
                size="sm"
                icon={<RepeatClockIcon />}
                aria-label="Refresh timestamp"
                onClick={() => {
                  setValue("webhookTimestamp", getCurrentTimestamp());
                }}
              >
                Refresh
              </IconButton>
            </Tooltip>
          }
        />
      </HStack>

      <Box pl={4}>
        <FormCodeBlock fontSize={14}>{"+ '.{raw_payload}',"}</FormCodeBlock>
      </Box>

      <HStack pl={4}>
        <SecretInput
          name="secret"
          control={control}
          errors={errors}
          validate={validateBase64}
        />
      </HStack>
      <FormCodeBlock fontSize={14}>)</FormCodeBlock>
    </Stack>
  );
};

export const STANDARD_FORM_CONFIG: IFormConfig = {
  provider: "Standard",
  docsLink: "https://docs.svix.com/receiving/verifying-payloads/how-manual",
  formComponent: StandardVerificationForm,
  curlFormComponent: StandardRequestSignatureForm,
  signature: standardSignature,
  curlCommand: (data: ICurlCommandForm) => {
    const { webhookId, webhookTimestamp, rawPayload, destinationUrl } = data;
    const signature = standardSignature({
      webhookId,
      webhookTimestamp,
      rawPayload,
      secret: data.secret,
      userSignature: "",
    });

    return `curl -X POST "${destinationUrl}" \\
      -H "Accept: application/json" \\
      -H "Content-Type: application/json" \\
      -H "webhook-id: ${webhookId}" \\
      -H "webhook-timestamp: ${webhookTimestamp}" \\
      -H "webhook-signature: ${signature}" \\
      -d '${rawPayload}'`;
  },
};
