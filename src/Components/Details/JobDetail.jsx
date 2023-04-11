import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import vector1 from "/Icons/Vector.png";
import vector2 from "/Icons/Vector-1.png";

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
          <div className="flex">
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
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobDetail;
