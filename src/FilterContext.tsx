import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export interface filterContext {
  searchQuery: string;
  setsearchQuery: (query: string) => void;
  selectedcategory: string;
  setselectedcategory: (category: string) => void;
  minprice: number | undefined;
  setminprice: (price: number | undefined) => void;
  maxprice: number | undefined;
  setmaxprice: (price: number | undefined) => void;
  keyword: string;
  setkeyword: (keyword: string) => void;
}

const FilterContext = createContext<filterContext | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedcategory, setselectedcategory] = useState<string>("");
  const [minprice, setminprice] = useState<number>();
  const [maxprice, setmaxprice] = useState<number>();
  const [searchQuery, setsearchQuery] = useState<string>("");
  const [keyword, setkeyword] = useState<string>("");
  return (
    <FilterContext.Provider
      value={{
        selectedcategory,
        searchQuery,
        maxprice,
        minprice,
        setkeyword,
        keyword,
        setmaxprice,
        setminprice,
        setsearchQuery,
        setselectedcategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw Error("provide filter conetxt here");
  }
  return context;
};
