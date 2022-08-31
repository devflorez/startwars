import { Collapse, Link, Table, Text } from "@nextui-org/react";
import { useContext } from "react";
import { StarContext } from "contexts/starContext";
export default function About() {
  const { character } = useContext(StarContext);
  return (
    <Collapse title={character.name} subtitle="Name">
      <Text h4>Description about</Text>
      <Table
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>ATTRIBUTE</Table.Column>
          <Table.Column>VALUE</Table.Column>
        </Table.Header>
        <Table.Body>
          {/*@ts-ignore */}
          {Object.keys(character).map((attribute: any, index) => {
            if (attribute !== "name") {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{attribute}</Table.Cell>

                  <Table.Cell>
                    <Text>
                      {/*@ts-ignore */}
                      {character[attribute]}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              );
            }
          })}
        </Table.Body>
      </Table>
    </Collapse>
  );
}
