import React from "react";
import { format } from "date-fns";
import { Button, Image, Link } from "@nextui-org/react";
import Article from "@/assets/article";
import BrandYouTube from "@/assets/brand-youtube";
import BrandWikipedia from "@/assets/brand-wikipedia";

function LaunchItem({ launch }) {
  if (!launch) return null;

  const statusColors = {
    false: "text-red-500",
    true: "text-green-500",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "d MMMM yyyy");
  };

  const getStatusColor = (success) => statusColors[success];

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 lg:py-10">
      <div className="lg:col-span-6 mx-auto mb-4 lg:mb-0">
        <Image
          src={launch.links.patch.large}
          alt={launch.name}
          className="h-[50vh] w-full"
        />
      </div>
      <div className="lg:col-span-6">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">{launch.name}</h1>
        <h2 className="text-lg lg:text-xl mb-4 text-gray-300">
          {formatDate(launch.date_local)},
          <span className={`${getStatusColor(launch.success)} ms-1`}>
            {launch.success ? "Successful" : "Failed"}
          </span>
        </h2>
        <p className="mb-2">
          <b className="mr-1">Fairings:</b>
          <span className="text-gray-300">
            {launch.fairings.reused ? "Reused" : "Not Reused"}
          </span>
        </p>
        <p className="mb-2">
          <b className="mr-1">Recovered:</b>
          <span className="text-gray-300">
            {launch.fairings.recovered
              ? "Fairings Recovered"
              : "Fairings Not Recovered"}
          </span>
        </p>
        <p className="mb-4 text-gray-300">{launch.details}</p>
        <div className="flex gap-4">
          <Button
            as={Link}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            href={launch.links.webcast}
          >
            <span>YouTube</span>
            <BrandYouTube />
          </Button>
          <Button
            as={Link}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            href={launch.links.article}
          >
            <span>Article</span>
            <Article />
          </Button>
          <Button
            as={Link}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            href={launch.links.wikipedia}
          >
            <span>Wikipedia</span>
            <BrandWikipedia />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default LaunchItem;