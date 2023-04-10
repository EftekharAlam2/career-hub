import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import person1 from "/person1.png";
import location from "/Logo/Frame-4.png";
import Categories from "./Categories";

const HeaderOne = () => {
  const [values, setvalues] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setvalues(data));
  }, []);

  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);

  const [showAllJobs, setShowAllJobs] = useState(false);
  const jobsToShow = showAllJobs ? jobsData : jobsData.slice(0, 4);

  return (
    <div>
      {/* Nav bar Section */}
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

      {/* Header Section */}
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

      {/* Job Category Section */}
      <div>
        <div>
          <p className="text-center font-semibold text-4xl">
            Job Category List
          </p>
          <p className="text-center mt-5 text-slate-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mt-5 mb-5 ms-2 md:mx-14">
          {values.map((value) => (
            <Categories key={value.id} value={value}></Categories>
          ))}
        </div>
      </div>

      {/* Job Featured Section */}
      <div className="bg-red-100">
        <div>
          <p className="text-center font-semibold text-4xl">Featured Jobs</p>
          <p className="text-center mt-5 text-slate-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 mb-5 ms-2 md:mx-96">
          {jobsToShow.map((job) => (
            <div className="card w-96 shadow-xl bg-lime-100">
              <div className="w-25 ms-8 mt-10">
                <img src={job.company_logo} alt="" />
              </div>
              <div className="card-body">
                <p className="card-title text-2xl">{job.job_title}</p>
                <p className="text-lg text-slate-400">{job.company_name}</p>
                <div className="flex gap-4">
                  <div>
                    <button class="btn btn-outline btn-success">
                      {job.site}
                    </button>
                  </div>
                  <div>
                    <button class="btn btn-outline btn-success">
                      {job.time}
                    </button>
                  </div>
                </div>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderOne;
