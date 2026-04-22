"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/container";
import { useMediaQuery } from "@/hooks/use-media-query";

const easing = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: isDesktop ? ["start start", "end start"] : ["start start", "end 15%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.28,
  });

  // DESKTOP
  const desktopLine1X = useTransform(smoothProgress, [0, 0.42], [0, -90]);
  const desktopLine2X = useTransform(smoothProgress, [0, 0.42], [0, 90]);
  const desktopLine3X = useTransform(smoothProgress, [0, 0.42], [0, -70]);

  const desktopHeadlineOpacity = useTransform(
    smoothProgress,
    [0, 0.32, 0.56],
    [1, 1, 0]
  );

  const desktopCopyX = useTransform(smoothProgress, [0, 0.42], [0, 20]);
  const desktopCopyY = useTransform(smoothProgress, [0, 0.42], [0, 12]);
  const desktopCopyOpacity = useTransform(
    smoothProgress,
    [0, 0.38, 0.58],
    [1, 1, 0]
  );

  // MOBILE
  const mobileHeadlineY = useTransform(smoothProgress, [0, 0.75], [0, 18]);
  const mobileHeadlineOpacity = useTransform(
    smoothProgress,
    [0, 0.48, 0.9],
    [1, 1, 0]
  );

  const mobileCopyY = useTransform(smoothProgress, [0, 0.75], [0, 12]);
  const mobileCopyOpacity = useTransform(
    smoothProgress,
    [0, 0.56, 0.95],
    [1, 1, 0]
  );

  const headlineWrapperStyle = isDesktop
    ? { opacity: desktopHeadlineOpacity }
    : { y: mobileHeadlineY, opacity: mobileHeadlineOpacity };

  const copyStyle = isDesktop
    ? { x: desktopCopyX, y: desktopCopyY, opacity: desktopCopyOpacity }
    : { y: mobileCopyY, opacity: mobileCopyOpacity };

  const headlineBaseClass =
    "font-heading whitespace-nowrap leading-[0.9] tracking-[-0.05em] transform-gpu";

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <Container>
        <div
          className="
            flex items-center
            min-h-[clamp(520px,68svh,860px)]
            pt-8 pb-12
            sm:pt-10 sm:pb-14
            lg:min-h-[clamp(560px,72svh,860px)]
            lg:pt-16 lg:pb-20
          "
        >
          <div className="relative w-full lg:w-fit">
            <motion.div style={headlineWrapperStyle} className="shrink-0 transform-gpu">
              <motion.div
                initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.12, ease: easing }}
                style={isDesktop ? { x: desktopLine1X } : undefined}
                className={`${headlineBaseClass} text-[13.6vw] text-[#2f7c83] sm:text-[14vw] lg:text-[clamp(4.2rem,8vw,8.5rem)] lg:leading-[0.88]`}
              >
                VERBINDUNG.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.28, ease: easing }}
                style={isDesktop ? { x: desktopLine2X } : undefined}
                className={`${headlineBaseClass} text-[13.6vw] text-[#2f7c83] sm:text-[14vw] lg:text-[clamp(4.2rem,8vw,8.5rem)] lg:leading-[0.88]`}
              >
                WIRKUNG.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.44, ease: easing }}
                style={isDesktop ? { x: desktopLine3X } : undefined}
                className={`${headlineBaseClass} text-[13.6vw] text-[#5FD1E3] sm:text-[13.8vw] lg:text-[clamp(4rem,7.6vw,8rem)] lg:leading-[0.88]`}
              >
                PRÄSENZ.
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.95, delay: 0.72, ease: easing }}
              style={copyStyle}
              className="
                mt-5 max-w-[270px]
                transform-gpu
                lg:absolute
                lg:mt-0
                lg:left-[calc(100%+0.75rem)]
                lg:bottom-[0.45rem]
                lg:w-[290px]
                xl:left-[calc(100%+0.9rem)]
                xl:bottom-[0.55rem]
                xl:w-[320px]
              "
            >
              <p className="font-body text-[clamp(1.6rem,4.3vw,1.2rem)] font-light leading-[1.18] tracking-[0.002em] text-[#2f7c83] lg:text-[clamp(1.42rem,2.05vw,2.35rem)] lg:leading-[1.12]">
                Wir verbinden Strategie,
                <br />
                Design und Klarheit
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}