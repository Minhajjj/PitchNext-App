import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupQueryResult } from "@/components/StartupCard";
// import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }:
  { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  // const posts: StartupQueryResult[] = await client.fetch(STARTUPS_QUERY);
  // const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  const { data: posts }: { data: StartupQueryResult[] } = await sanityFetch({ query: STARTUPS_QUERY, params });


  return (
    <>
      <section className="teal-blue-container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold" style={{ marginTop: "1rem" }}>
          {query ? `Search results for "${query}"` : "Explore our platform to find startups, pitches, and entrepreneurs."}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <StartupCard key={post?._id} post={post} />
            ))) : (
            <p className="no-results"> No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}