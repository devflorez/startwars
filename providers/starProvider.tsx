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

  useEffect(() => {
    (async () => {
      const response: IResponseAPI = await getPeopleApi(1);
      const { count, results } = response;
      getPeople(results);
      getTotalPeople(count);
      getCurrentPage(1);
    })();
    return () => {
      getPeople([]);
      getTotalPeople(0);
      getCurrentPage(1);
    };
  }, []);

  const defaultValue = {
    ...state,
    changeStatusLoading,
    selectCharacter,
    getPeople,
    getTotalPeople,
    getCurrentPage,
  };
  return (
    <StarContext.Provider value={defaultValue}>{children}</StarContext.Provider>
  );
};
