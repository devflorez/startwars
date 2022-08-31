import React from "react";
import Image from "next/image";
import { Navbar, Button, Input } from "@nextui-org/react";
import InputSearch from "components/InputSearch";
import { GithubIcon } from "icons/GithubIcon";
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
            <Button
              auto
              flat
              as="a"
              target="_blank"
              href="https://github.com/devflorez/startwars"
              icon={<GithubIcon />}
            />
          </Navbar.Item>
          <Navbar.Item>
            <InputSearch />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </header>
  );
}
