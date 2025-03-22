import { listTulisan } from "../../../data/tulisan";
import { CardArticle } from "../../ui/card";
import { FormCari } from "../../ui/search";
import { SubTitle } from "../../ui/sub-tittle";
import { categories } from "../../../data/category";
import { SearchCategory } from "../../ui/search-category";
import { useSearchParams } from "react-router";
import React, { useCallback, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";

export const TulisanIndex = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("s") || "");
  const activeCategory = searchParams.get("cat");

  //mengecek category
  const handleActiveCategory = (category: string) => {
    if (activeCategory === category) {
      setSearchParams((prevParams) => {
        prevParams.delete("cat");
        if (!prevParams.get("s")) {
          setSearch(""); // Reset search jika kategori dihapus dan tidak ada pencarian lain
        }
        return prevParams;
      });
    } else {
      setSearchParams((prevParams) => {
        prevParams.set("cat", category);
        return prevParams;
      });
    }
  };

  const debounceSearch = useRef(
    debounce((term: string) => {
      if (term) {
        setSearchParams((prevParams) => {
          prevParams.set("s", term);
          return prevParams;
        });
      } else {
        setSearchParams((prevParams) => {
          prevParams.delete("s");
          return prevParams;
        });
      }
    }, 100),
  );

  const handleSearch = useCallback((term: string) => {
    debounceSearch.current(term);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearch(term);
    handleSearch(term);
  };

  const filteredTulisan = useMemo(() => {
    let filtered = listTulisan;
    if (activeCategory) {
      filtered = filtered.filter(
        (tulisan) => tulisan.category === activeCategory,
      );
    }

    const searchParam = searchParams.get("s");

    if (searchParam) {
      filtered = filtered.filter((tulisan) =>
        tulisan.title
          .toLocaleLowerCase()
          .includes(searchParam.toLocaleLowerCase()),
      );
    }

    return filtered;
  }, [activeCategory, searchParams]);

  return (
    <div className="mx-auto w-full max-w-6xl py-28">
      <SubTitle margin="center" title="Tulisan Kawan" />

      <FormCari
        placeholder="Cari tulisan..."
        value={search}
        onChange={handleSearchChange}
      />
      <div className="flex flex-col-reverse gap-10 md:flex-row">
        <div className="basis-3/4 gap-5">
          {filteredTulisan.length > 0 ? (
            filteredTulisan.map((tulisan, index) => (
              <CardArticle
                key={tulisan.id}
                {...tulisan}
                index={index}
                type="tulisan"
              />
            ))
          ) : (
            <p className="text-base font-normal text-red-500">
              Tulisan tidak ditemukan
            </p>
          )}
        </div>
        <div className="mx-4 basis-1/4 md:mx-0">
          <h3 className="mb-5 text-base font-medium text-primaryColor">
            Cari berdasarkan category
          </h3>
          <div className="flex w-full flex-wrap gap-2">
            {categories.map((category, index) => (
              <SearchCategory
                key={index}
                index={index}
                category={category}
                onClick={() => handleActiveCategory(category)}
                categoryActive={activeCategory === category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
