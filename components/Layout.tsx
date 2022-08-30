import React from "react";
import { ILayout } from "interfaces/layout";
import { Container } from "semantic-ui-react";
import Header from "components/Header";
import Footer from "components/Footer";
export default function Layout({ children }: ILayout) {
  return (
    <Container className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
