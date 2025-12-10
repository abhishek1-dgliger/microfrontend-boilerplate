import React from "react";
import {
  NavigationButton,
  Hero,
  HorizontalButtonWrapper,
  HeroContent,
  Heading,
  Paragraph,
} from "shared_ui";

export default function () {
  return (
    <Hero>
      <HeroContent>
        <Heading target="h1">Discover Your Style</Heading>
        <Paragraph>
          Premium fashion and accessories crafted for comfort and confidence.
          Shop the latest arrivals today.
        </Paragraph>
      </HeroContent>
      <HorizontalButtonWrapper>
        <NavigationButton href="/products" color="primary">
          Products
        </NavigationButton>
        <NavigationButton href="/cart" color="secondary">
          Cart
        </NavigationButton>
      </HorizontalButtonWrapper>
    </Hero>
  );
}
