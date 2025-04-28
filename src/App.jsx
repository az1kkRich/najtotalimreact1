import { useState } from "react";

function App() {
  const getContactsFromStorage = () => {
    const data = localStorage.getItem("contacts");
    return data ? JSON.parse(data) : [];
  };

  const [contacts, setContacts] = useState(getContactsFromStorage());
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    category: "family",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContacts = [...contacts, { ...formData, isLike: false }];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    setFormData({
      firstname: "",
      lastname: "",
      category: "family",
      phone: ""
    });
  };

  const toggleLike = (index) => {
    const updatedContacts = contacts.map((contact, i) =>
      i === index ? { ...contact, isLike: !contact.isLike } : contact
    );
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-wrap gap-5">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-1/3 p-2 border rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-1/3 p-2 border rounded"
        >
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="relatives">Relatives</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-1/2 p-2 border rounded"
        />
        <button type="submit" className="w-1/3 mx-auto p-2 bg-blue-500 text-white rounded">
          Save
        </button>
      </form>

      {/* Cards */}
      <div className="mt-8 space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="p-4 border rounded shadow space-y-2">
            <h2 className="text-lg font-bold">{contact.firstname} {contact.lastname}</h2>
            <p>Category: {contact.category}</p>
            <p>Phone: {contact.phone}</p>
            <button
              onClick={() => toggleLike(index)}
              className="border-red-500 border-2 p-2 rounded-2xl "
            >
              {contact.isLike ? "Liked " : "Like "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
