import { Column, Row, Text, Button } from '@/once-ui/components';

export default function Magazine() {
  return (
    <Column fillWidth gap="xl" paddingX="l">
      {/* Magazine Header */}
      <Column fillWidth gap="m" marginY="40">
        <Text variant="display" weight="bold">Magazine</Text>
        <Text variant="title-l">Explore Our Latest Articles</Text>
      </Column>

      {/* Featured Article */}
      <Column fillWidth background="surface" padding="xl" radius="m" marginBottom="xl">
        <Text variant="overline">Featured Story</Text>
        <Text variant="title-l" weight="bold" marginY="m">The Future of Digital Publishing</Text>
        <Text variant="body-l">Discover how technology is reshaping the magazine industry and creating new opportunities for content creators and readers alike.</Text>
        <Button variant="primary" label="Read Article" marginTop="l" />
      </Column>

      {/* Article Grid */}
      <Row fillWidth gap="l" wrap="wrap">
        {/* Article Card 1 */}
        <Column style={{ flex: '1', minWidth: '300px' }} background="surface" padding="l" radius="m">
          <Text variant="overline">Fashion</Text>
          <Text variant="title-s" weight="bold" marginY="s">Spring Collection Preview</Text>
          <Text variant="body-m">Get an exclusive look at the upcoming season's most anticipated fashion trends.</Text>
          <Button variant="secondary" label="Read More" marginTop="m" />
        </Column>

        {/* Article Card 2 */}
        <Column style={{ flex: '1', minWidth: '300px' }} background="surface" padding="l" radius="m">
          <Text variant="overline">Technology</Text>
          <Text variant="title-s" weight="bold" marginY="s">Smart Home Revolution</Text>
          <Text variant="body-m">How AI and IoT are transforming our living spaces into intelligent environments.</Text>
          <Button variant="secondary" label="Read More" marginTop="m" />
        </Column>

        {/* Article Card 3 */}
        <Column style={{ flex: '1', minWidth: '300px' }} background="surface" padding="l" radius="m">
          <Text variant="overline">Lifestyle</Text>
          <Text variant="title-s" weight="bold" marginY="s">Mindful Living Guide</Text>
          <Text variant="body-m">Practical tips for maintaining balance in today's fast-paced world.</Text>
          <Button variant="secondary" label="Read More" marginTop="m" />
        </Column>

        {/* Article Card 4 */}
        <Column style={{ flex: '1', minWidth: '300px' }} background="surface" padding="l" radius="m">
          <Text variant="overline">Culture</Text>
          <Text variant="title-s" weight="bold" marginY="s">Art in the Digital Age</Text>
          <Text variant="body-m">Exploring how digital technologies are influencing contemporary art.</Text>
          <Button variant="secondary" label="Read More" marginTop="m" />
        </Column>
      </Row>

      {/* Newsletter Signup */}
      <Column fillWidth background="surface" padding="xl" radius="m" marginTop="xl">
        <Text variant="title-m" weight="bold">Stay Updated</Text>
        <Text variant="body-m" marginY="m">Subscribe to our newsletter for the latest articles and exclusive content.</Text>
        <Button variant="primary" label="Subscribe Now" />
      </Column>
    </Column>
  );
}