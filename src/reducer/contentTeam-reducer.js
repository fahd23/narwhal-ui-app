export const contentTeamReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FAVORITES_TEAMS":
      return {
        ...state,
        teams: [...payload.filter((item) => item.is_favorited === true)],
      };

    case "ARCHIVED_TEAMS":
      return {
        ...state,
        teams: [...payload.filter((item) => item.is_archived === true)],
      };
    case "ALL_TEAMS":
      return {
        ...state,
        teams: [...payload],
      };
    default:
      return state;
  }
};
