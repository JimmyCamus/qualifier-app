import { Dispatch, SetStateAction, useState } from "react";
import { useSearch } from "../../hooks/search.hooks";
import { Game } from "../../lib/types/game.type";
import CategorySelect from "./CategorySelect";
import SearchInput from "./SearchInput";

const Search = ({
  setGames,
}: {
  setGames: Dispatch<SetStateAction<Game[]>>;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");

  const handleSearch = useSearch();
  const handleSubmit = (type: string) => {
    switch (type) {
      case "search":
        handleSearch({ title: inputValue, category: selectValue }, setGames);
        break;

      case "clean":
        handleSearch({}, setGames);
        setInputValue("");
        setSelectValue("");
        break;

      default:
        break;
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        className="btn btn-ghost mx-2"
        onClick={() => handleSubmit("clean")}
      >
        X
      </button>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <CategorySelect
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
      <button
        className="btn btn-secondary mx-2"
        onClick={() => handleSubmit("search")}
      >
        SEARCH
      </button>
    </div>
  );
};

export default Search;
