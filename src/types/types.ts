export interface Show {
  id: number;
  name: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  image: Image;
  summary: string;
  backgroundImageUrl?: string;
  _embedded: {
    seasons: Season[];
    episodes: Episode[];
    cast: CastMember[];
  };
}
export interface CastMember {
  person: {
    id: number;
    name: string;
    image: Image | null;
  };
  character: {
    id: number;
    name: string;
    image: Image | null;
  };
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: number;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: Image;
  summary: string;
}

export interface Season {
  id: number;
  number: number;
  episodes: Episode[];
}

export interface ShowSearchResult {
  score: number;
  show: Show;
}
