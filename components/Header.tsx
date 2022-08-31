import React from "react";
import Image from "next/image";
import { Navbar, Button, Input } from "@nextui-org/react";
export default function Header() {
  return (
    <header>
      <Navbar variant="floating">
        <Navbar.Brand>
          <Image
            src="/logo-yellow.png"
            alt="logo-starwars"
            width={80}
            height={34}
          />
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat href="#">
              Code
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Input name="search" type="search" placeholder="Search Character" />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </header>
  );
}
