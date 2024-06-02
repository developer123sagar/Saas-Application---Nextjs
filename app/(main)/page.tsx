import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";

const Home = () => {
  return (
    <section className="mt-9 flex flex-col gap-9">
      <div className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="podcast_grid">
          {podcastData.map(({ id, imgURL, title, description }) => (
            <PodcastCard
              key={id}
              imgUrl={imgURL}
              title={title}
              desc={description}
              podcastId={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
