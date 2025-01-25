import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({
  children
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  
  const q = router.query.q as string;
  
  useEffect(() => {
    setSearch(q || "")
  }, [q])
  
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  };
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || q === search) {
      return;
    }
    router.push(`/search?q=${search}`);
  };
  
  //* 키이벤트로 처리하기
  // const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     onSubmit();
  //   }
  // };
  
  return (
    <div>
      {/* form사용해서 submit 처리하기*/}
      <form className={style.searchbar_container} onSubmit={onSubmit}>
        <input
          value={search}
          onChange={onChangeSearch}
          // onKeyDown={onKeyDown}
          placeholder={"검색어를 입력하세요..."}
        />
        <button type={"submit"}>검색</button>
      </form>
      {children}
    </div>
  );
}