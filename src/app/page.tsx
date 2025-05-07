import React from "react";

import { Text, Button, Column, Row } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { home } from "@/app/resources/content";
import { Meta } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column fillWidth gap="xl" paddingX="l">
      {/* Hero Section */}
      <Column fillWidth gap="m" marginY="40">
        <Text variant="display" weight="bold">E-Magazine & Shop</Text>
        <Text variant="title-l">Discover trending articles and exclusive products</Text>
      </Column>

      {/* Featured Magazine Section */}
      <Column fillWidth gap="l">
        <Text variant="title-m" weight="bold">Featured Articles</Text>
        <Row fillWidth gap="l" wrap="wrap">
          {/* Placeholder for magazine articles */}
          <Column style={{ flex: '1', minWidth: '300px' }} background="surface" padding="l" radius="m">
            <Text variant="title-s">Latest Fashion Trends</Text>
            <Text variant="body-m">Explore the hottest styles of the season</Text>
            <Button variant="primary" label="Read More" marginTop="m" />
          </Column>
          <Column style={{ flex: '1', minWidth: '300px' }} background="surface" padding="l" radius="m">
            <Text variant="title-s">Tech Reviews</Text>
            <Text variant="body-m">In-depth analysis of latest gadgets</Text>
            <Button variant="primary" label="Read More" marginTop="m" />
          </Column>
        </Row>
      </Column>

      {/* Featured Products Section */}
      <Column fillWidth gap="l" marginTop="40">
        <Text variant="title-m" weight="bold">Featured Products</Text>
        <Row fillWidth gap="l" wrap="wrap">
          {/* Placeholder for product cards */}
          <Column style={{ flex: '1', minWidth: '250px' }} background="surface" padding="l" radius="m">
            <Text variant="title-s">Premium Magazine Subscription</Text>
            <Text variant="body-m">Get unlimited access to all articles</Text>
            <Text variant="title-m" weight="bold" marginTop="m">$9.99/month</Text>
            <Button variant="primary" label="Subscribe" marginTop="m" />
          </Column>
          <Column style={{ flex: '1', minWidth: '250px' }} background="surface" padding="l" radius="m">
            <Text variant="title-s">Limited Edition Print</Text>
            <Text variant="body-m">Collector's edition magazine</Text>
            <Text variant="title-m" weight="bold" marginTop="m">$29.99</Text>
            <Button variant="primary" label="Add to Cart" marginTop="m" />
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
