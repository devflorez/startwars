import React from "react";
import { ILayout } from "interfaces/layout";
import { Container, Row, Col } from "@nextui-org/react";
import Header from "components/Header";
import Footer from "components/Footer";
import Head from "next/head";
import useWindowSize from "hooks/useWindoSize";
export default function Layout({ children, character = "caracter" }: ILayout) {
  const { height, width } = useWindowSize();
  return (
    <div className="layout">
      <Head>
        <title>Star Wars - {character}</title>
        <meta
          name="description"
          content="La Guerra de las Galaxias, es una franquicia compuesta de películas, novelas, cómics, videojuegos y juguetes ."
        />
        <meta
          name="keywords"
          content="Starwars, ReactJS, NextJS, PWA, Semantic UI, API"
        />
      </Head>
      <Container
        css={{
          maxW: width && width > 720 ? "50%" : "100%",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <Header />
        {children}
      </Container>
    </div>
  );
}
