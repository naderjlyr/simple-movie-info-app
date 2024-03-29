import axios from "axios";
import { Show, ShowSearchResult } from "../types/types";
import { stripHtml } from "string-strip-html";

const API_URL = process.env.REACT_APP_API_URL || "https://api.tvmaze.com/";

const searchShows = async (query: string): Promise<ShowSearchResult[]> => {
  const response = await axios.get(
    `${API_URL}search/shows?q=${encodeURIComponent(query)}`,
  );
  return response.data;
};

const getShowDetails = async (showId: number): Promise<Show> => {
  const response = await axios.get(
    `${API_URL}shows/${showId}?embed[]=seasons&embed[]=episodes&embed[]=cast`,
  );
  const showData: Show = response.data;
  showData.summary = showData.summary ? stripHtml(showData.summary).result : "";
  return showData;
};

const getPopularShows = async (): Promise<Show[]> => {
  const response = await axios.get(`${API_URL}shows/popular`);
  return response.data.map((show: Show) => ({
    ...show,
    summary: show.summary ? stripHtml(show.summary).result : "",
  }));
};
export const tvMazeService = {
  searchShows,
  getShowDetails,
  getPopularShows,
};
