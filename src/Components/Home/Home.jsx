import React, { useEffect, useState } from "react";
import person1 from "/person1.png";
import location from "/Icons/Frame-4.png";
import salary from "/Icons/Frame.png";
import Categories from "./Categories";
import { Link } from "react-router-dom";

const Home = () => {
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
      <div>
        <div>
          <p className="text-center font-semibold text-4xl">Featured Jobs</p>
          <p className="text-center mt-5 text-slate-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5  ms-2 md:mx-96">
          {jobsToShow.map((job) => (
            <div key={job.id} className="card w-100 shadow-xl">
              <div className="w-25 ms-8 mt-10">
                <img src={job.company_logo} alt="" />
              </div>
              <div className="card-body">
                <p className="card-title text-2xl">{job.job_title}</p>
                <p className="text-lg text-slate-400">{job.company_name}</p>
                <div className="flex gap-4">
                  <div>
                    <button className="btn btn-outline btn-success">
                      {job.site}
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-outline btn-success">
                      {job.time}
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 text-slate-500">
                  <div className="flex gap-1">
                    <div>
                      <img src={location} alt="" />
                    </div>
                    <div>{job.location}</div>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      <img src={salary} alt="" />
                    </div>
                    <div>{job.salary}</div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-warning mt-4 text-white">
                    <Link to={`/details/${job.id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-5">
          {!showAllJobs && (
            <button
              onClick={() => setShowAllJobs(true)}
              className="btn btn-warning mt-4 text-white"
            >
              See All Jobs
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
