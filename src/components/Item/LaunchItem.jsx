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
      {/* First Column: Image */}
      <div className="lg:col-span-6 mx-auto mb-4 lg:mb-0">
        <Image
          src={launch.links.patch.large}
          alt={launch.name}
          className="h-[50vh] w-full"
        />
      </div>

      {/* Second Column: Information */}
      <div className="lg:col-span-6">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">{launch.name}</h1>
        <h2 className="text-lg lg:text-xl text-gray-300 mb-4">
          {formatDate(launch.date_local)},
          <span className={`${getStatusColor(launch.success)} ms-1`}>
            {launch.success ? "Successful" : "Failed"}
          </span>
        </h2>

        <ul className="text-gray-300">
          <li>
            <strong>Fairings:</strong>
            <span className="ms-1">
              {launch.fairings.reused ? "Reused" : "Not Reused"}
            </span>
          </li>
          <li>
            <strong>Recovered:</strong>
            <span className="ms-1">
              {launch.fairings.recovered
                ? "Fairings Recovered"
                : "Fairings Not Recovered"}
            </span>
          </li>
        </ul>

        <p className="text-gray-300 mt-4">{launch.details}</p>

        <div className="flex gap-4 mt-4">
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
