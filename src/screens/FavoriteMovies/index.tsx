import { useEffect } from "react";
import * as S from "./styles";
import { MoviePoster } from "@components/MoviePoster";
import { Loading } from "@components/Loading";
import { useMovie } from "@hooks/useMovie";
import { useNavigation } from "@react-navigation/native";

export function FavoriteMovies() {
  const { navigate } = useNavigation();
  const { favoriteMovies, getFavoriteMovies, isLoading } = useMovie();

  if (isLoading) return <Loading />;

  useEffect(() => {
    getFavoriteMovies();
  }, [])

  return (
    <S.Container testID="favorite-container">
      <S.MoviesList
        data={favoriteMovies}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={S.ItemSeparator}
        renderItem={({ item, index }) => (
          <MoviePoster
            testID={`favorite-movie-${index}`}
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