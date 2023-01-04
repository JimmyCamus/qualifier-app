const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl text-primary">Hello World</h1>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await fetch(`${process.env.CLIENT_URL}/api/games/all`);
  const { games } = await data.json();
  return {
    props: {
      games,
    },
  };
};

export default Home;
