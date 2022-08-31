import React from "react";
import Image from "next/image";
import { Container, Link, Grid, Row } from "@nextui-org/react";
export default function Footer() {
  return (
    <Grid.Container gap={2} justify="center">
      <Image
        src="/logo-yellow.png"
        alt="logo-starwars"
        width={80}
        height={34}
      />
    </Grid.Container>
  );
}
