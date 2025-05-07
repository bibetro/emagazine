import { Column, Row, Text, Button } from '@/once-ui/components';

export default function AdminDashboard() {
  return (
    <Column fillWidth gap="xl" paddingX="l">
      {/* Admin Dashboard Header */}
      <Column fillWidth gap="m" marginY="40">
        <Text variant="display" weight="bold">Admin Dashboard</Text>
        <Text variant="title-l">Manage Content & Users</Text>
      </Column>

      {/* Quick Stats */}
      <Row fillWidth gap="l" wrap="wrap">
        <Column flex={1} background="surface" padding="xl" radius="m">
          <Text variant="title-m" weight="bold">Total Users</Text>
          <Text variant="display" weight="bold" marginTop="m">1,234</Text>
          <Text variant="body-m">+12% from last month</Text>
        </Column>
        <Column flex={1} background="surface" padding="xl" radius="m">
          <Text variant="title-m" weight="bold">Active Subscriptions</Text>
          <Text variant="display" weight="bold" marginTop="m">856</Text>
          <Text variant="body-m">+8% from last month</Text>
        </Column>
        <Column flex={1} background="surface" padding="xl" radius="m">
          <Text variant="title-m" weight="bold">Published Content</Text>
          <Text variant="display" weight="bold" marginTop="m">45</Text>
          <Text variant="body-m">Articles this month</Text>
        </Column>
      </Row>

      {/* Content Management */}
      <Column fillWidth background="surface" padding="xl" radius="m" marginTop="xl">
        <Row fillWidth horizontal="space-between" vertical="center" marginBottom="l">
          <Text variant="title-m" weight="bold">Content Management</Text>
          <Button variant="primary" label="Create New Content" />
        </Row>
        <Column gap="m">
          {/* Content Item 1 */}
          <Row fillWidth horizontal="space-between" vertical="center" background="surface-hover" padding="l" radius="m">
            <Column gap="xs">
              <Text variant="title-s" weight="bold">Summer Fashion Trends 2024</Text>
              <Text variant="body-s">Published: Jan 20, 2024 | Author: Jane Smith</Text>
            </Column>
            <Row gap="m">
              <Button variant="secondary" label="Edit" />
              <Button variant="tertiary" label="Unpublish" />
            </Row>
          </Row>
          {/* Content Item 2 */}
          <Row fillWidth horizontal="space-between" vertical="center" background="surface-hover" padding="l" radius="m">
            <Column gap="xs">
              <Text variant="title-s" weight="bold">Tech Gadgets Review</Text>
              <Text variant="body-s">Draft | Author: John Doe</Text>
            </Column>
            <Row gap="m">
              <Button variant="secondary" label="Edit" />
              <Button variant="primary" label="Publish" />
            </Row>
          </Row>
        </Column>
      </Column>

      {/* User Management */}
      <Column fillWidth background="surface" padding="xl" radius="m" marginTop="xl">
        <Row fillWidth horizontal="space-between" vertical="center" marginBottom="l">
          <Text variant="title-m" weight="bold">User Management</Text>
          <Button variant="secondary" label="Export Users" />
        </Row>
        <Column gap="m">
          {/* User Item 1 */}
          <Row fillWidth horizontal="space-between" vertical="center" background="surface-hover" padding="l" radius="m">
            <Column gap="xs">
              <Text variant="title-s" weight="bold">John Doe</Text>
              <Text variant="body-s">Premium Member | Joined: Dec 2023</Text>
            </Column>
            <Row gap="m">
              <Button variant="secondary" label="View Details" />
              <Button variant="tertiary" label="Manage Access" />
            </Row>
          </Row>
          {/* User Item 2 */}
          <Row fillWidth horizontal="space-between" vertical="center" background="surface-hover" padding="l" radius="m">
            <Column gap="xs">
              <Text variant="title-s" weight="bold">Jane Smith</Text>
              <Text variant="body-s">Basic Member | Joined: Jan 2024</Text>
            </Column>
            <Row gap="m">
              <Button variant="secondary" label="View Details" />
              <Button variant="tertiary" label="Manage Access" />
            </Row>
          </Row>
        </Column>
      </Column>

      {/* Analytics */}
      <Column fillWidth background="surface" padding="xl" radius="m" marginTop="xl">
        <Text variant="title-m" weight="bold">Analytics Overview</Text>
        <Row fillWidth gap="l" wrap="wrap" marginTop="l">
          <Column flex={1} gap="m">
            <Text variant="title-s" weight="bold">Most Read Articles</Text>
            <Column gap="s">
              <Text variant="body-m">1. Summer Fashion Trends 2024 (2.3k reads)</Text>
              <Text variant="body-m">2. Tech Gadgets Review (1.8k reads)</Text>
              <Text variant="body-m">3. Lifestyle Tips (1.5k reads)</Text>
            </Column>
          </Column>
          <Column flex={1} gap="m">
            <Text variant="title-s" weight="bold">User Engagement</Text>
            <Column gap="s">
              <Text variant="body-m">Average read time: 5.2 minutes</Text>
              <Text variant="body-m">Comments this month: 456</Text>
              <Text variant="body-m">Shares this month: 789</Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}