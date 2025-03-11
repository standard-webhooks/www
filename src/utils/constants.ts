import { ProfileCardProps } from "@/components/landing/ProfileCard";
import { ReferenceTileProps } from "@/components/landing/ReferenceTile";
import { FaJava, FaJs, FaPhp, FaPython, FaRust } from "react-icons/fa";
import profileTom from "@/app/img/profiles/tom.jpg";
import profileMatt from "@/app/img/profiles/matt.jpg";
import profileIvan from "@/app/img/profiles/ivan.jpg";
import profileJorge from "@/app/img/profiles/jorge.jpg";
import profileNiji from "@/app/img/profiles/niji.png";
import profileBrian from "@/app/img/profiles/brian.jpg";
import profileVincent from "@/app/img/profiles/vincent.jpg";
import profileStojan from "@/app/img/profiles/stojan.png";
import companyMux from "@/app/img/profiles/companies/mux.png";
import companyTwilio from "@/app/img/profiles/companies/twilio.svg";
import companyZapier from "@/app/img/profiles/companies/zapier.svg";
import companySupabase from "@/app/img/profiles/companies/supabase.svg";
import companyKong from "@/app/img/profiles/companies/kong.svg";
import companyLob from "@/app/img/profiles/companies/lob.svg";
import companyNgrok from "@/app/img/profiles/companies/ngrok.svg";
import companySvix from "@/app/img/svix-logo.svg";
import csharpLogo from "@/app/img/languages/csharp-logo.svg";
import elixirLogo from "@/app/img/languages/elixir-logo.png";
import golangLogo from "@/app/img/languages/golang-logo.svg";
import rubyLogo from "@/app/img/languages/ruby-logo.svg";
import { ServiceLogo } from "@/components/LogoWall";

export const REFERENCE_LIBRARIES: ReferenceTileProps[] = [
  {
    title: "Python",
    icon: FaPython,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/python",
  },
  {
    title: "Javascript / Typescript",
    icon: FaJs,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/javascript",
  },
  {
    title: "Java / Kotlin",
    icon: FaJava,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/java",
  },
  {
    title: "Rust",
    icon: FaRust,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/rust",
  },
  {
    title: "Go",
    icon: golangLogo,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/go",
  },
  {
    title: "Ruby",
    icon: rubyLogo,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/ruby",
  },
  {
    title: "PHP",
    icon: FaPhp,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/php",
  },
  {
    title: "C#",
    icon: csharpLogo,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/csharp",
  },
  {
    title: "Elixir",
    icon: elixirLogo,
    url: "https://github.com/standard-webhooks/standard-webhooks/tree/main/libraries/elixir",
  },
];

export const COMMITTEE_MEMBERS: ProfileCardProps[] = [
  {
    name: "Brian Cooksey",
    title: "Sr. Engineering Manager",
    company: "Zapier",
    logo: companyZapier,
    logoLink: "https://www.zapier.com",
    twitter: "https://twitter.com/brian_cooksey",
    github: "https://github.com/bcooksey",
    profile: profileBrian,
  },
  {
    name: "Ivan Gracia",
    title: "Principal Software Engineer",
    company: "Twilio",
    logo: companyTwilio,
    logoLink: "https://www.twilio.com",
    twitter: "https://twitter.com/ivgracia",
    github: "https://github.com/igracia",
    profile: profileIvan,
  },
  {
    name: "Jorge Vivas",
    title: "Staff Engineer",
    company: "Lob",
    logo: companyLob,
    logoLink: "https://www.lob.com",
    github: "https://github.com/jorgelob",
    profile: profileJorge,
  },
  {
    name: "Matthew McClure",
    title: "Head of DevEx",
    company: "Mux",
    logo: companyMux,
    logoLink: "https://www.mux.com",
    twitter: "http://twitter.com/matt_mcclure",
    github: "https://github.com/mmcc",
    profile: profileMatt,
  },
  {
    name: "Niji Yonskai",
    title: "Senior Product Manager",
    company: "ngrok",
    logo: companyNgrok,
    logoLink: "https://ngrok.com",
    github: "https://github.com/nijikokun",
    profile: profileNiji,
  },
  {
    name: "Stojan Dimitrovski",
    title: "Authentication Lead",
    company: "Supabase",
    logo: companySupabase,
    logoLink: "https://www.supabase.com",
    twitter: "https://twitter.com/stojaaan",
    github: "https://github.com/hf",
    profile: profileStojan,
  },
  {
    name: "Tom Hacohen",
    title: "CEO",
    company: "Svix",
    logo: companySvix,
    logoLink: "https://www.svix.com",
    twitter: "http://twitter.com/TomHacohen",
    github: "https://github.com/tasn",
    profile: profileTom,
  },
  {
    name: "Vincent Le Goff",
    title: "Sr. Staff Software Engineer",
    company: "Kong",
    logo: companyKong,
    logoLink: "https://www.konghq.com",
    twitter: "https://twitter.com/zekthzekthzekth",
    github: "https://github.com/zekth",
    profile: profileVincent,
  },
];

