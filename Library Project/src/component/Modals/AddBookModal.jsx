import { useState } from "react";

const AddBookModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published_date: "",
    genre: "",
    isbn: "",
    price: "",
    rating: "",
    pages: "",
    language: "",
    publisher: "",
    available: true,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    const payload = {
      id: Date.now(), // temporary id
      title: String(formData.title),
      author: String(formData.author),
      published_date: String(formData.published_date),
      genre: String(formData.genre),
      isbn: String(formData.isbn),
      price: Number(formData.price),
      rating: Number(formData.rating),
      pages: Number(formData.pages),
      language: String(formData.language),
      publisher: String(formData.publisher),
      available: Boolean(formData.available),
    };

    console.log("New Book Payload:", payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-800">Add New Book</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="title" placeholder="Title" onChange={handleChange} className="input" />
          <input name="author" placeholder="Author" onChange={handleChange} className="input" />
          <input name="published_date" type="date" onChange={handleChange} className="input" />
          <input name="genre" placeholder="Genre" onChange={handleChange} className="input" />
          <input name="isbn" placeholder="ISBN" onChange={handleChange} className="input" />
          <input name="price" type="number" placeholder="Price" onChange={handleChange} className="input" />
          <input name="rating" type="number" step="0.1" placeholder="Rating" onChange={handleChange} className="input" />
          <input name="pages" type="number" placeholder="Pages" onChange={handleChange} className="input" />
          <input name="language" placeholder="Language" onChange={handleChange} className="input" />
          <input name="publisher" placeholder="Publisher" onChange={handleChange} className="input" />
        </div>

        {/* Available */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          <label className="text-sm text-gray-700">Available</label>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;
