import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'
import { Loading } from '@components/Loading';

export interface IMoviePoster extends TouchableOpacityProps {
  posterUrl: string
}

export function MoviePoster({ posterUrl, ...rest }: IMoviePoster) {
  return (
    <S.MovieTouchableOpacity {...rest}>
      <S.MovieImage
        source={{ uri: `https://image.tmdb.org/t/p/w500${posterUrl}` }}
      />
    </S.MovieTouchableOpacity>
  );
};