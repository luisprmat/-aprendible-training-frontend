import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch('http://books-backend.test/api/books')
  const data = await res.json()

  return {
    props: {
      books: data
    }
  }
}

const BookList = ({ books }) => {
  return (
    <div>
      <h1>Libros</h1>
      <ul>
        {books.map(book => (
          <li key={`book-${book.id}`}>{book.title}</li>
        ))}
      </ul>

      <Link href="/libros/crear">Create Book</Link>
    </div>
  );
};

export default BookList;
