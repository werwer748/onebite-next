import style from "./index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

//? getLayout을 설정하지 않으면 기본 레이아웃이 적용됨
// Home.getLayout = (page: ReactNode) => {
//   return <SearchableLayout>{page}</SearchableLayout>
// }