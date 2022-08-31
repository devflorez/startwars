import React from "react";
import { Navbar, Button, Input, Loading } from "@nextui-org/react";
import { useContext } from "react";
import { StarContext } from "contexts/starContext";
import { SearchIcon } from "icons/SearchIcon";
export default function InputSearch() {
  const { searchCharacter, isLoading } = useContext(StarContext);
  const onChangeSearch = (text: string) => {
    searchCharacter(text);
  };

  return (
    <Input
      name="search"
      type="search"
      placeholder="Search Character"
      onChange={(e) => onChangeSearch(e.target.value)}
      contentRight={isLoading ? <Loading size="xs" /> : <SearchIcon />}
    />
  );
}
