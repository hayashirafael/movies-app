import { NavigationContainer } from "@react-navigation/native";
import { render, screen, waitFor } from "@tests/utils/customRender";
import { FavoriteMovies } from ".";
import { mockMoviesAPIResponse } from "@tests/mocks/api/mockMoviesAPIResponse";
import { addStorageFavoriteMovie } from "@libs/asyncStorage/favoriteMoviesStorage";

describe("SCREEN: FAVORITE MOVIES", () => {
  const movies = mockMoviesAPIResponse;
  afterEach(() => screen.unmount());

  it("should be render favorite movies posters", async () => {
    await addStorageFavoriteMovie(movies[0]);
    await addStorageFavoriteMovie(movies[1]);
    render(
      <NavigationContainer>
        <FavoriteMovies />
      </NavigationContainer>
    );
    await waitFor(() => {
      expect(screen.getByTestId('favorite-container')).toBeTruthy();
      expect(screen.getByTestId('favorite-movie-0')).toBeTruthy();
      expect(screen.getByTestId('favorite-movie-1')).toBeTruthy();
    });
  });

  it("should be render Loading component before render movies list", async () => {
    render(
      <NavigationContainer>
        <FavoriteMovies />
      </NavigationContainer>
    );
    await waitFor(() => { expect(screen.queryByTestId('loading')).toBeTruthy() });
  });

});