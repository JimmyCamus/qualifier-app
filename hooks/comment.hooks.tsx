import { NextRouter } from "next/router";
import { CommentFormFieldsType } from "../lib/types/entries.type";

export const useCreateComment = () => useHandleCreateComment;

const useHandleCreateComment = async (
  commentFormData: CommentFormFieldsType,
  gameId: number | string,
  router: NextRouter
) => {
  const response = await fetch(`/api/comments`, {
    body: JSON.stringify({ commentFormData, gameId }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  router.reload();
};
