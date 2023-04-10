import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import person1 from "/person1.png";

const HeaderOne = () => {
  const [values, setvalues] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setvalues(data));
  }, []);

  return (
    <div>
      <div className="navbar bg-lime-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/applied">Applied Jobs</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">JobLinkr</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/applied">Applied Jobs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
      <div className="bg-lime-100">
        <div className="flex flex-col md:flex-row md:mx-96 mb-5 md:mb-10">
          <div className="mx-10">
            <p className="text-7xl mt-5 md:mt-20">
              One Step <br /> Closer To Your <br />
              <sup className="text-red-500">Dream Job</sup>
            </p>
            <p className="text-slate-400">
              Explore thousands of job opportunities with all the <br />
              information you need. Its your future. Come find it. Manage all
              your job application from start to finish.
            </p>
            <button className="btn btn-warning mt-4 text-white">
              Get Started
            </button>
          </div>
          <div>
            <img src={person1} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-red-100">
        <div>
          <p className="text-center font-semibold text-4xl">
            Job Category List
          </p>
          <p className="text-center mt-5 text-slate-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {/* {values.map((value) => (
            <Category key={value.id} value={value}></Category>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HeaderOne;
