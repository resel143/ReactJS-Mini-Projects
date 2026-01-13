import { useEffect, useRef, useState } from "react";
import BookCard from "../../component/BookCard";
import AddBookModal from "../../component/Modals/AddBookModal";
import EditBookModal from "../../component/Modals/EditBookModal";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [search, setSearch] = useState("")
  const debounceTimer = useRef(null);

    const fetchBooks = () => {
      fetch("http://127.0.0.1:8000/api/books/")
        .then((res) => res.json())
        .then((res) => setBooks(res.data))
        .catch((err) => console.error(err));
    };


    useEffect(() => {
      fetchBooks();
    }, []);

    
  const openEditModal = (book) => {
    setSelectedBook(book);
    setIsEditOpen(true);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      console.log("Search value:", value);

      fetch(`http://127.0.0.1:8000/api/books/${value}`)
        .then((res) => res.json())
        .then((res) => setBooks(res.data))
        .catch((err) => console.error(err));
    }, 500);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-50 px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent">
            Library Dashboard
          </h1>
          <p className="text-indigo-700 mt-2">
            Manage your book collection efficiently
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg shadow-lg"
        >
          + Add Book
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-8 flex justify-end">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by title..."
          className="w-full sm:w-80 px-4 py-2 rounded-lg border border-indigo-300 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onSuccess={() => fetchBooks()} onEdit={openEditModal}/>
        ))}
      </div>

      {/* Modal */}
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => fetchBooks()}
      />

      <EditBookModal
        isOpen={isEditOpen}
        book={selectedBook}
        onClose={() => setIsEditOpen(false)}
        onSuccess={() => fetchBooks()}
      />
    </div>
  );
};

export default Home;
