import { SearchInputEntries } from "../../lib/types/search.types";

const SearchInput = ({ inputValue, setInputValue }: SearchInputEntries) => {
  return (
    <input
      type="text"
      placeholder="Serach game"
      className="input input-bordered w-4/5 lg:w-full max-w-sm"
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
};

export default SearchInput;
