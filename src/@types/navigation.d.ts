import { MovieDTO } from "@dtos/movie";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      movieDetails: {
        movie: MovieDTO
      };
    }
  }
}