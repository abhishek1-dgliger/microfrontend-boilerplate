import React from "react";
import {
  Layout,
  Wrapper,
  Heading,
  List,
  ListItem,
  Paragraph,
  NavigationButton,
} from "shared_ui";

export default function App() {
  return (
    <Layout>
      <Wrapper>
        <div style={{ paddingTop: "80px" }} />
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
        <NavigationButton color="primary" href="#">
          Know More
        </NavigationButton>
      </Wrapper>
    </Layout>
  );
}
