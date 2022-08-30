import type { NextPage } from "next";
import Layout from "components/Layout";
import { IPeople, IResponseAPI } from "interfaces/starWars";
import { IHomeProps } from "interfaces/home";
import { Table } from "semantic-ui-react";
const Home = ({ people }: IHomeProps) => {
  return (
    <Layout>
      <Table  color="yellow" celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Birth Year</Table.HeaderCell>
            <Table.HeaderCell>Eye Color</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {people.map((person) => (
            <Table.Row key={person.name}>
              <Table.HeaderCell>{person.name}</Table.HeaderCell>
              <Table.HeaderCell>{person.gender}</Table.HeaderCell>
              <Table.HeaderCell>{person.birth_year}</Table.HeaderCell>
              <Table.HeaderCell>{person.eye_color}</Table.HeaderCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await fetch(process.env.API_STAR_WARS as string);
  const data: IResponseAPI = await response.json();
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { results } = data;
  return {
    props: {
      people: results,
    },
  };
}
