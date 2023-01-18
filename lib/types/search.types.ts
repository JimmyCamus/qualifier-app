import { Dispatch, SetStateAction } from "react";

export type SearchInputEntries = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

export type CategorySelectEntries = {
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
};

export type QueryType = {
  title?: string;
  category?: string;
};
