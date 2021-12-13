import { getFavorite, getFavorites } from './favorites.repository';
import { Favorite } from './favorites.interface';
import { BadException } from '../../common/util/BadException';

export class FavoritesService {
  static async getFavorites(): Promise<Favorite[]> {
    return getFavorites();
  }

  static async getFavorite(profile_id: string): Promise<Favorite> {
    const favorite = await getFavorite(profile_id);
    if (!favorite) throw new BadException(404, 'Cannot find resource');
    return favorite;
  }
}
