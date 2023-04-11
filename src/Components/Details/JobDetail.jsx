import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import vector1 from "/Icons/Vector.png";
import vector2 from "/Icons/Vector-1.png";
import salary from "/Icons/Frame.png";
import title from "/Icons/Frame-1.png";
import phone from "/Icons/Frame-2.png";
import email from "/Icons/Frame-3.png";
import location from "/Icons/Frame-4.png";
import { addToDb } from "../../utilities/storage";

const JobDetail = () => {
  const { id } = useParams();

  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);

  const job = jobsData.filter((jobsData) => jobsData.id === id);

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
              Job Details
            </h1>
          </div>
        </div>
      </div>
      {job.map((job) => (
        <div key={job.id} className="mt-10">
          <div className="flex flex-col md:flex-row gap-4 mx-3 md:mx-64 mb-5">
            <div>
              <p>
                <span className="text-lg font-semibold">Job Description: </span>
                <span className="text-lg text-slate-500">
                  {job.job_describtion}
                </span>
              </p>
              <p className="mt-5">
                <span className="text-lg font-semibold">
                  Job Responsibility:{" "}
                </span>
                <span className="text-lg text-slate-500">
                  {job.job_responsibility}
                </span>
              </p>
              <p className="mt-5 text-lg font-semibold">
                Educational Requirements:
              </p>
              <p className="mt-1 text-lg text-slate-500">
                {job.educational_requirements}
              </p>
              <p className="mt-5 text-lg font-semibold">Experiences:</p>
              <p className="mt-1 text-lg text-slate-500">{job.experience}</p>
            </div>
            <div>
              <div className="card shadow-xl bg-lime-100 w-96">
                <div className="card-body">
                  <p className="card-title text-xl mb-3">Job Details</p>
                  <hr />
                  <div className="flex gap-1 mt-2">
                    <div>
                      <img src={salary} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold">Salary: </span>
                      <span className="text-slate-500">
                        {job.salary} (Per Month)
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <div>
                      <img src={title} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold">Job Title: </span>
                      <span className="text-slate-500">{job.job_title}</span>
                    </div>
                  </div>
                  <p className="text-xl font-semibold mt-3 mb-2">
                    Contact Information
                  </p>
                  <hr />
                  <div className="flex gap-1 mt-2">
                    <div>
                      <img src={phone} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold">Phone: </span>
                      <span className="text-slate-500">{job.phone}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <div>
                      <img src={email} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold">Email: </span>
                      <span className="text-slate-500">{job.email}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <div>
                      <img src={location} alt="" />
                    </div>
                    <div>
                      <span className="font-semibold">Location: </span>
                      <span className="text-slate-500">{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  onClick={() => addToDb(job.id)}
                  className="btn btn-warning mt-4 text-white px-40"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobDetail;