export const COMPATIBLE_IMPLEMENTATIONS: ServiceLogo[] = [
  {
    img: require("../app/img/logos/brex-brand.svg"),
    imgAspectRatio: { width: 294, height: 64 },
    company: "Brex",
    link: "https://www.brex.com/",
  },
  {
    img: require("../app/img/logos/benchling-brand.svg"),
    imgAspectRatio: { width: 600, height: 127 },
    company: "Benchling",
    link: "https://www.benchling.com/",
  },
  {
    img: require("../app/img/logos/kong-logo.svg"),
    imgAspectRatio: { width: 600, height: 200 },
    company: "Kong",
    link: "https://www.konghq.com/",
  },
  {
    img: require("../app/img/logos/svix-brand.svg"),
    imgAspectRatio: { width: 1750, height: 545 },
    company: "Svix",
    link: "https://www.svix.com/",
  },
  {
    img: require("../app/img/logos/lob-brand.svg"),
    imgAspectRatio: { width: 1259, height: 602 },
    company: "Lob",
    link: "https://www.lob.com/",
  },
  {
    img: require("../app/img/logos/render-brand.svg"),
    imgAspectRatio: { width: 103, height: 20 },
    company: "Render",
    link: "https://www.render.com/",
  },
  {
    img: require("../app/img/logos/lithic-brand.svg"),
    imgAspectRatio: { width: 96, height: 20 },
    company: "Lithic",
    link: "https://www.lithic.com/",
  },
  {
    img: require("../app/img/logos/bizzabo-brand.svg"),
    imgAspectRatio: { width: 1499, height: 332 },
    company: "Bizzabo",
    link: "https://www.bizzabo.com/",
  },
  {
    img: require("../app/img/logos/clerk-brand.svg"),
    imgAspectRatio: { width: 602, height: 172 },
    company: "Clerk.dev",
    link: "https://clerk.dev/",
  },
  {
    img: require("../app/img/logos/bonfire-brand.svg"),
    imgAspectRatio: { width: 491, height: 97 },
    company: "Bonfire",
    link: "https://gobonfire.com/",
  },
  {
    img: require("../app/img/logos/acolad-brand.svg"),
    imgAspectRatio: { width: 382, height: 110 },
    company: "Acolad Group",
    link: "https://www.acolad.com/",
  },
  {
    img: require("../app/img/logos/yoco-logo.svg"),
    imgAspectRatio: { width: 109, height: 48 },
    company: "Yoco",
    link: "https://www.yoco.com/",
  },
  {
    img: require("../app/img/logos/nash-brand.svg"),
    imgAspectRatio: { width: 147, height: 30 },
    company: "Nash",
    link: "https://www.usenash.com/",
  },
  {
    img: require("../app/img/logos/spotai-brand.svg"),
    imgAspectRatio: { width: 107, height: 26 },
    company: "Spot AI",
    link: "https://www.spot.ai/",
  },
  {
    img: require("../app/img/logos/scalapay-brand.svg"),
    imgAspectRatio: { width: 232, height: 44 },
    company: "Scalapay",
    link: "https://www.scalapay.com/",
  },
  {
    img: require("../app/img/logos/incident-brand.svg"),
    imgAspectRatio: { width: 125, height: 32 },
    company: "incident.io",
    link: "https://incident.io/",
  },
  {
    img: require("../app/img/logos/jeli-brand.svg"),
    imgAspectRatio: { width: 100, height: 42 },
    company: "Jeli",
    link: "https://www.jeli.io/",
  },
  {
    img: require("../app/img/logos/acton-brand.svg"),
    imgAspectRatio: { width: 616, height: 225 },
    company: "Act-On",
    link: "https://www.act-on.com/",
  },
  {
    img: require("../app/img/logos/gigs-brand.svg"),
    imgAspectRatio: { width: 63, height: 31 },
    company: "Gigs",
    link: "https://gigs.com/",
  },
  {
    img: require("../app/img/logos/wetravel-brand.webp"),
    imgAspectRatio: { width: 716, height: 230 },
    company: "WeTravel",
    link: "https://www.wetravel.com/",
  },
  {
    img: require("../app/img/logos/cardless-brand.svg"),
    imgAspectRatio: { width: 115, height: 24 },
    company: "Cardless",
    link: "https://www.cardless.com/",
  },
  {
    img: require("../app/img/logos/parafin-brand.svg"),
    imgAspectRatio: { width: 95, height: 28 },
    company: "Parafin",
    link: "https://www.parafin.com/",
  },
  {
    img: require("../app/img/logos/payfit-brand.svg"),
    imgAspectRatio: { width: 117, height: 36 },
    company: "PayFit",
    link: "https://payfit.com/",
  },
  {
    img: require("../app/img/logos/dealhub-brand.svg"),
    imgAspectRatio: { width: 159, height: 33 },
    company: "DealHub",
    link: "https://dealhub.io/",
  },
  {
    img: require("../app/img/logos/uniform-brand.svg"),
    imgAspectRatio: { width: 540, height: 137 },
    company: "Uniform",
    link: "https://www.uniform.dev/",
  },
  {
    img: require("../app/img/logos/resend-brand.svg"),
    imgAspectRatio: { width: 60, height: 16 },
    company: "Resend",
    link: "https://www.resend.com/",
  },
  {
    img: require("../app/img/logos/threads-brand.svg"),
    imgAspectRatio: { width: 101, height: 20 },
    company: "Threads",
    link: "https://threads.com/",
  },
  {
    img: require("../app/img/logos/sardine-brand.svg"),
    imgAspectRatio: { width: 162, height: 41 },
    company: "Sardine",
    link: "https://www.sardine.ai/",
  },
  {
    img: companyNgrok,
    imgAspectRatio: { width: 172, height: 64 },
    company: "ngrok",
    link: "https://ngrok.com/",
  },
  {
    img: require("../app/img/logos/safebase-brand.svg"),
    imgAspectRatio: { width: 200, height: 34 },
    company: "SafeBase",
    link: "https://safebase.io/",
  },
];

export default {
  links: {
    github: "https://github.com/standard-webhooks/standard-webhooks",
    spec: "https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md",
    codeOfConduct:
      "https://github.com/standard-webhooks/standard-webhooks/blob/main/CODE_OF_CONDUCT.md",
    contribute: "/#contribute",
    committee: "/#committee",
    tools: "/#tools",
    resources: "/#resources",
  },
  tools: {
    verify: "/verify",
    simulate: "/simulate",
  },
  committee: COMMITTEE_MEMBERS,
  referenceLibraries: REFERENCE_LIBRARIES,
  compatibleImplementations: COMPATIBLE_IMPLEMENTATIONS,
};
