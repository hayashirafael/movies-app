import { MovieDTO } from "@dtos/movie";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ASYNC_STORAGE_KEY = '@movies:favorite';

export async function getStorageFavoriteList(): Promise<MovieDTO[]> {
  const storage = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];
  return response;
}

export async function addStorageFavoriteMovie(movie: MovieDTO) {
  const storage = await getStorageFavoriteList();
  storage.push(movie);
  await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(storage));
}

export async function deleteAll() {
  await AsyncStorage.removeItem(ASYNC_STORAGE_KEY);
}
