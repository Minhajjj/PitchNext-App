import SearchForm from "@/components/SearchForm";


export default async function Home({ searchParams }:
  { searchParams: { query?: string } }) {
  const query = (await searchParams.query);

  return (
    //  <div className="w-full flex justify-center bg-[#2F4858] py-6">
    //  </div>
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

  );
}
