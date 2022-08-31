import { IStarInitialState } from "interfaces/starReducer";
export const characterInitialState = {
  birth_year: "",
  created: new Date(),
  edited: new Date(),
  eye_color: "",
  films: [],
  gender: "",
  hair_color: "",
  height: "",
  homeworld: "",
  mass: "",
  name: "",
  skin_color: "",
  species: [],
  starships: [],
  url: "",
  vehicles: [],
};
export const starInitialState = {
  isLoading: false,
  people: [],
  character: characterInitialState,
  totalPeople: 0,
  currentPage: 1,
  peopleTable: [],
};

export function startReducer(state: IStarInitialState, action: any) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_PEOPLE":
      return { ...state, people: [...action.payload, ...state.people] };
    case "SET_PEOPLE_TABLE":
      return { ...state, peopleTable: action.payload };
    case "SET_CHARACTER":
      return { ...state, character: action.payload };
    case "SET_TOTAL_PEOPLE":
      return {
        ...state,
        totalPeople: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
