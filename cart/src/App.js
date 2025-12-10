import React from "react";

import {
  Layout,
  Heading,
  Paragraph,
  Wrapper,
  NavigationButton,
} from "shared_ui";

export default function App() {
  return (
    <Layout>
      <div style={{ paddingTop: "80px" }} />
      <Wrapper>
        <Heading target="h2">Your Cart</Heading>
        <Paragraph>No items added yet.</Paragraph>
        <NavigationButton color="primary" href="#">
          About us
        </NavigationButton>
      </Wrapper>
    </Layout>
  );
}
