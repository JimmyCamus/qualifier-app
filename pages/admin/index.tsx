import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import AdminRoute from "../../components/admin/AdminRoute";
import CreateGameModal from "../../components/admin/CreateGameModal";
import GamesTable from "../../components/admin/GamesTable";
import { useCreateGame } from "../../hooks/admin.hooks";
import { CreateGameFormType } from "../../lib/types/entries.type";
import { Game } from "../../lib/types/game.type";
import { User } from "../../lib/types/user.type";
import { getUser } from "../../utils/user.utils";
import { getGamesData } from "../api/games/all";

const AdminPage = ({ games, user }: { games: Game[]; user: User }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleCreateGame = useCreateGame();
  const handleCreateGames = async (formInputs: CreateGameFormType) => {
    setIsLoading(true);
    await handleCreateGame(formInputs);
    router.reload();
    setIsLoading(false);
  };
  return (
    <AdminRoute user={user}>
      {isLoading ? <progress className="progress w-full"></progress> : null}
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-[90vw]">
          <div className="mb-4">
            <CreateGameModal handleCreateGame={handleCreateGames} />
          </div>
          <GamesTable games={games} />
        </div>
      </div>
    </AdminRoute>
  );
};

export default AdminPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const user = await getUser(context.req);
  const games = await getGamesData("");
  return {
    props: {
      games,
      user,
    },
  };
};
