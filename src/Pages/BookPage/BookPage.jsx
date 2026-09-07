import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
        try {
            const response =await fetch(
                `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
            );

            const data = await response.json();

            setBook(data);
        } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
    </div>
  );
};
export default BookPage;
