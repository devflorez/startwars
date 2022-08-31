import { IPeople } from "./starWars";

export interface IStarInitialState {
  isLoading: boolean;
  people: IPeople[] | [];
  character: IPeople;
  totalPeople: number;
  peopleTable: IPeople[] | [];
  currentPage: number;
}
