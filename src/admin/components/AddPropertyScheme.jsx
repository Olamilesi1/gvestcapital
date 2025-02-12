import style from "../styles/addinvest.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function AdminPropertyScheme() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    currency: "NGN",
    amount: "",
    propertyType: "",
    propertyLocation: "",
    propertyUnit: "",
    duration: "",
    features: [],
  });

  const [images, setImages] = useState([]); // Array for selected images

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureAdd = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setFormData({
        ...formData,
        features: [...formData.features, e.target.value.trim()],
      });
      e.target.value = "";
    }
  };

  const handleImageUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Prevent exceeding 5 images
    if (selectedFiles.length + images.length > 5) {
      toast.error("You can only upload up to 5 images.");
      return;
    }

    // Filter out duplicate files (based on name)
    const filteredFiles = selectedFiles.filter(
      (file) => !images.some((existingFile) => existingFile.name === file.name)
    );

    setImages([...images, ...filteredFiles]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data before sending:", formData);
    setLoading(true); // Start loading

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    // data.append("features", JSON.stringify(formData.features));
    data.append("features", JSON.stringify(formData.features || []));

    images.forEach((image) => data.append("images", image));

    try {
      await axios.post("http://localhost:4000/admin/properties", data);
      toast.success("Property added successfully!");
      setFormData({
        title: "",
        description: "",
        currency: "NGN",
        amount: "",
        propertyType: "",
        propertyLocation: "",
        propertyUnit: "",
        duration: "",
        features: [],
      });
      setImages([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add property. Try again.");
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <>
      <ToastContainer />
      <form className={style.investScheme} onSubmit={handleSubmit}>
        <p className={style.pHead}>Investment Plan Detail</p>

        <div className={style.schemes}>
          <button className={style.scheme}>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
              to="/admin/add-invest"
            >
              <span>Investment Scheme</span>
            </NavLink>
          </button>
          <button className={style.scheme2}>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : "")}
              to="/admin/add-property"
            >
              <span>Property Scheme</span>
            </NavLink>
          </button>
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Enter investment title"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Enter investment description"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Select Currency</label>
          <select
            name="currency"
            className={style.input}
            onChange={handleChange}
          >
            <option value="NGN">NGN</option>
            <option value="USD">USD</option>
          </select>
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Amount</label>
          <input
            type="text"
            name="amount"
            onChange={handleChange}
            placeholder="100"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Property Type</label>
          <select
            name="propertyType"
            className={style.input}
            onChange={handleChange}
            value={formData.propertyType} // Ensures state updates correctly
          >
            <option value="" disabled>
              Select Property Type
            </option>
            <option value="land">Land</option>
            <option value="house">House</option>
          </select>
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Property Location</label>
          <input
            type="text"
            name="propertyLocation"
            onChange={handleChange}
            placeholder="Brookshire"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Property Unit</label>
          <input
            type="text"
            name="propertyUnit"
            onChange={handleChange}
            placeholder="10"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Construction Duration</label>
          <input
            type="text"
            name="duration"
            onChange={handleChange}
            placeholder="18 Months"
            className={style.input}
          />
        </div>

        <div className={style.feature}>
          <input
            type="text"
            onKeyPress={handleFeatureAdd}
            placeholder="Press Enter to add feature"
          />
          {formData.features.map((feature, index) => (
            <span key={index} className={style.featureTag}>
              {feature}
            </span>
          ))}
        </div>

        <div className={style.labe}>
          <label className={style.lab}>Property Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className={style.inputFill}
          />

          {/* Image Preview */}
          <div className={style.imagePreviewContainer}>
            {images.map((image, index) => (
              <div key={index} className={style.imagePreview}>
                <img src={URL.createObjectURL(image)} alt="Preview" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                <button type="button" onClick={() => handleRemoveImage(index)}>X</button>
              </div>
            ))}
          </div>
        </div>
        {/* 
        <button className={style.send} type="submit">
          Send <span className="material-symbols-outlined">keyboard_arrow_right</span>
        </button> */}
        <button className={style.send} type="submit" disabled={loading}>
          {loading ? (
            <span className={style.spinner}></span> // Spinner when loading
          ) : (
            <>
              Send{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </>
          )}
        </button>
      </form>
    </>
  );
}

export default AdminPropertyScheme;
