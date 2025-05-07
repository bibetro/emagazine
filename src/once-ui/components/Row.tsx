"use client";

import { forwardRef } from "react";
import { Flex } from ".";
import { StyleProps } from "../interfaces";

interface RowProps extends React.ComponentProps<typeof Flex>, StyleProps {
  children?: React.ReactNode;
  wrap?: boolean | string;
}

const Row = forwardRef<HTMLDivElement, RowProps>(({ children, wrap, ...rest }, ref) => {
  // Convert string 'wrap' to boolean true
  const wrapValue = wrap === 'wrap' ? true : wrap;
  
  return (
    <Flex ref={ref} wrap={wrapValue} {...rest}>
      {children}
    </Flex>
  );
});

Row.displayName = "Row";
export { Row };
