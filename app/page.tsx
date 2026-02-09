"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// Animation variants with proper typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Type definitions for our components
interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  id?: string;
  className?: string;
}

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

// Reusable animated section component
function AnimatedSection({
  children,
  id,
  className = "",
  ...props
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      transition={{ delay: 0.1 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

// Reusable animated div component
function AnimatedDiv({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
  ...props
}: AnimatedDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Array of feature card data
const featureCards = [
  { image: assets.image7, text: "Community infrastructure support" },
  { image: assets.image8, text: "Social intervention and relief efforts" },
  { image: assets.image9, text: "Economic empowerment initiatives" },
  { image: assets.image10, text: "Cultural and community development" },
];

// Array of value cards data
const valueCards = [
  { icon: assets.icon1, text: "Accountable" },
  { icon: assets.icon2, text: "Inclusive" },
  { icon: assets.icon3, text: "Development-driven" },
  { icon: assets.icon4, text: "Rooted in the needs of the people" },
];

export default function Home() {
  return (
    <main className="bg-white w-full">
      {/* Hero Section */}
      <AnimatedSection
        id="Home"
        className="relative pt-24 md:pt-0 w-full md:min-h-screen overflow-hidden bg-hero-gradient text-white bg-[linear-gradient(120deg,#02060d_0%,#020b1a_45%,#010409_100%)]"
      >
        <div className="relative z-10 mx-auto flex md:min-h-screen max-w-7xl items-center px-6">
          <div className="flex w-full flex-col items-center md:gap-12 md:flex-row lg:justify-between">
            {/* Text Content */}
            <AnimatedDiv variants={fadeInLeft} className="">
              <motion.p
                variants={fadeInUp}
                className="mb-4 uppercase tracking-widest text-white"
              >
                Distinguished Senator Ahmed Wadada Aliyu (FNIPR, FCTI)
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl"
              >
                A Tested Leader Ready to Govern <br />
                Nasarawa State
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mb-8 max-w-xl leading-relaxed text-white"
              >
                Proven legislative leadership. Trusted community engagement.
                Distinguished Senator Ahmed Wadada Aliyu offers experienced,
                steady leadership prepared to advance Nasarawa State through
                accountable governance and inclusive development.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200">
                  Leadership Scorecard
                </button>

                <a href="#Vision">
                  <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium transition hover:bg-white/10">
                    Vision for Nasarawa
                  </button>
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 md:flex items-center gap-3 text-xs text-white hidden "
              >
                <a href="#Leadership" className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
                    <Image src={assets.arrowDown} alt="arrow" />
                  </span>
                  Scroll to explore
                </a>
              </motion.div>
            </AnimatedDiv>

            {/* Image */}
            <AnimatedDiv
              variants={fadeInRight}
              className="relative hidden lg:block h-screen w-[550px]"
            >
              <Image
                src={assets.hero}
                alt="Ahmed Wadada Aliyu"
                fill
                priority
                className="object-cover -scale-x-100"
                sizes="550px"
              />
            </AnimatedDiv>
          </div>
        </div>

        {/* Mobile Image */}
        <AnimatedDiv
          variants={scaleIn}
          className="relative mt-10 block h-[500px] w-full lg:hidden"
        >
          <Image
            src={assets.hero}
            alt="Ahmed Wadada Aliyu"
            fill
            priority
            className="object-cover -scale-x-100"
            sizes="100vw"
          />
        </AnimatedDiv>
      </AnimatedSection>

      {/* Leadership Section */}
      <AnimatedSection id="Leadership" className="bg-white pt-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* ===== BLOCK 1 ===== */}
          <div className="mb-28">
            {/* Heading */}
            <AnimatedDiv variants={fadeInUp} className="mb-16 text-center">
              <h1 className="text-3xl md:text-5xl font-semibold uppercase text-[#999999]">
                Gubernatorial
              </h1>
              <h1 className="mt-2 text-3xl md:text-5xl font-bold uppercase text-[#999999] sm:text-4xl">
                <span className="text-[#4D4D4D]">Readiness</span> Statement
              </h1>
            </AnimatedDiv>

            {/* Content */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Image */}
              <AnimatedDiv
                variants={fadeInLeft}
                className="relative h-[320px] w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={assets.image1}
                  alt="Leadership engagement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedDiv>

              {/* Text */}
              <AnimatedDiv variants={fadeInRight}>
                <h4 className="mb-4 text-2xl font-semibold text-[#212121]">
                  Leadership Proven by Service. Proven Capacity to Govern.
                </h4>

                <p className="mb-4 leading-relaxed text-[#6A6A6A]">
                  Senator Ahmed Wadada Aliyu is not new to responsibility. His
                  public service record reflects years of legislative
                  leadership, constituency development, and people-centered
                  representation across Keffi, Karu, Kokona, etc. His experience
                  combines governance, oversight, and community engagement — the
                  exact foundation required to lead Nasarawa State at the
                  executive level.
                </p>

                <p className="mb-8 text-sm leading-relaxed text-[#6A6A6A]">
                  This is leadership shaped by results, accountability, and
                  direct connection to the people.
                </p>
                <a href="#Roots">
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#375DFB] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    Our Roots
                    <Image src={assets.arrowDown} alt="arrow" />
                  </button>
                </a>
              </AnimatedDiv>
            </div>
          </div>

          {/* ===== BLOCK 2 ===== */}
          <div id="Roots" className="pt-20 pb-10">
            {/* Heading */}
            <AnimatedDiv variants={fadeInUp} className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-semibold uppercase text-[#999999]">
                Roots, Identity & State
              </h2>
              <h3 className="mt-2 text-3xl md:text-5xl uppercase font-bold text-[#212121] sm:text-4xl">
                Connection
              </h3>
            </AnimatedDiv>

            {/* Content (reversed) */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Text */}
              <AnimatedDiv variants={fadeInLeft} className="order-2 md:order-1">
                <h4 className="mb-4 text-xl font-semibold text-[#212121]">
                  Rooted in Nasarawa. Trusted by the People.
                </h4>

                <p className="mb-4 leading-relaxed text-gray-600">
                  Born on 15 October 1964 in Keffi Local Government Area,
                  Senator Wadada is a proud son of Nasarawa State. Raised with
                  strong family values and community discipline, his leadership
                  reflects lived experience — not distance from the people.
                </p>

                <p className="mb-8 leading-relaxed text-gray-600">
                  His lifelong connection to the grassroots continues to guide
                  his approach to governance, development, and representation.
                </p>
                <a href="#Education">
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#375DFB] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    Education & Governance
                    <Image src={assets.arrowDown} alt="arrow" />
                  </button>
                </a>
              </AnimatedDiv>

              {/* Image */}
              <AnimatedDiv
                variants={fadeInRight}
                className="relative h-[320px] w-full overflow-hidden rounded-2xl order-1 md:order-2"
              >
                <Image
                  src={assets.image2}
                  alt="Leadership engagement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="Education" className="w-full relative py-20">
        <div className="absolute inset-0">
          <Image
            src={assets.image3}
            alt="Background"
            fill
            priority
            className="object-cover"
            quality={100}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <AnimatedDiv variants={fadeInUp} className="mb-16 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold uppercase text-[#999999]">
              EDUCATION &
            </h1>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold uppercase text-[#999999] sm:text-4xl">
              GOVERNANCE CAPACITY
            </h1>
          </AnimatedDiv>

          <AnimatedDiv
            variants={scaleIn}
            className="relative w-full h-[300px] outline"
          >
            <Image
              src={assets.image4}
              fill
              priority
              className="object-cover"
              alt="group"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </AnimatedDiv>

          <AnimatedDiv variants={fadeInUp} className="mt-6 text-white">
            <h1 className="text-xl md:text-3xl font-semibold">
              Prepared by Education. Strengthened by Experience
            </h1>
            <p className="mt-3">
              Senator Wadada&apos;s leadership foundation is anchored in
              education and institutional understanding. He attended Government
              Secondary School, Mangu (Plateau State), the School of Preliminary
              Studies, Keffi, and the Federal Polytechnic, Nasarawa, where he
              earned National and Higher National Diplomas in Business
              Administration.
            </p>
            <p className="mt-3">
              This academic background informs his structured approach to
              governance, fiscal responsibility, and public administration — key
              competencies for effective executive leadership.
            </p>
            <a href="#Legistlative">
              <button className="inline-flex items-center mt-4 gap-2 rounded-full bg-[#375DFB] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Legislative Record
                <Image src={assets.arrowDown} alt="arrow" />
              </button>
            </a>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* Legislative Section */}
      <AnimatedSection id="Legistlative" className="bg-white pt-24 pb-10">
        <div className="mx-auto max-w-5xl px-6">
          {/* ================= BLOCK 1 ================= */}
          <div className="mb-32">
            {/* Heading */}
            <AnimatedDiv
              variants={fadeInUp}
              className="mb-16 text-center md:text-right"
            >
              <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#999999]">
                Legislative Record &
              </h2>
              <h3 className="mt-2 text-3xl font-bold text-[#999999] uppercase md:text-4xl">
                Statewide <span className="text-[#121212]">Impact</span>
              </h3>
            </AnimatedDiv>

            {/* Content */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Text */}
              <AnimatedDiv variants={fadeInLeft} className="order-2 md:order-1">
                <h4 className="mb-4 text-xl font-semibold text-gray-900">
                  From Representation to Results
                </h4>

                <p className="mb-4 leading-relaxed text-gray-600">
                  As a Senator, Ahmed Wadada Aliyu has demonstrated legislative
                  competence, effective oversight, and commitment to translating
                  policy into tangible outcomes. His work reflects an
                  understanding of how government decisions impact communities —
                  from infrastructure to social welfare and economic support.
                </p>

                <p className="mb-8 leading-relaxed text-gray-600">
                  His service record shows not just participation in governance,
                  but delivery.
                </p>

                <a href="#Constituency">
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#375DFB] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    Constituency Development
                    <Image src={assets.arrowDown} alt="arrow" />
                  </button>
                </a>
              </AnimatedDiv>

              {/* Image */}
              <AnimatedDiv
                variants={fadeInRight}
                className="relative h-[320px] w-full overflow-hidden rounded-2xl order-1 md:order-2"
              >
                <Image
                  src={assets.image5}
                  alt="Legislative engagement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedDiv>
            </div>
          </div>

          {/* ================= BLOCK 2 ================= */}
          <div id="Constituency" className="pt-20">
            {/* Heading */}
            <AnimatedDiv
              variants={fadeInUp}
              className="mb-16 text-center md:text-left uppercase"
            >
              <h2 className="text-4xl font-bold text-[#121212]">
                Constituency <br />
                <span className="font-bold text-[#999999]">
                  Development & Delivery
                </span>
              </h2>
              <h4 className="mt-6 normal-case text-center md:text-right text-xl font-semibold text-[#121212]">
                Development That Reaches Communities
              </h4>
            </AnimatedDiv>

            {/* Content */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Left */}
              <AnimatedDiv variants={fadeInLeft} className="order-2 md:order-1">
                <p className="mb-8 leading-relaxed text-[#6A6A6A]">
                  Senator Wadada&apos;s leadership emphasizes:
                </p>

                {/* Feature Cards */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="mb-8 grid gap-4 sm:grid-cols-2"
                >
                  {featureCards.map((card, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="rounded-xl text-center overflow-hidden relative p-4 text-sm text-white"
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={card.image}
                          alt="Background"
                          fill
                          priority
                          className="object-cover"
                          quality={100}
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      <span className="relative z-10">{card.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <p className="mb-8 leading-relaxed text-gray-500">
                  These efforts reflect a governance philosophy focused on
                  impact, inclusion, and sustainability — principles that scale
                  naturally from constituency leadership to state governance.
                </p>
                <a href="#Scorecard">
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#375DFB] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    Scorecard & Accountability
                    <Image src={assets.arrowDown} alt="arrow" />
                  </button>
                </a>
              </AnimatedDiv>

              {/* Image */}
              <AnimatedDiv
                variants={fadeInRight}
                className="relative h-[360px] w-full overflow-hidden rounded-2xl order-1 md:order-2"
              >
                <Image
                  src={assets.image6}
                  alt="Community development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Scorecard Section */}
      <AnimatedSection id="Scorecard" className="bg-gray-50 pt-20">
        {/* ================= BLOCK 1 ================= */}
        <div className="mb-32 mx-auto max-w-5xl">
          {/* Heading */}
          <AnimatedDiv
            variants={fadeInUp}
            className="mb-16 text-center uppercase text-3xl font-semibold text-[#999999] md:text-5xl"
          >
            SCORECARD <span className="text-[#121212]">&</span> ACCOUNTABILITY
          </AnimatedDiv>

          {/* Card */}
          <AnimatedDiv
            variants={scaleIn}
            className="rounded-3xl bg-white p-8 shadow-sm md:p-12"
          >
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Image */}
              <AnimatedDiv
                variants={fadeInLeft}
                className="relative h-[260px] w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={assets.image11}
                  alt="Leadership engagement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedDiv>

              {/* Text */}
              <AnimatedDiv variants={fadeInRight}>
                <h4 className="mb-4 text-xl font-semibold text-[#212121]">
                  A Record Open to Scrutiny
                </h4>

                <p className="mb-8 leading-relaxed text-[#999999]">
                  Leadership is proven by outcomes. Senator Wadada&apos;s
                  constituency scorecard provides a transparent overview of
                  projects, interventions, and legislative contributions
                  delivered under his tenure.
                </p>

                <button className="rounded-full bg-[#375DFB] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                  Full Leadership & Constituency Scorecard
                </button>
              </AnimatedDiv>
            </div>
          </AnimatedDiv>
        </div>

        {/* ================= BLOCK 2 ================= */}
        <div id="Vision" className="bg-white py-20 px-6 w-full">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <AnimatedDiv
              variants={fadeInUp}
              className="mb-16 text-center md:text-right uppercase"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#121212]">
                Governance{" "}
                <span className="font-bold text-[#999999]">Values</span>
              </h2>
              <h3 className="mt-2 text-3xl md:text-5xl font-bold text-[#999999]">
                & Vision Signal
              </h3>
            </AnimatedDiv>

            {/* Content */}
            <AnimatedDiv variants={fadeInUp} className="mx-auto max-w-5xl">
              <h4 className="mb-4 text-xl font-semibold text-gray-900">
                A Leadership Philosophy for Nasarawa State
              </h4>

              <p className="mb-10 text-[#6A6A6A]">
                Senator Ahmed Wadada Aliyu believes governance must be:
              </p>

              {/* Values Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {valueCards.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-blue-600">
                      <Image src={card.icon} alt={`${card.text} icon`} />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {card.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <p className="leading-relaxed text-[#6A6A6A]">
                His public service is guided by integrity, responsibility, and
                the belief that leadership exists to deliver measurable
                progress.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
