import React from "react";
import { Column, Heading, Text, Button, Flex } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { Meta } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: "Test Page",
    description: "This is a test page for demonstration purposes",
    baseURL: baseURL,
    path: "/test",
  });
}

export default function TestPage() {
  return (
    <Column fillWidth gap="xl" paddingX="l">
      <Column fillWidth gap="m" marginY="40">
        <Heading variant="display-strong-xl">Test Page</Heading>
        <Text variant="body-default-l">
          This is a test page created to demonstrate the page structure in this project.
        </Text>
      </Column>

      <Flex fillWidth gap="l" direction="column">
        <Heading variant="display-strong-s">Features</Heading>
        <Column background="surface" padding="l" radius="m">
          <Text variant="heading-strong-l">Component Showcase</Text>
          <Text variant="body-default-m" marginY="m">
            This page demonstrates how components from the once-ui library can be used together.
          </Text>
          <Button variant="primary" label="Example Button" />
        </Column>
      </Flex>

      <Column fillWidth gap="l" marginTop="40">
        <Heading variant="display-strong-s">Additional Information</Heading>
        <Text variant="body-default-m">
          This test page follows the same structure as other pages in the project,
          including proper metadata generation and component usage patterns.
        </Text>
      </Column>
    </Column>
  );
}