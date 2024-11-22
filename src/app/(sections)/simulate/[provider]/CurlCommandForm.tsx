"use client";
import {
  Box,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Link as ChakraLink,
  Stack,
  Text,
  Tooltip,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../../../components/TextInput";
import { CodeEditor } from "../../../../components/CodeEditor";
import {
  CopyIcon,
  ExternalLinkIcon,
  InfoIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { generateRandomString, getCurrentTimestamp } from "@/utils/curl";
import { Link } from "@chakra-ui/next-js";
import { PayloadEditor } from "@/components/PayloadEditor";
import { useWebhookProvider } from "@/hooks/useWebhookProvider";
import {
  extractSvixPlayToken,
  generateSvixPlayRequestUrl,
  getSvixPlayViewUrl,
  isSvixPlayUrl,
} from "@/utils/play";

export interface ICurlCommandForm {
  rawPayload: string;
  secret: string;
  destinationUrl: string;
  [key: string]: string;
}

const getDefaultValues = () => {
  return {
    rawPayload: '{"event_type":"ping","data":{"success":true}}',
    secret: `whsec_${generateRandomString(24)}`,
    webhookTimestamp: getCurrentTimestamp(),
    webhookId: `msg_${generateRandomString(16)}`,
    destinationUrl: "https://example.com/api/webhook-handler",
  };
};

const pageDefault = getDefaultValues();

// TODO: use getStaticProps instead
export function CurlCommandForm() {
  const formConfig = useWebhookProvider();

  const [curlCommand, setCurlCommand] = useState("");
  const { setValue: setClipboard, onCopy } = useClipboard("");
  const toast = useToast();

  const {
    control,
    watch,
    reset,
    setValue,
    setError,
    getValues,
    formState: { isValid, errors },
  } = useForm<ICurlCommandForm>({
    mode: "onChange",
    defaultValues: pageDefault,
  });

  const values = watch();
  useEffect(() => {
    if (isValid) {
      try {
        setCurlCommand(formConfig.curlCommand(getValues()));
      } catch (err) {
        setError("secret", {
          type: "manual",
          message:
            "Could not generate signature. Make sure your secret does not contain invalid characters.",
        });
      }
    }
  }, [formConfig, getValues, isValid, values, setError]);

  useEffect(() => {
    setClipboard(curlCommand);
  }, [curlCommand, setClipboard]);

  const onUseSvixPlay = () => {
    const playUrl = generateSvixPlayRequestUrl();
    setValue("destinationUrl", playUrl, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <>
      <Box py={4}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem colSpan={{ base: 2, md: 1 }} overflowX="scroll">
            <Stack spacing={4}>
              <Box border="1px solid" borderColor="gray.100" p={4} mt={0}>
                <FormLabel m={0}>Destination URL</FormLabel>
                <TextInput
                  name="destinationUrl"
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      // URL with protocol (http or https)
                      value: /^(http|https):\/\/[^ "]+$/,
                      message: "Destination URL is not a valid URL",
                    },
                  }}
                  // label="Destination URL"
                  placeholder="https://example.com"
                  tooltip="The URL to send the webhook to (with protocol)."
                  errors={errors}
                  w="100%"
                  helperText={
                    <>
                      Configure with your own endpoint or{" "}
                      <ChakraLink
                        onClick={onUseSvixPlay}
                        color="blue.500"
                        textDecoration="underline"
                      >
                        use Svix Play
                      </ChakraLink>
                      {". "}
                      {isSvixPlayUrl(values.destinationUrl) ? (
                        <Link
                          href={getSvixPlayViewUrl(
                            extractSvixPlayToken(values.destinationUrl) || ""
                          )}
                          target="_blank"
                        >
                          Open Svix Play
                          <ExternalLinkIcon ml={0.5} />
                        </Link>
                      ) : (
                        <Tooltip label="Svix Play instantly gives you a unique endpoint to receive and inspect incoming webhooks">
                          <InfoIcon />
                        </Tooltip>
                      )}
                    </>
                  }
                />

                <FormLabel mt={4} mb={0}>
                  Raw Payload
                </FormLabel>

                <PayloadEditor control={control} name="rawPayload" />
              </Box>

              <Stack>
                <HStack>
                  <Heading size="md">Signature</Heading>
                  <Tooltip label="Reset id and secret">
                    <IconButton
                      variant="ghost"
                      size="sm"
                      isRound
                      icon={<RepeatIcon />}
                      aria-label="Reset values"
                      onClick={() => {
                        reset(getDefaultValues());
                      }}
                      sx={{ marginLeft: "0 !important" }}
                    />
                  </Tooltip>
                </HStack>
                <Text fontSize="sm" m={0}>
                  Read more about{" "}
                  <Link
                    href={formConfig.docsLink}
                    fontWeight={500}
                    target="_blank"
                  >
                    how the webhook signature is generated
                    <ExternalLinkIcon mx={1} />
                  </Link>
                </Text>
                <Box border="1px solid" borderColor="gray.100" p={4}>
                  <formConfig.curlFormComponent
                    control={control}
                    errors={errors}
                    setValue={setValue}
                  />
                </Box>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }} overflowX="scroll">
            <Stack spacing={2}>
              <HStack>
                <Heading as="h3" fontSize="2xl">
                  cURL command
                </Heading>

                <IconButton
                  aria-label="Copy"
                  variant="outline"
                  fontSize="16px"
                  onClick={() => {
                    onCopy();
                    toast.closeAll();
                    toast({
                      title: "Copied to clipboard",
                      variant: "subtle",
                    });
                  }}
                  isRound
                  icon={<CopyIcon />}
                />
              </HStack>
              <Box>
                {/* TODO: use bash/shell as language */}
                <CodeEditor language="plaintext" value={curlCommand} readOnly />
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
