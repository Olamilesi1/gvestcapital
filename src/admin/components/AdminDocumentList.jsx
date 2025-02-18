import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import SideBar from "./AdminSideBar";
import AdminHeader from "./AdminHeader";
import style from "../styles/addinvest.module.css";

function AdminDocumentList() {
  const [documents, setDocuments] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserDocuments, setSelectedUserDocuments] = useState({
    userDocuments: [],
    adminDocuments: [],
  });
  const [loading, setLoading] = useState(true);
  const [toggleView, setToggleView] = useState("user"); // Default: Show user-uploaded docs
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const token = localStorage.getItem("adminAuthToken");

  // Fetch all user documents (Admin view)
  useEffect(() => {
    const fetchAllDocuments = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/admin/all-documents`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDocuments(response.data);
      } catch (error) {
        toast.error("Error fetching documents");
      } finally {
        setLoading(false);
      }
    };
    fetchAllDocuments();
  }, [API_BASE_URL, token]);

  // Fetch selected user's documents
  const fetchUserDocuments = async (username) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/admin/one-document/${username}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSelectedUser(username);
      setSelectedUserDocuments(response.data);
    } catch (error) {
      toast.error("Error fetching user documents");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.componentContent}>
      <ToastContainer />
      <SideBar />
      <div className={style.headerContent}>
        <AdminHeader />
        <div className={style.outline}>
          {loading ? (
            <p>Loading documents...</p>
          ) : (
            <>
              <h3>List of User Documents</h3>
              <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Title</th>
                    <th>Uploaded By</th>
                    <th>Upload Date</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr
                      key={doc._id}
                      onClick={() => fetchUserDocuments(doc.username)}
                    >
                      <td>{doc.username}</td>
                      <td>{doc.title}</td>
                      <td>{doc.uploadedBy}</td>
                      <td>{new Date(doc.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          onClick={() => fetchUserDocuments(doc.username)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Show toggle buttons when a user is selected */}
              {selectedUser && (
                <div className={style.toggleSection}>
                  <h3>Documents for {selectedUser}</h3>
                  <button
                    className={toggleView === "user" ? style.active : ""}
                    onClick={() => setToggleView("user")}
                  >
                    User-Uploaded Documents
                  </button>
                  <button
                    className={toggleView === "admin" ? style.active : ""}
                    onClick={() => setToggleView("admin")}
                  >
                    Admin-Uploaded Documents
                  </button>

                  {/* Display filtered documents based on toggle */}
                  <table>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Uploaded By</th>
                        <th>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(toggleView === "user"
                        ? selectedUserDocuments.userDocuments
                        : selectedUserDocuments.adminDocuments
                      ).map((doc) => (
                        <tr key={doc._id}>
                          <td>{doc.title}</td>
                          <td>{doc.description}</td>
                          <td>{doc.uploadedBy}</td>
                          <td>
                            <a
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Download
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDocumentList;
