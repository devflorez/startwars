import React from "react";
import Image from "next/image";
import { Container, List } from "semantic-ui-react";
export default function Footer() {
  return (
    <Container textAlign="center">
      <Image
        src="/logo-yellow.png"
        alt="logo-starwars"
        width={80}
        height={34}
      />
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Code
        </List.Item>
        <List.Item as="a" href="#">
          API
        </List.Item>
        <List.Item as="a" href="#">
          Info
        </List.Item>
      </List>
    </Container>
  );
}
