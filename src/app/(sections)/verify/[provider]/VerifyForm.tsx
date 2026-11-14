"use client";
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";

import { useEffect, useMemo, useState } from "react";

import { Controller, UseFormReturn, useForm } from "react-hook-form";
import { CodeEditor } from "@/components/CodeEditor";
import { SignatureAlert } from "@/components/SignatureAlert";
import { verifySignature } from "@/utils/signature";
import { IFormConfig, IWebhookVerificationForm } from "@/utils/providers";
import { useWebhookProvider } from "@/hooks/useWebhookProvider";

// TODO: use getStaticProps instead
export function VerifyPage() {
  const providerConfig = useWebhookProvider();

  return (
    <>
      <Stack spacing={4} mt={6}>
        <VerifyForm formConfig={providerConfig} />
      </Stack>
    </>
  );
}

function VerifyForm(props: { formConfig: IFormConfig }) {
  const { formConfig } = props;
  const formCtx = useForm<IWebhookVerificationForm>({
    mode: "onChange",
    defaultValues: {
      userSignature: "",
    },
  });

  const {
    control,
    watch,
    formState: { isValid, errors },
  } = formCtx;
  const [signature, setSignature] = useState("");

  const [userSignature] = watch(["userSignature"]);

  const formValues = watch();
  useEffect(() => {
    if (isValid && hasAllValues(formCtx)) {
      try {
        const generatedSignature = formConfig.signature(formCtx.getValues());
        setSignature(generatedSignature);
      } catch {
        formCtx.setError("secret", {
          type: "manual",
          message:
            "Could not generate signature. Make sure your secret has enough does not contain invalid characters.",
        });
      }
    }
  }, [isValid, formConfig, formValues, formCtx]);

  useEffect(() => {
    formCtx.reset({ userSignature: "", secret: "" });
    setSignature("");
  }, [formConfig, formCtx]);

  const hasBothSignatures = signature.length > 0 && userSignature.length > 0;
  const signaturesMatch = useMemo(() => {
    return hasBothSignatures && verifySignature(signature, userSignature);
  }, [hasBothSignatures, signature, userSignature]);

  return (
    <>
      <formConfig.formComponent control={control} errors={errors} />

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Stack spacing={2}>
            <Heading as="h4" size="sm">
              Expected signature
            </Heading>
            <CodeEditor value={signature} language="plaintext" readOnly />
          </Stack>
        </GridItem>
        <>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Stack spacing={2}>
              <Heading as="h4" size="sm">
                Your signature
              </Heading>

              <Controller
                name="userSignature"
                control={control}
                render={({ field }) => (
                  <CodeEditor
                    {...field}
                    language="plaintext"
                    placeholder="The signature you received"
                  />
                )}
              />
            </Stack>
          </GridItem>
        </>
        <GridItem colSpan={2}>
          {hasBothSignatures && (
            <>
              {signaturesMatch ? (
                <SignatureAlert status="success" text="Signatures match!" />
              ) : (
                <SignatureAlert
                  status="warning"
                  text="Signatures don't match"
                />
              )}
            </>
          )}
        </GridItem>
      </Grid>
    </>
  );
}

function hasAllValues(formCtx: UseFormReturn<IWebhookVerificationForm, any>) {
  return Object.entries(formCtx.getValues()).every(([key, value]) => {
    if (key !== "userSignature" && !value) {
      return false;
    }
    return true;
  });
}
