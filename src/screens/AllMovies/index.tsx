import * as S from "./styles";
import { Typography } from "@components/Typography";
import { MoviePoster } from "@components/MoviePoster";
import { Loading } from "@components/Loading";
import { useMovie } from "@hooks/useMovie";
import { useNavigation } from "@react-navigation/native";

export function AllMovies() {
  const {
    movies,
    isLoading,
    error
  } = useMovie();
  const { navigate } = useNavigation();

  if (isLoading) return <Loading />

  if (error) return (
    <S.ErrorContainer testID="movies-error-container">
      <Typography text={error.message} />
    </S.ErrorContainer>
  )

  return (
    <S.Container testID="movies-container">
      <S.MoviesList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={S.ItemSeparator}
        renderItem={({ item, index }) => (
          <MoviePoster
            testID={`movie-poster-${index}`}
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