import { getMoviesList } from "@services/getMoviesList";

describe("SERVICES: MOVIE REQUEST", () => {
  test("getMoviesList", async () => {
    const response = await getMoviesList();
    expect(response.length).toBeGreaterThan(1)
    expect(response[0]).toHaveProperty('title');
  });
});