import { api } from "@services/api";
import { act, render, screen, waitFor, fireEvent } from "@tests/utils/customRender";
import { NavigationContainer } from "@react-navigation/native";
import { mockMoviesAPIResponse } from "@tests/mocks/api/mockMoviesAPIResponse";
import { AppRoutes } from "@routes/app.routes";

describe("SCREEN: MOVIE DETAILS", () => {
  afterEach(() => screen.unmount());
  beforeAll(() => jest.spyOn(api, 'get').mockResolvedValue({ data: { results: mockMoviesAPIResponse } }));

  it("should render all components on the screen", async () => {
    render(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );
    await waitFor(() => {
      expect(screen.getByTestId('movie-poster-0')).toBeTruthy();
      act(() => fireEvent.press(screen.getByTestId('movie-poster-0')));
      expect(screen.getByTestId('movie-details-container')).toBeTruthy();
      expect(screen.getByTestId('movie-details-poster')).toBeTruthy();
      expect(screen.getByTestId('movie-details-title-container')).toBeTruthy();
      expect(screen.getByTestId('movie-details-overview-container')).toBeTruthy();
      expect(screen.getByTestId('movie-info-popularity')).toBeTruthy();
      expect(screen.getByTestId('movie-info-release-date')).toBeTruthy();
      expect(screen.getByTestId('movie-info-status')).toBeTruthy();
      expect(screen.getByTestId('back-button')).toBeTruthy();
      expect(screen.getByTestId('favorite-button')).toBeTruthy();
    });
  });

});