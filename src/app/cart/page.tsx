import { Column, Row, Text, Button } from '@/once-ui/components';

export default function Cart() {
  return (
    <Column fillWidth gap="xl" paddingX="l">
      {/* Cart Header */}
      <Column fillWidth gap="m" marginY="40">
        <Text variant="display" weight="bold">Shopping Cart</Text>
        <Text variant="title-l">Review Your Items</Text>
      </Column>

      {/* Cart Items */}
      <Column fillWidth gap="m">
        {/* Cart Item 1 */}
        <Row fillWidth background="surface" padding="l" radius="m" gap="l">
          <Column flex={3} gap="s">
            <Text variant="title-s" weight="bold">Summer Edition 2024</Text>
            <Text variant="body-m">Digital Magazine</Text>
          </Column>
          <Column flex={1} horizontal="end">
            <Text variant="title-s" weight="bold">$14.99</Text>
          </Column>
        </Row>

        {/* Cart Item 2 */}
        <Row fillWidth background="surface" padding="l" radius="m" gap="l">
          <Column flex={3} gap="s">
            <Text variant="title-s" weight="bold">Monthly Subscription</Text>
            <Text variant="body-m">Digital Access</Text>
          </Column>
          <Column flex={1} horizontal="end">
            <Text variant="title-s" weight="bold">$9.99</Text>
          </Column>
        </Row>
      </Column>

      {/* Order Summary */}
      <Column fillWidth background="surface" padding="xl" radius="m" marginTop="xl">
        <Text variant="title-m" weight="bold">Order Summary</Text>
        <Row fillWidth marginY="m">
          <Text variant="body-m">Subtotal</Text>
          <Text variant="body-m" weight="bold">$24.98</Text>
        </Row>
        <Row fillWidth marginBottom="m">
          <Text variant="body-m">Tax</Text>
          <Text variant="body-m" weight="bold">$2.50</Text>
        </Row>
        <Row fillWidth marginBottom="l">
          <Text variant="title-s" weight="bold">Total</Text>
          <Text variant="title-s" weight="bold">$27.48</Text>
        </Row>
        <Button variant="primary" label="Proceed to Checkout" />
      </Column>

      {/* Continue Shopping */}
      <Row fillWidth horizontal="center" marginTop="xl">
        <Button variant="tertiary" label="Continue Shopping" href="/shop" />
      </Row>
    </Column>
  );
}