import { useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Silent Forest",
      author: "Arjun Mehta",
      published_date: "2022-01-02",
      genre: "Mystery",
      isbn: "978-93-12345-01-2",
      price: 399.0,
      rating: 4.5,
      pages: 320,
      language: "English",
      publisher: "BlueLeaf Publications",
      available: true,
    },
    {
      id: 2,
      title: "Code Beyond Logic",
      author: "Reshul Wate",
      published_date: "2023-03-15",
      genre: "Technology",
      isbn: "978-93-12345-02-9",
      price: 599.0,
      rating: 4.8,
      pages: 410,
      language: "English",
      publisher: "TechVerse",
      available: true,
    },
    {
      id: 3,
      title: "Echoes of Time",
      author: "Neha Sharma",
      published_date: "2021-11-21",
      genre: "Historical Fiction",
      isbn: "978-93-12345-03-6",
      price: 299.0,
      rating: 4.1,
      pages: 280,
      language: "Hindi",
      publisher: "Saffron Ink",
      available: false,
    },
    {
      id: 4,
      title: "AI for Humans",
      author: "Dr. Vikram Rao",
      published_date: "2024-06-10",
      genre: "Artificial Intelligence",
      isbn: "978-93-12345-04-3",
      price: 749.0,
      rating: 4.9,
      pages: 520,
      language: "English",
      publisher: "FutureMind Press",
      available: true,
    },
    {
      id: 5,
      title: "Minimal Life",
      author: "Aanya Kapoor",
      published_date: "2020-09-05",
      genre: "Self Help",
      isbn: "978-93-12345-05-0",
      price: 249.0,
      rating: 3.9,
      pages: 190,
      language: "English",
      publisher: "ZenHouse",
      available: true,
    },
    {
      id: 6,
      title: "The Last Algorithm",
      author: "Kunal Deshmukh",
      published_date: "2025-01-01",
      genre: "Sci-Fi",
      isbn: "978-93-12345-06-7",
      price: 899.0,
      rating: 4.7,
      pages: 610,
      language: "English",
      publisher: "Nova Reads",
      available: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-50 px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
            Library Dashboard
          </h1>
          <p className="text-indigo-700 mt-2">
            Manage your book collection efficiently
          </p>
        </div>

        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
          + Add Book
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => (
          <div
            key={book.id}
            className="group relative rounded-2xl bg-gradient-to-br from-white via-blue-50 to-indigo-50 
                       border border-blue-200 shadow-md hover:shadow-2xl 
                       hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300"
          >
            {/* Accent Bar */}
            <div className="h-2 rounded-t-2xl bg-gradient-to-r from-indigo-600 to-blue-500" />

            <div className="p-6">
              <h2 className="text-xl font-bold text-indigo-900 group-hover:text-blue-700 transition">
                {book.title}
              </h2>
              <p className="text-sm text-blue-600 mb-4">
                by {book.author}
              </p>

              {/* Meta */}
              <div className="space-y-2 text-sm text-slate-700">
                <p><span className="font-medium text-indigo-800">Genre:</span> {book.genre}</p>
                <p><span className="font-medium text-indigo-800">Publisher:</span> {book.publisher}</p>
                <p><span className="font-medium text-indigo-800">Language:</span> {book.language}</p>
                <p><span className="font-medium text-indigo-800">Pages:</span> {book.pages}</p>
                <p><span className="font-medium text-indigo-800">Rating:</span> ⭐ {book.rating}</p>
                <p><span className="font-medium text-indigo-800">Price:</span> ₹{book.price}</p>
              </div>

              {/* Status */}
              <div className="mt-4">
                {book.available ? (
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 ring-1 ring-blue-200">
                    Available
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-red-200">
                    Not Available
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="mt-6 flex justify-end gap-3">
                <button className="px-4 py-2 text-sm font-medium rounded-md border border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
