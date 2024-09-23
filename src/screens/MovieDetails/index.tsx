import { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { MovieDTO } from "@dtos/movie";
import { Loading } from "@components/Loading";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Typography } from "@components/Typography";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { MovieInfo } from "@components/MovieInfo";
import { ArrowLeft, Heart, Star } from "lucide-react-native";
import dayjs from "dayjs";
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from "@routes/app.routes";
import { RouteProp } from '@react-navigation/native';
import { ButtonIcon } from "@components/ButtonIcon";
import { useMovie } from "@hooks/useMovie";

type RouteParamProps = {
  movie: MovieDTO;
}

interface IMovieDetailsProps {
  navigation: StackNavigationProp<AppRoutes, "movieDetails">;
  route: RouteProp<AppRoutes, "movieDetails">
}

export function MovieDetails({ navigation, route }: IMovieDetailsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showHeaderTitle, setShowHeaderTitle] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const routeNavigation = useRoute();
  const { movie } = routeNavigation.params as RouteParamProps;
  const theme = useTheme();
  const { addFavoriteMovie, getFavoriteMovies, favoriteMovies, deleteMovies } = useMovie();

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 100;

    if (offsetY > threshold) {
      setShowHeaderTitle(false);
    } else {
      setShowHeaderTitle(true);
    }
  }, []);

  async function handleAddFavorite() {
    const ifExist = favoriteMovies.some((e) => e.id === movie.id);
    if (ifExist) return;
    await addFavoriteMovie(movie);
    setIsFavorite(true);
  }

  async function getIfFavoriteMovie() {
    const ifExist = favoriteMovies.some((e) => e.id === movie.id);
    if (ifExist) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  useEffect(() => {
    getIfFavoriteMovie();
    navigation.setOptions({
      headerStyle: { backgroundColor: theme.COLORS.GREY500 },
      headerTransparent: showHeaderTitle,
      headerShown: true,
      headerTitle: () => <Typography color={theme.COLORS.WHITE} size={22} text={!showHeaderTitle ? movie.title : ''} />,
      headerLeft: () => <ButtonIcon onPress={() => navigation.goBack()} icon={ArrowLeft} iconBgColor={theme.COLORS.GREY700} iconColor={isFavorite ? theme.COLORS.ORANGE : theme.COLORS.WHITE} style={{ marginLeft: 16 }} />,
      headerRight: () => <ButtonIcon onPress={() => handleAddFavorite()} fill icon={Heart} iconBgColor={isFavorite ? theme.COLORS.ORANGE : theme.COLORS.WHITE} iconColor={theme.COLORS.GREY700} style={{ marginRight: 16 }} />,
    })
  }, [movie, showHeaderTitle, favoriteMovies, isFavorite])

  if (isLoading) return <Loading />

  return (
    <S.Container onScroll={handleScroll}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <S.PosterImage
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        />
        <S.TextContainer>
          <S.TitleContainer>
            <Typography text={movie.title} size={28} />
          </S.TitleContainer>

          <Typography text="SINOPSE" size={14} color={theme.COLORS.ORANGE} />

          <S.OverviewContainer>
            <Typography text={movie.overview} />
          </S.OverviewContainer>

          <S.InfoContainer>
            <MovieInfo
              icon={Heart}
              label="CURTIDAS"
              info={String(movie.vote_count)}
            />
            <MovieInfo
              icon={Heart}
              label="FAVORITOS"
              info={String(movie.popularity)}
            />
            <MovieInfo
              icon={Heart}
              label="ESTRÉIA"
              info={dayjs(movie.release_date).format("DD/MM/YYYY")}
            />
            <MovieInfo
              icon={Heart}
              label="LEGENDA"
              info={movie.status}
            />
          </S.InfoContainer>

        </S.TextContainer>
      </ScrollView>
    </S.Container>
  );
};