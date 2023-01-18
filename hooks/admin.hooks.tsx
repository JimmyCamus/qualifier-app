import { CreateGameFormType } from "../lib/types/entries.type";

export const useCreateGame = () => useHanldeCreateGame;

const useHanldeCreateGame = async (formInputs: CreateGameFormType) => {
  const response = await fetch("/api/admin", {
    method: "POST",
    body: JSON.stringify({ ...formInputs }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { game } = await response.json();
  const form = new FormData();
  form.append("files", formInputs.images);
  await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/games/${game.id}/images`, {
    method: "PUT",
    body: form,
  });
};
