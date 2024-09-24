import { useState } from "react";
import * as S from "./styles";
import { MoviePoster } from "@components/MoviePoster";
import { Loading } from "@components/Loading";
import { useNavigation } from "@react-navigation/native";
import { useMovie } from "@hooks/useMovie";

export function AllMovies() {
  const {
    movies
  } = useMovie();
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigation();

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