import React, { useEffect, useRef, useState } from "react";
import { getstorageJob } from "../../utilities/storage";
import vector1 from "/Icons/Vector.png";
import vector2 from "/Icons/Vector-1.png";
import location from "/Icons/Frame-4.png";
import salary from "/Icons/Frame.png";
import { Link } from "react-router-dom";

const JobApplied = () => {
  const [jobsData, setJobsData] = useState([]);
  const [job, setJob] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);

  const jobStored = [];

  useEffect(() => {
    const storedData = getstorageJob();

    for (const id in storedData) {
      const savedData = jobsData.find((job) => job.id === id);
      if (!savedData) {
        return;
      } else {
        jobStored.push(savedData);
      }
    }
    setJob(jobStored);
  }, [jobsData]);

  const filterBy = (value) => {
    const filter = job.filter((job) => job.site === value);
    setFilter(filter);
  };

  const jobsToShow = filter ? filter : job;

  return (
    <div>
      <div className="relative bg-lime-100 pb-6">
        <div className="flex items-center justify-between h-40">
          <img
            src={vector1}
            alt="Image 1"
            className="w-1/6 h-50 object-cover"
          />
          <img
            src={vector2}
            alt="Image 2"
            className="w-1/6 mb-40 h-50 object-cover"
          />
        </div>
        <div className=" absolute inset-0 ">
          <div className="text-black">
            <h1 className="text-3xl font-bold text-center pt-10">
              Applied Jobs
            </h1>
          </div>
        </div>
      </div>
      <div className="md:mx-96 mb-10">
        <div className="flex justify-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-warning mt-4 text-white m-1">
              Filter By
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => filterBy("Onsite")}>
                <a>Onsite Job</a>
              </li>
              <li onClick={() => filterBy("Remote")}>
                <a>Remote Job</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {jobsToShow.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row border-solid border-2 rounded border-gray-200 mt-10 p-5"
            >
              <div className="flex-initial md:w-1/3">
                <div className="flex items-center justify-center mt-12">
                  <div className="border-solid border-0 bg-gray-200 rounded py-12 px-5">
                    <img src={job.company_logo} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex-initial md:w-2/4">
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
                  <div className="flex gap-2 md:gap-4 text-slate-500">
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
                      <div>Salary: {job.salary}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-initial md:w-1/5">
                <div className="flex items-center justify-center md:mt-16">
                  <button className="btn btn-warning mt-4 text-white">
                    <Link to={`/details/${job.id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobApplied;
