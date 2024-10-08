import { MovieDTO } from "@dtos/movie";
import { addStorageFavoriteMovie, getStorageFavoriteList } from "./favoriteMoviesStorage";
import { mockMoviesAPIResponse } from "@tests/mocks/api/mockMoviesAPIResponse";

describe("LIBS: ASYNC_STORAGE", () => {
  const movies = mockMoviesAPIResponse;

  it("addStorageFavoriteMovie & getStorageFavoriteList", async () => {
    await addStorageFavoriteMovie(movies[0]);
    await addStorageFavoriteMovie(movies[1]);
    const storage = await getStorageFavoriteList();
    expect(storage).toHaveLength(2);
    expect(storage[0]).toEqual(movies[0]);
    expect(storage[1]).toEqual(movies[1]);
    expect(storage[2]).toBeUndefined;
  });
});