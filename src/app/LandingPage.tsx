"use client";
import { Image, Link } from "@chakra-ui/next-js";
import NextImage from "next/image";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ProfileCard } from "@/components/landing/ProfileCard";
import webhookFeatureImage from "./img/webhooks-feature.png";
import {
  RiLockFill,
  RiArrowLeftRightFill,
  RiBookmark3Fill,
  RiCheckboxMultipleFill,
  RiSendPlane2Fill,
  RiServiceFill,
  RiPencilRuler2Fill,
  RiBook2Fill,
  RiRobot2Fill,
} from "react-icons/ri";
import { ReferenceTile } from "@/components/landing/ReferenceTile";
import { ActionCard } from "@/components/landing/ActionCard";
import { FeatureCard } from "@/components/landing/FeatureCard";
import C from "@/utils/constants";
import LogoWall from "@/components/LogoWall";
import { ReceivingWebhooksCallout } from "@/components/ReceivingWebhooksCallout";

export const LOGOS_AND_BADGES = [
  {
    img: require("../app/img/brand-assets/SW_circle_bw.svg"),
  },
  {
    img: require("../app/img/brand-assets/SW_circle_color.svg"),
  },
  {
    img: require("../app/img/logo-icon.svg"),
  },
  {
    img: require("../app/img/logo-icon-color.svg"),
  },
  {
    img: require("../app/img/brand-assets/SW_rectangle_bw.svg"),
  },
  {
    img: require("../app/img/brand-assets/SW_rectangle_color.svg"),
  },
  {
    img: require("../app/img/logo-icon-text-bw.svg"),
  },
];

