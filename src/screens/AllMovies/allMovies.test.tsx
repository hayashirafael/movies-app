import { api } from "@services/api";
import { render, screen, waitFor } from "@tests/utils/customRender";
import { AllMovies } from ".";
import { AppRoutes } from "@routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { mockMoviesAPIResponse } from "@tests/mocks/api/mockMoviesAPIResponse";

describe("SCREEN: ALL-MOVIES", () => {
  afterEach(() => screen.unmount());
  beforeAll(() => jest.spyOn(api, 'get').mockResolvedValue({ data: { results: mockMoviesAPIResponse } }));

  it("should be render movies posters", async () => {
    render(
      <NavigationContainer>
        <AllMovies />
      </NavigationContainer>
    );
    await waitFor(() => {
      expect(screen.getByTestId('movie-poster-0')).toBeTruthy();
      expect(screen.getByTestId('movie-poster-1')).toBeTruthy();
    });
  });

  it("should be render Loading component before render movies list", async () => {
    render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );
    await waitFor(() => { expect(screen.queryByTestId('loading')).toBeTruthy() });
  });

  it("should be render error message when API call fail", async () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce(new Error());
    render(
      <NavigationContainer>
        <AllMovies />
      </NavigationContainer>
    );
    await waitFor(() => {
      expect(screen.getByTestId('movies-error-container')).toBeTruthy()
    });
  });


});