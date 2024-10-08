import { useCallback, useEffect, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { useMovie } from "@hooks/useMovie";
import { Typography } from "@components/Typography";
import { CustomIcon } from "@components/ButtonIcon";
import { MovieInfo } from "@components/MovieInfo";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from "@routes/app.routes";
import { RouteProp } from '@react-navigation/native';
import { MovieDTO } from "@dtos/movie";
import { ArrowLeft, Heart } from "lucide-react-native";
import dayjs from "dayjs";

type RouteParamProps = {
  movie: MovieDTO;
}

interface IMovieDetailsProps {
  navigation: StackNavigationProp<AppRoutes, "movieDetails">
  route: RouteProp<AppRoutes, "movieDetails">
}

export function MovieDetails({ navigation }: IMovieDetailsProps) {
  const [showHeaderTitle, setShowHeaderTitle] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const routeNavigation = useRoute();
  const { movie } = routeNavigation.params as RouteParamProps;
  const theme = useTheme();
  const {
    addFavoriteMovie,
    favoriteMovies
  } = useMovie();

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 50;

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
      headerStyle: { backgroundColor: theme.COLORS.GREY500, height: 110 },
      headerTitleAlign: 'center',
      headerTransparent: showHeaderTitle,
      headerShown: true,
      headerTitle: () => <Typography color={theme.COLORS.WHITE} style={{ lineHeight: 28 }} size={22} text={!showHeaderTitle ? movie.title : ''} />,
      headerLeft: () =>
        <S.BackButtonTouchable testID="back-button" onPress={() => navigation.goBack()}>
          <CustomIcon icon={ArrowLeft} iconBgColor={theme.COLORS.GREY700} iconColor={isFavorite ? theme.COLORS.ORANGE : theme.COLORS.WHITE} />
        </S.BackButtonTouchable>,
      headerRight: () =>
        <S.FavoriteButtonTouchable testID="favorite-button" onPress={() => handleAddFavorite()}>
          <CustomIcon fill icon={Heart} iconBgColor={isFavorite ? theme.COLORS.ORANGE : theme.COLORS.WHITE} iconColor={theme.COLORS.GREY700} />
        </S.FavoriteButtonTouchable>
    });
  }, [movie, showHeaderTitle, favoriteMovies, isFavorite, navigation]);

  return (
    <S.Container onScroll={handleScroll} testID="movie-details-container">
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <S.PosterImage
          testID="movie-details-poster"
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        />
        <S.TextContainer>
          <S.TitleContainer testID="movie-details-title-container">
            <Typography text={movie.title} size={28} fontFamily="BOLD" />
          </S.TitleContainer>

          <Typography text="SINOPSE" size={14} color={theme.COLORS.ORANGE} fontFamily="BOLD" />

          <S.OverviewContainer testID="movie-details-overview-container">
            <Typography text={movie.overview} fontFamily="REGULAR" />
          </S.OverviewContainer>

          <S.InfoContainer>
            <MovieInfo
              testID="movie-info-vote"
              icon={Heart}
              label="CURTIDAS"
              info={String(movie.vote_count)}
            />
            <MovieInfo
              testID="movie-info-popularity"
              icon={Heart}
              label="FAVORITOS"
              info={String(movie.popularity)}
            />
            <MovieInfo
              testID="movie-info-release-date"
              icon={Heart}
              label="ESTRÉIA"
              info={dayjs(movie.release_date).format("DD/MM/YYYY")}
            />
            <MovieInfo
              testID="movie-info-status"
              icon={Heart}
              label="Status"
              info={movie.status}
            />
          </S.InfoContainer>

        </S.TextContainer>
      </ScrollView>
    </S.Container>
  );
};