import style from "../styles/addinvest.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useHeader } from "../../components/HeaderContext";
import "react-toastify/dist/ReactToastify.css";
import { useAdmin } from "../../components/AdminContext";
import {NavLink, useNavigate} from 'react-router-dom'
import { useContext, useState, useEffect } from "react";

function AddInvestmentDetail() {
  return (
    <>
      <div className={style.investScheme}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />

        <p className={style.pHead}>Investment Plan Detail</p>

        <div className={style.schemes}>
          <button className={style.scheme}> <NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/add-invest' ><span>Investment Scheme</span></NavLink></button>
          <button className={style.scheme2}> <NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/add-property' ><span>Property Scheme</span></NavLink></button>
        </div>

        <div className={style.labe}>
          <label className={style.lab} htmlFor="">
            Title
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter investment title. Min 3 Character"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab} htmlFor="">
            Description
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter investment description. Min 3 Character"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab} htmlFor="">
            Select Currency
          </label>
          <select name="" id="" className={style.input}>
            <option value="">NGN</option>
            <option value="">Dollar</option>
          </select>
        </div>

        <div className={style.labe}>
          <label className={style.lab} htmlFor="">
            ROI Percentage
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your ROI percentage"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab} htmlFor="">
            Amount
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="100"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab} htmlFor="">
            Type
          </label>
          <select name="" id="" className={style.input}>
            <option value="">Buy Land</option>
            <option value="">Buy House</option>
          </select>
        </div>

        <div className={style.labe}>
          <label className={style.lab} htmlFor="">
            Investment Year
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="100"
            className={style.input}
          />
        </div>

        <div className={style.labe}>
          <label className={style.lab} htmlFor="">
           Attach File (png, jpeg, etc)
          </label>
          <input
            type="file"
            name=""
            id=""
             accept="image/*"
            placeholder="Click to Upload or Drag & Drop a File"
            className={style.inputFill}
          />
        </div>

        <button className={style.send}>
          Send{" "}
          <span class="material-symbols-outlined">keyboard_arrow_right</span>{" "}
        </button>
      </div>
    </>
  );
}

export default AddInvestmentDetail;
