import { Column, Row, Text, Button } from '@/once-ui/components';

export default function Dashboard() {
  return (
    <Column fillWidth gap="xl" paddingX="l">
      {/* Dashboard Header */}
      <Column fillWidth gap="m" marginY="40">
        <Text variant="display" weight="bold">My Dashboard</Text>
        <Text variant="title-l">Manage Your Content</Text>
      </Column>

      {/* User Profile Section */}
      <Row fillWidth background="surface" padding="xl" radius="m" gap="xl">
        <Column flex={1} gap="m">
          <Text variant="title-m" weight="bold">Profile Information</Text>
          <Text variant="body-m">John Doe</Text>
          <Text variant="body-m">john.doe@example.com</Text>
          <Button variant="secondary" label="Edit Profile" marginTop="m" />
        </Column>
        <Column flex={1} gap="m">
          <Text variant="title-m" weight="bold">Subscription Status</Text>
          <Text variant="body-m">Premium Member</Text>
          <Text variant="body-m">Valid until: Dec 31, 2024</Text>
          <Button variant="primary" label="Manage Subscription" marginTop="m" />
        </Column>
      </Row>

      {/* My E-Magazines Section */}
      <Column fillWidth gap="l" marginTop="xl">
        <Text variant="title-m" weight="bold">My E-Magazines</Text>
        <Row fillWidth gap="l" wrap="wrap">
          {/* Magazine Item 1 */}
          <Column style={{ flex: '1', minWidth: '300px' }} background="surface" padding="l" radius="m">
            <Text variant="title-s" weight="bold">Summer Edition 2024</Text>
            <Text variant="body-m" marginY="m">Last read: 2 days ago</Text>
            <Row gap="m">
              <Button variant="primary" label="Continue Reading" />
              <Button variant="secondary" label="Download PDF" />
            </Row>
          </Column>

          {/* Magazine Item 2 */}
          <Column style={{ flex: '1', minWidth: '300px' }} background="surface" padding="l" radius="m">
            <Text variant="title-s" weight="bold">Spring Collection</Text>
            <Text variant="body-m" marginY="m">Last read: 1 week ago</Text>
            <Row gap="m">
              <Button variant="primary" label="Continue Reading" />
              <Button variant="secondary" label="Download PDF" />
            </Row>
          </Column>
        </Row>
      </Column>

      {/* Reading History */}
      <Column fillWidth background="surface" padding="xl" radius="m" marginTop="xl">
        <Text variant="title-m" weight="bold">Reading History</Text>
        <Column gap="m" marginTop="l">
          <Row fillWidth horizontal="space-between" vertical="center">
            <Column gap="xs">
              <Text variant="title-s" weight="bold">Fashion Trends 2024</Text>
              <Text variant="body-s">Read on Jan 15, 2024</Text>
            </Column>
            <Button variant="tertiary" label="Read Again" />
          </Row>
          <Row fillWidth horizontal="space-between" vertical="center">
            <Column gap="xs">
              <Text variant="title-s" weight="bold">Tech Review Special</Text>
              <Text variant="body-s">Read on Jan 10, 2024</Text>
            </Column>
            <Button variant="tertiary" label="Read Again" />
          </Row>
        </Column>
      </Column>

      {/* Saved Articles */}
      <Column fillWidth background="surface" padding="xl" radius="m" marginTop="xl">
        <Text variant="title-m" weight="bold">Saved Articles</Text>
        <Column gap="m" marginTop="l">
          <Row fillWidth horizontal="space-between" vertical="center">
            <Column gap="xs">
              <Text variant="title-s" weight="bold">The Future of Digital Publishing</Text>
              <Text variant="body-s">Saved on Jan 20, 2024</Text>
            </Column>
            <Row gap="m">
              <Button variant="secondary" label="Read" />
              <Button variant="tertiary" label="Remove" />
            </Row>
          </Row>
          <Row fillWidth horizontal="space-between" vertical="center">
            <Column gap="xs">
              <Text variant="title-s" weight="bold">Sustainable Fashion Guide</Text>
              <Text variant="body-s">Saved on Jan 18, 2024</Text>
            </Column>
            <Row gap="m">
              <Button variant="secondary" label="Read" />
              <Button variant="tertiary" label="Remove" />
            </Row>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}