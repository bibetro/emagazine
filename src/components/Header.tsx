"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, about, blog, work, gallery } from "@/app/resources/content";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    // Only run on client side after mount to avoid hydration mismatch
    if (typeof window !== 'undefined') {
      updateTime();
      const intervalId = setInterval(updateTime, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timeZone, locale]);

  return <span suppressHydrationWarning>{currentTime || '--:--:--'}</span>;
};

export default TimeDisplay;

export function Header() {
  const pathname = usePathname();

  return (
    <Row
      as="header"
      className={styles.header}
      fillWidth
      horizontal="space-between"
      vertical="center"
      paddingX="l"
      paddingY="m"
      background="surface"
    >
      <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
        {display.location && <Flex hide="s">{person.location}</Flex>}
      </Flex>
      <Flex fillWidth horizontal="center">
        <Flex
          background="surface"
          border="neutral-alpha-medium"
          radius="m-4"
          shadow="l"
          padding="4"
          horizontal="center"
          zIndex={1}
        >
          <Flex gap="4" vertical="center" textVariant="body-default-s">
            <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
            <>
              <ToggleButton
                className="s-flex-hide"
                prefixIcon="book"
                href="/magazine"
                label="Magazine"
                selected={pathname.startsWith("/magazine")}
              />
              <ToggleButton
                className="s-flex-show"
                prefixIcon="book"
                href="/magazine"
                selected={pathname.startsWith("/magazine")}
              />
            </>
            <>
              <ToggleButton
                className="s-flex-hide"
                prefixIcon="shopping-cart"
                href="/shop"
                label="Shop"
                selected={pathname.startsWith("/shop")}
              />
              <ToggleButton
                className="s-flex-show"
                prefixIcon="shopping-cart"
                href="/shop"
                selected={pathname.startsWith("/shop")}
              />
            </>
            <>
              <ToggleButton
                className="s-flex-hide"
                prefixIcon="shopping-bag"
                href="/cart"
                label="Cart"
                selected={pathname.startsWith("/cart")}
              />
              <ToggleButton
                className="s-flex-show"
                prefixIcon="shopping-bag"
                href="/cart"
                selected={pathname.startsWith("/cart")}
              />
            </>
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
            <>
              <ToggleButton
                className="s-flex-hide"
                prefixIcon="user"
                href="/dashboard"
                label="Sign In"
                selected={pathname.startsWith("/dashboard")}
              />
              <ToggleButton
                className="s-flex-show"
                prefixIcon="user"
                href="/dashboard"
                selected={pathname.startsWith("/dashboard")}
              />
            </>
            {display.themeSwitcher && (
              <>
                <Line background="neutral-alpha-medium" vert maxHeight="24" />
                <ThemeToggle />
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex fillWidth horizontal="end" vertical="center">
        <Flex
          paddingRight="12"
          horizontal="end"
          vertical="center"
          textVariant="body-default-s"
          gap="20"
        >
          <Flex hide="s" suppressHydrationWarning>{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
        </Flex>
      </Flex>
    </Row>
  );
}
