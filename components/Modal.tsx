import { useState } from "react";
import { useCreateComment } from "../hooks/comment.hooks";
import { CommentFormFieldsType } from "../lib/types/entries.type";
import { Game } from "../lib/types/game.type";

const Modal = ({ game }: { game: Game }) => {
  const [commentFormFields, setCommentFormFields] =
    useState<CommentFormFieldsType>({
      description: "",
      rating: 5,
    });

  const handleCreateComment = useCreateComment();
  return (
    <>
      <label htmlFor="my-modal-3" className="btn btn-primary">
        Add Review
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            To add a review complete the form
          </h3>
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
              className="btn"
              onClick={() => handleCreateComment(commentFormFields, game.id)}
            >
              Yay!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
