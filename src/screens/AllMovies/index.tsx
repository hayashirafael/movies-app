import { useEffect, useState } from "react";
import * as S from "./styles";
import { MoviePoster } from "@components/MoviePoster";
import { MovieDTO } from "@dtos/movie";
import { getMoviesList } from "@services/getMoviesList";
import { Loading } from "@components/Loading";
import { useNavigation } from "@react-navigation/native";

export function AllMovies() {
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigation();

  async function getMovies() {
    try {
      setIsLoading(true);
      const response = await getMoviesList();
      if (response) {
        setMovies(response)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovies()
  }, []);

  if (isLoading) return <Loading />

  return (
    <S.Container>
      <S.MoviesList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={S.ItemSeparator}
        renderItem={({ item, index }) => (
          <MoviePoster
            posterUrl={item.poster_path}
            onPress={() => navigate("movieDetails", { movie: item })}
          />
        )}
        numColumns={2}
        contentContainerStyle={{ padding: 16 }}
        columnWrapperStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};