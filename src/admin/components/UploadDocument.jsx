// import React, { useState } from "react";
// import axios from "axios"; // Ensure axios is imported

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// const DocumentUpload = ({ role, username }) => {
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return alert("Please select a file");
//     setLoading(true);
//     setMessage("");

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("username", username);
//     formData.append("title", title);
//     formData.append("description", description);

//     try {
//       const endpoint = role === "admin" ? "/admin/document" : "/user/document";
//       const response = await axios.post(`${API_BASE_URL}${endpoint}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage("Error uploading document");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Document</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={loading}>
//         {loading ? "Uploading..." : "Upload"}
//       </button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default DocumentUpload;



// import { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import style from "../styles/addinvest.module.css";

// function PostDocument({ role }) {
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//   const token = localStorage.getItem("authToken"); // Use adminAuthToken for admin uploads

//   // Handle file selection
//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   // Upload document function
//   const handleUpload = async (e) => {
//     e.preventDefault();
    
//     if (!file || !title || !description) {
//       toast.error("Please fill in all fields and select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("title", title);
//     formData.append("description", description);

//     try {
//       setLoading(true);
//       const endpoint =
//         role === "admin" ? "/admin/document" : "/user/document";

//       const response = await axios.post(`${API_BASE_URL}${endpoint}`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       toast.success(response.data.message || "Document uploaded successfully");
//       setFile(null);
//       setTitle("");
//       setDescription("");
//     } catch (error) {
//       toast.error("Error uploading document. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={style.postDocumentContainer}>
//       <ToastContainer />
//       <h3>{role === "admin" ? "Upload Document for a User" : "Upload Your Document"}</h3>
      
//       <form onSubmit={handleUpload} className={style.documentForm}>
//         <input
//           type="text"
//           placeholder="Document Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <textarea
//           placeholder="Short Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         ></textarea>

//         <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" required />

//         <button type="submit" disabled={loading}>
//           {loading ? "Uploading..." : "Upload Document"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default PostDocument;



import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import style from "../styles/addinvest.module.css";

const AdminUploadDocument = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState(""); // The user to assign the document to
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !title || !description || !username) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("username", username);

    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${API_BASE_URL}/admin/document`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(response.data.message || "Document uploaded successfully");      
      setMessage(response.data.message);
    } catch (error) {
        toast.error("Error uploading document. Please try again.");
      setMessage(error.response?.data?.message || "Error uploading document.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.postDocumentContainer}>
      <h2>Admin Upload Document</h2>
      <form action="" className={style.documentForm}>
      <input type="text" placeholder="User's Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>{loading ? "Uploading..." : "Upload"}</button>
      {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default AdminUploadDocument;
