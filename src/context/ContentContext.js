import { createContext, useContext, useReducer } from "react";
import { contentTeamReducer } from "reducer/contentTeam-reducer";
import { appData } from "db/appData";

const ContentTeamsContext = createContext({ teams: [] });

const ContentTeamsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contentTeamReducer, {
    teams: appData.teams,
  });
  return (
    <div>
      <ContentTeamsContext.Provider value={{ state, dispatch }}>
        {children}
      </ContentTeamsContext.Provider>
    </div>
  );
};

const useContentTeams = () => useContext(ContentTeamsContext);

export { ContentTeamsProvider, useContentTeams };
