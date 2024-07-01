// src/wrappers/history.js
import { useNavigate } from 'react-router-dom';

export const useHistory = () => {
  const navigate = useNavigate();
  return {
    push: (path) => navigate(path),
    replace: (path) => navigate(path, { replace: true }),
  };
};
