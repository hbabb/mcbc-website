// src/wrappers/match.js
import { useMatch } from 'react-router-dom';

export const useRouteMatch = (pattern) => {
  return useMatch(pattern);
};
