import { CategorySelectEntries } from "../../lib/types/search.types";

const CategorySelect = ({
  selectValue,
  setSelectValue,
}: CategorySelectEntries) => {
  return (
    <select
      className="select select-bordered w-32 lg:w-48 mx-3"
      onChange={(e) => setSelectValue(e.target.value)}
      value={selectValue}
    >
      <option value="" disabled>
        Category
      </option>
      <option value="">all</option>
      <option value="action">action</option>
      <option value="rpg">rpg</option>
    </select>
  );
};

export default CategorySelect;
