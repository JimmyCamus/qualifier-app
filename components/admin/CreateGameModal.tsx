import { useState } from "react";
import { CreateGameFormType } from "../../lib/types/entries.type";
import Modal from "../Modal";

const CreateGameModal = ({
  handleCreateGame,
}: {
  handleCreateGame: Function;
}) => {
  const [formFields, setFormFields] = useState<CreateGameFormType>({
    title: "",
    description: "",
    categories: [],
    images: null,
  });
  const [categoryInput, setCategoryInput] = useState<string>("");
  const handleAddCategory = () => {
    setFormFields({
      ...formFields,
      categories: [...formFields.categories, categoryInput],
    });
  };

  const handleDeleteCategory = (categoryValue: string) => {
    const categories = formFields.categories.filter((category) =>
      category === categoryValue ? null : category
    );
    setFormFields({
      ...formFields,
      categories: categories,
    });
  };
  return (
    <Modal id="comment-modal" label="Add Game">
      <h3 className="font-bold text-lg">To add a game complete the form</h3>
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full mt-5"
        onChange={(e) =>
          setFormFields({
            ...formFields,
            title: e.target.value,
          })
        }
      />
      <textarea
        className="textarea textarea-bordered w-full mt-5"
        placeholder="Write a description"
        onChange={(e) =>
          setFormFields({
            ...formFields,
            description: e.target.value,
          })
        }
      ></textarea>
      <div className="flex flex-row items-baseline">
        <input
          type="text"
          placeholder="Add category"
          className="input input-bordered w-full mt-5 mr-2"
          onChange={(e) => setCategoryInput(e.target.value)}
        />
        <button className="btn" onClick={() => handleAddCategory()}>
          Add
        </button>
      </div>
      <div>
        {formFields.categories.map((category, index) => (
          <div key={index} className="flex flex-row items-baseline">
            <button
              className="btn btn-ghost"
              onClick={() => handleDeleteCategory(category)}
            >
              X
            </button>
            <span>{category}</span>
          </div>
        ))}
      </div>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        className="file-input file-input-bordered w-full mt-5"
        onChange={(e) =>
          setFormFields({
            ...formFields,
            images: e.target.files ? e.target.files[0] : null,
          })
        }
      />
      <div className="modal-action">
        <button
          className="btn btn-primary"
          onClick={() => handleCreateGame(formFields)}
        >
          Create
        </button>
      </div>
    </Modal>
  );
};

export default CreateGameModal;
