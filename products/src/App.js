import React from "react";
import {
  Container,
  Wrapper,
  Heading,
  List,
  ListItem,
  Paragraph,
  NavigationButton,
} from "shared_ui";

export default function App() {
  return (
    <Container>
      <Wrapper>
        <Heading target="h2">Products</Heading>
        <List>
          <ListItem>
            <Heading target="h5">iPhone 16 - </Heading>
            <Paragraph>₹79,990</Paragraph>
          </ListItem>
          <ListItem>
            <Heading target="h5">Samsung S25 - </Heading>
            <Paragraph>₹69,990</Paragraph>
          </ListItem>
          <ListItem>
            <Heading target="h5">Pixel 10 Pro - </Heading>
            <Paragraph>₹89,990</Paragraph>
          </ListItem>
        </List>
        <NavigationButton color="primary" href="/">
          Go to Home
        </NavigationButton>
      </Wrapper>
    </Container>
  );
}
