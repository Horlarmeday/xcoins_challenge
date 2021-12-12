import { Favorite } from "../../models/Favorite";

export const getFavorites = async () => await Favorite.find().lean();

export const getFavorite = async (profile_id: string) => await Favorite.findOne({ profile_id });