export default function LandingPage() {
  return (
    <>
      <Stack>
        <LandingSection>
          <Stack spacing={4}>
            <Heading textAlign="center" fontSize="7xl" fontWeight="extrabold">
              The Webhook Standard
            </Heading>
            <Center>
              <Text fontSize="2xl" textAlign="center" maxW="25em">
                Open source tools and guidelines to send webhooks easily,
                securely and reliably.
              </Text>
            </Center>
            <Center gap={8} pt={4}>
              <Link as={Button} href={C.links.spec}>
                <Button variant="solid">Read the spec</Button>
              </Link>
              <Link as={Button} href={C.links.github}>
                <Button variant="outline" rightIcon={<ArrowForwardIcon />}>
                  Github repo
                </Button>
              </Link>
            </Center>
          </Stack>
        </LandingSection>
        <LandingSection background="linear-gradient(to bottom, #262626 0%, #262626 66%, #1F1F1F 66%, #1F1F1F 100%)">
          <Stack spacing={8} px={{ base: 0, md: 36 }}>
            <Heading
              textAlign="left"
              fontSize="4xl"
              color="white"
              fontWeight="extrabold"
            >
              Why Standard Webhooks?
            </Heading>
            <Text color="white" fontSize="xl">
              Standard Webhooks is a set of open source tools and guidelines to
              send webhooks easily, securely and reliably. Webhooks are becoming
              increasingly popular, though every webhooks provider implements
              them differently and with varying quality. This makes it hard for
              providers who need to reinvent the wheel every time and repeat the
              same costly mistakes, and annoying for consumers who need to have
              a different implementation for each provider. It's also holding
              back the ecosystem as a whole, as these incompatibilities mean
              that no tools are being built to help senders send, consumers
              consume, and for everyone to innovate on top.
            </Text>
            <Grid templateColumns="1fr 1fr 1fr" columnGap={6}>
              <GridItem colSpan={{ base: 3, md: 1 }} pt={8}>
                <FeatureCard
                  icon={RiLockFill}
                  title="Security"
                  description="Every webhook implementation needs to protect themselves and their users from SSRF, spoofing, and replay attacks."
                />
              </GridItem>
              <GridItem colSpan={{ base: 3, md: 1 }} pt={8}>
                <FeatureCard
                  icon={RiArrowLeftRightFill}
                  title="Interoperability"
                  description="Make it easier for your users to consume your webhooks by making them Standard Webhooks compliant."
                />
              </GridItem>
              <GridItem colSpan={{ base: 3, md: 1 }} pt={8}>
                <FeatureCard
                  icon={RiBookmark3Fill}
                  title="Reliability"
                  description="Standard webhooks is designed by experts with extensive experience building reliable and scalable webhook services."
                />
              </GridItem>
            </Grid>
          </Stack>
        </LandingSection>
        <LandingSection backgroundColor="black.300" id="committee">
          <Stack w="100%">
            <Heading textAlign="left" fontSize="4xl" fontWeight="extrabold">
              Technical Steering Committee
            </Heading>
            <Text color="black.400" fontSize="2xl">
              The Standard Webhooks initiative, the specification, and
              development of tooling is driven by the community and guided by
              the technical steering committee.
            </Text>
            <SimpleGrid columns={{ base: 2, md: 3, xl: 4 }} pt={12} spacing={4}>
              {C.committee.map((member, i) => (
                <ProfileCard {...member} key={i} />
              ))}
            </SimpleGrid>
          </Stack>
        </LandingSection>
        <LandingSection>
          <Grid templateColumns="1fr 3fr" columnGap={10}>
            <GridItem colSpan={{ base: 2, md: 1 }} pt={8}>
              <Box>
                <Image
                  src={webhookFeatureImage}
                  style={{ objectFit: "contain" }}
                  alt=""
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }} pt={8}>
              <Stack spacing={5}>
                <Text fontSize="4xl" fontWeight="extrabold">
                  What are Webhooks?
                </Text>
                <Text fontSize="xl">
                  Webhooks are a common name for HTTP callbacks, and are how
                  services notify each other of events. Webhooks are part of a
                  service's API, though you can think of them as a sort of a
                  reverse API. When a client wants to make a request to a
                  service they make an API call, and when the service wants to
                  notify the client of an event the service triggers a webhook
                  (“a user has paid”, “task has finished”, etc.).
                </Text>
                <Text fontSize="xl">
                  Webhooks are server-to-server, in the sense that both the
                  customer and the service in the above description, should be
                  operating HTTP servers, one to receive the API calls and one
                  to receive the webhooks.It's important to note that while
                  webhooks usually co-exist with a traditional API, this is not
                  a requirement, and some services send webhooks without
                  offering a traditional API.
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </LandingSection>
        <LandingSection
          background="linear-gradient(to bottom, #F3F4F7 0%, #F3F4F7 66%, #0075FF 66%, #0075FF 100%)"
          id="contribute"
        >
          <Stack spacing={10}>
            <Heading textAlign="left" fontSize="4xl" fontWeight="extrabold">
              Get Involved
            </Heading>
            <Grid templateColumns="1fr 1fr" gap={8}>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <ActionCard
                  backgroundColor="white.500"
                  title="Use Standard Webhooks"
                  description="The easiest way to get involved is to start using Standard Webhooks in your product."
                  icon={RiServiceFill}
                  ctaUrl={C.links.spec}
                  ctaText="Read the spec"
                />
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <ActionCard
                  backgroundColor="white.500"
                  title="Contribute to the project"
                  description="To help improve the code, documentation, or the spect please head over to our Github repo!"
                  icon={RiPencilRuler2Fill}
                  ctaUrl={C.links.github}
                />
              </GridItem>
            </Grid>
          </Stack>
        </LandingSection>
        <LandingSection id="resources">
          <Stack spacing={12}>
            <Stack spacing={4}>
              <Heading textAlign="left" fontSize="4xl" fontWeight="extrabold">
                Webhook Resources
              </Heading>
              <Text color="black.400" fontSize="2xl">
                Along with the Standard Webhooks specification, we've also built
                out SDKs and useful tools that make it easy to start using
                webhooks.
              </Text>
            </Stack>

            <Stack spacing={4}>
              <Heading fontSize="xl" fontWeight="bold">
                Reference Libraries
              </Heading>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {C.referenceLibraries.map((library, i) => (
                  <GridItem colSpan={{ base: 2, md: 1 }} key={i}>
                    <ReferenceTile
                      title={library.title}
                      icon={library.icon}
                      url={library.url}
                      iconColor="black"
                    />
                  </GridItem>
                ))}
              </Grid>
            </Stack>

            <Stack spacing={4} id="tools">
              <Heading fontSize="xl" fontWeight="bold">
                Webhook tools
              </Heading>
              <Grid templateColumns="1fr 1fr 1fr" gap={8}>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <ActionCard
                    backgroundColor="black.300"
                    title="Verify Webhook"
                    description="A tool to sign, verify, and debug Standard Webhooks signatures."
                    icon={RiCheckboxMultipleFill}
                    ctaUrl={C.tools.verify}
                    ctaText="Try the tool"
                  />
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <ActionCard
                    backgroundColor="black.300"
                    title="Simulate Request"
                    description="A tool to simulate a Standard Webhooks message."
                    icon={RiSendPlane2Fill}
                    ctaUrl={C.tools.simulate}
                    ctaText="Try the tool"
                    h="100%"
                  />
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <ActionCard
                    backgroundColor="black.300"
                    title="AI Skill"
                    description="The receiving-webhooks skill teaches AI agents to verify webhooks the right way."
                    icon={RiRobot2Fill}
                    ctaUrl={"https://github.com/svix/ai/blob/main/skills/receiving-webhooks/"}
                    ctaText="View the skill"
                  />
                </GridItem>
              </Grid>
            </Stack>

            <Stack spacing={4}>
              <Heading fontSize="xl" fontWeight="bold">
                Documentation
              </Heading>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <ReferenceTile
                    title="The spec"
                    icon={RiBook2Fill}
                    url={C.links.spec}
                  />
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <ReferenceTile
                    title="The Readme"
                    icon={RiBookmark3Fill}
                    url={C.links.github}
                  />
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <ReferenceTile
                    title="Code of Conduct"
                    icon={RiServiceFill}
                    url={C.links.codeOfConduct}
                  />
                </GridItem>
              </Grid>
            </Stack>

            <Stack spacing={4}>
              <Heading fontSize="xl" fontWeight="bold">
                Brand Assets
              </Heading>
              <p>
                Use these assets when referring to Standard Webhooks or
                indicating compatibility with the spec.
              </p>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {LOGOS_AND_BADGES.map((item, i) => (
                  <GridItem key={i} colSpan={{ base: 2, md: 1 }}>
                    <Box
                      backgroundColor="black.300"
                      p={8}
                      height="100%"
                      display="flex"
                      alignItems="center"
                    >
                      <NextImage
                        className="mx-auto"
                        src={item.img}
                        width={400}
                        alt="Standard Webhooks Logo"
                        title="Standard Webhooks Logo"
                      />
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </LandingSection>
        <LandingSection backgroundColor="black.300">
          <Stack gap={12}>
            <Heading textAlign="center" fontSize="4xl" fontWeight="extrabold">
              Compatible implementations
            </Heading>
            <LogoWall testimonials={C.compatibleImplementations} />
          </Stack>
        </LandingSection>
      </Stack>
    </>
  );
}

export function LandingSection(props: React.ComponentProps<typeof Center>) {
  const { children, ...rest } = props;
  return (
    <Center py="160px" {...rest}>
      <Box w="100%" maxW="1280px" px={6}>
        {props.children}
      </Box>
    </Center>
  );
}
