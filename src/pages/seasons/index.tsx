import React, { FC } from "react";
import { useParams } from "react-router-dom";
import SeasonCard from "../../features/tvShows/components/Seasons/SeasonCard";
import useTvShows from "../../hooks/useTvShows";

const SeasonsPage: FC = () => {
  const { id } = useParams<{ id?: string }>();
  const showId = id ? parseInt(id, 10) : 1955;
  const { selectedShow } = useTvShows(showId);

  if (!selectedShow) {
    return <div>Loading show data...</div>;
  }

  return (
    <div className="bg-gray-800  dark:bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8  text-gray-400 dark:text-gray-700">
          {selectedShow.name} Seasons
        </h2>
        <SeasonCard compact={false} />
      </div>
    </div>
  );
};

export default SeasonsPage;
