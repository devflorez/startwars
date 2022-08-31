import { StarContext } from "contexts/starContext";
import { IPeople, IResponseAPI } from "interfaces/starWars";
import { ReactNode, useReducer, useEffect } from "react";
import { starInitialState, startReducer } from "reducers/startReducer";
import { getPeopleApi } from "service/request";
type TStarProviderProps = {
  children: ReactNode;
};
export const StarProvider = ({ children }: TStarProviderProps) => {
  const [state, dispatch] = useReducer(startReducer, starInitialState);

  const getPeople = (people: IPeople[]) => {
    dispatch({
      type: "SET_PEOPLE",
      payload: people,
    });
  };
  const getPeopleTable = (people: IPeople[]) => {
    dispatch({
      type: "SET_PEOPLE_TABLE",
      payload: people,
    });
  };

  const getTotalPeople = (count: number) => {
    dispatch({
      type: "SET_TOTAL_PEOPLE",
      payload: count,
    });
  };

  const getCurrentPage = (page: number) => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: page,
    });
  };

  const selectCharacter = (character: IPeople) => {
    dispatch({
      type: "SET_CHARACTER",
      payload: character,
    });
  };
  const changeStatusLoading = (status: boolean) => {
    dispatch({
      type: "SET_LOADING",
      payload: status,
    });
  };

  const searchCharacter = (search: string) => {
    const result = state.people.filter((character: any) =>
      character.name.includes(search)
    );
    console.log(result);
    if (result.length > 0) {
      getPeopleTable(result.slice(0, 10));
      return;
    }
    getPeopleTable([]);
  };

  const getPeoplePerPage = async (page: number) => {
    changeStatusLoading(true);
    const response: IResponseAPI = await getPeopleApi(page);
    const { count, results } = response;
    getPeopleTable(results.slice(0, 10));
    getPeople(results);
    getTotalPeople(count);
    getCurrentPage(page);
    changeStatusLoading(false);
  };

  useEffect(() => {
    getPeoplePerPage(1);
    return () => {
      getPeople([]);
      getTotalPeople(0);
      getCurrentPage(1);
      getPeopleTable([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultValue = {
    ...state,
    changeStatusLoading,
    selectCharacter,
    getPeople,
    getTotalPeople,
    getCurrentPage,
    getPeoplePerPage,
    searchCharacter,
  };
  return (
    <StarContext.Provider value={defaultValue}>{children}</StarContext.Provider>
  );
};
