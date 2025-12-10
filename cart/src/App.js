import React from "react";

import {
  Container,
  Heading,
  Paragraph,
  Wrapper,
  NavigationButton,
} from "shared_ui";

export default function App() {
  return (
    <Container>
      <Wrapper>
        <Heading target="h2">Your Cart</Heading>
        <Paragraph>No items added yet.</Paragraph>
        <NavigationButton color="primary" href="/">
          Go to Home
        </NavigationButton>
      </Wrapper>
    </Container>
  );
}
