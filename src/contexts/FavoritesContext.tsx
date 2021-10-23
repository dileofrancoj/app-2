import { createContext, useContext, useReducer } from "react";
import { favoritesReducer } from "../reducers/FavoritesReducer";
import { ActionType, Favorite } from "../types/favorites";

type ContextType = {
  favorites;
  removeFavorite: (id: string) => void;
  addFavorite: (product: Favorite) => void;
};

const contextDefault: ContextType = {
  favorites: [],
  removeFavorite: (id: string) => {},
  addFavorite: (product: Favorite) => {},
};

const FavoritesContext = createContext<ContextType>(contextDefault);
const { Provider } = FavoritesContext;

export const FavoritesProvider: React.FC = ({ children }) => {
  const [{ favorites }, dispatch] = useReducer(favoritesReducer, {
    favorites: [],
  });

  const addFavorite = (product: Favorite) => {
    // Actualizar mi state con los favoritos previos y el nuevo favorito
    //dispatch(addFavorite(product)); ActionCreator
    dispatch({ type: ActionType.AddFavorite, payload: product });
  };

  const removeFavorite = (id: string) => {
    dispatch({ type: ActionType.RemoveFavorite, payload: { id } });
  };

  return (
    <Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error(
      "useFavorites must be initialized within FavoritesProvider"
    );
  return context;
};
