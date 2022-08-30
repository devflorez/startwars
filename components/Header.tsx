import React from "react";
import Image from "next/image";
import { Input, Menu } from "semantic-ui-react";
export default function Header() {
  return (
    <header>
      <Menu secondary  color="black">
        <Menu.Item>
          <Image
            src="/logo-yellow.png"
            alt="logo-starwars"
            width={80}
            height={34}
          />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        
        </Menu.Menu>
      </Menu>
    </header>
  );
}
