import type { NextPage } from "next";
import Layout from "components/Layout";
import { IPeople, IResponseAPI } from "interfaces/starWars";
import { IHomeProps } from "interfaces/home";
import {
  Table,
  Text,
  Grid,
  Tooltip,
  Collapse,
  Pagination,
  Container,
} from "@nextui-org/react";
import { EyeIcon } from "icons/EyeIcon";
import { IconButton } from "components/IconButton";
import ModalC from "components/Modal";
import useWindowSize from "hooks/useWindoSize";
import useModal from "hooks/useModal";
import { useContext } from "react";
import { StarContext } from "contexts/starContext";
import About from "components/About";
import { StyledBadge } from "components/StyledBadge";
const Home = () => {
  const { visibleModal, onChangeVisibility } = useModal();
  const {
    selectCharacter,
    character,
    people,
    totalPeople,
    peopleTable,
    isLoading,
    getPeoplePerPage,
  } = useContext(StarContext);
  const totalPagination = Math.ceil(totalPeople / 10);
  if (people.length === 0)
    return (
      <Layout character="Lost among the galaxies">
        <Text>Lost among the galaxies</Text>
      </Layout>
    );

  return (
    <Layout character={people[0].name}>
      <Text
        css={{
          textAlign: "center",
        }}
        h1
      >
        Character Table
      </Text>

      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>GENDER</Table.Column>
          <Table.Column>BIRTH YEAR</Table.Column>
          <Table.Column hideHeader>ACTIONS</Table.Column>
        </Table.Header>
        <Table.Body loadingState={isLoading ? "loading" : undefined}>
          {peopleTable.map((person, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{person.name}</Table.Cell>
                <Table.Cell>
                  {/*@ts-ignore */}
                  <StyledBadge type={person?.gender}>
                    {person.gender}
                  </StyledBadge>
                </Table.Cell>
                <Table.Cell>{person.birth_year}</Table.Cell>
                <Table.Cell>
                  <Tooltip content="Details">
                    <IconButton
                      onClick={() => {
                        selectCharacter(person);
                        onChangeVisibility();
                      }}
                    >
                      <EyeIcon size={20} fill="#979797" />
                    </IconButton>
                  </Tooltip>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Container
        css={{
          textAlign: "center",
        }}
      >
        <Pagination
          total={totalPagination}
          initialPage={1}
          onChange={(page) => getPeoplePerPage(page)}
        />
      </Container>

      <ModalC
        title={"More details about " + character.name}
        visible={visibleModal}
        closeHandler={onChangeVisibility}
      >
        <About />
      </ModalC>
    </Layout>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const response = await fetch(process.env.API_STAR_WARS as string);
//   const data: IResponseAPI = await response.json();
//   if (!data) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   const { results } = data;
//   return {
//     props: {
//       people: results,
//     },
//   };
// }
