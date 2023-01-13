import { useRouter } from "next/router";
import { useState } from "react";
import { useCreateComment } from "../hooks/comment.hooks";
import { CommentFormFieldsType } from "../lib/types/entries.type";
import { Game } from "../lib/types/game.type";
import Modal from "./Modal";

const CommentModal = ({ game }: { game: Game }) => {
  const [commentFormFields, setCommentFormFields] =
    useState<CommentFormFieldsType>({
      description: "",
      rating: 5,
    });

  const router = useRouter();

  const handleCreateComment = useCreateComment();
  return (
    <Modal id="comment-modal" label="Add review">
      <h3 className="font-bold text-lg">To add a review complete the form</h3>
      <textarea
        className="textarea textarea-primary w-full mt-5"
        placeholder="Write your review"
        onChange={(e) =>
          setCommentFormFields({
            ...commentFormFields,
            description: e.target.value,
          })
        }
      ></textarea>
      <div className="flex justify-center mt-4">
        <div className="rating lg:rating-lg">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400"
            onChange={(e) =>
              setCommentFormFields({
                ...commentFormFields,
                rating: 1,
              })
            }
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400"
            onChange={(e) =>
              setCommentFormFields({
                ...commentFormFields,
                rating: 2,
              })
            }
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400"
            onChange={(e) =>
              setCommentFormFields({
                ...commentFormFields,
                rating: 3,
              })
            }
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400"
            onChange={(e) =>
              setCommentFormFields({
                ...commentFormFields,
                rating: 4,
              })
            }
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400"
            onChange={(e) =>
              setCommentFormFields({
                ...commentFormFields,
                rating: 5,
              })
            }
          />
        </div>
      </div>
      <div className="modal-action">
        <button
          className="btn btn-primary"
          onClick={() =>
            handleCreateComment(commentFormFields, game.id, router)
          }
        >
          Create
        </button>
      </div>
    </Modal>
  );
};

export default CommentModal;
