import {Category} from "../types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await axios.get(URL);
  return res.data;
};
