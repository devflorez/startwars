import { IPeople } from "interfaces/starWars";
import { createContext } from "react";
import { characterInitialState } from "reducers/startReducer";
type TStarContext = {
  isLoading: boolean;
  people: IPeople[] | [];
  character: IPeople;
  totalPeople: number;
  currentPage: number;
  changeStatusLoading: (status: boolean) => void;
  selectCharacter: (character: IPeople) => void;
  getPeople: (people: IPeople[]) => void;
  getTotalPeople: (count: number) => void;
  getCurrentPage: (page: number) => void;
};

export const StarContext = createContext<TStarContext>({
  isLoading: false,
  people: [],
  character: characterInitialState,
  totalPeople: 0,
  currentPage: 1,
  changeStatusLoading: (status) => undefined,
  selectCharacter: (character) => undefined,
  getPeople: (people) => undefined,
  getTotalPeople: (count) => undefined,
  getCurrentPage: (page) => undefined,
});
