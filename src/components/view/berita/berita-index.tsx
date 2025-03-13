import { listBerita } from "../../../data/berita";
import { CardBerita } from "../../ui/card";
import { FormCari } from "../../ui/search";
import { SubTitle } from "../../ui/sub-tittle";
import { categories } from "../../../data/category";
import { SearchCategory } from "../../ui/search-category";
import { useSearchParams } from "react-router";
import React, { useCallback, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";

export const BeritaIndex = () => {
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
    }, 100)
  );

  const handleSearch = useCallback((term: string) => {
    debounceSearch.current(term);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearch(term);
    handleSearch(term);
  };

  const filteredBerita = useMemo(() => {
    let filtered = listBerita;
    if (activeCategory) {
      filtered = filtered.filter(
        (berita) => berita.category === activeCategory
      );
    }

    const searchParam = searchParams.get("s");

    if (searchParam) {
      filtered = filtered.filter((berita) =>
        berita.title
          .toLocaleLowerCase()
          .includes(searchParam.toLocaleLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchParams]);

  return (
    <div className="max-w-6xl mx-auto w-full py-20">
      <SubTitle margin="center" title="Berita dari Kampung" />

      <FormCari
        placeholder="Cari berita..."
        value={search}
        onChange={handleSearchChange}
      />
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="basis-3/4 flex flex-col gap-5  ">
          {filteredBerita.length > 0 ? (
            filteredBerita.map((berita, index) => (
              <CardBerita key={berita.id} {...berita} index={index} />
            ))
          ) : (
            <p className="text-base font-normal text-red-500">
              Berita tidak ditemukan
            </p>
          )}
        </div>
        <div className="basis-1/4 mx-4 md:mx-0 ">
          <h3 className=" text-base font-medium mb-5 text-primaryColor">
            Cari berdasarkan category
          </h3>
          <div className="w-full flex flex-wrap gap-2 ">
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
