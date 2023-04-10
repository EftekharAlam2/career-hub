import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="bg-lime-100 text-center pb-10">
        <p className="text-3xl font-bold p-20">Job Details</p>
      </div>
      {job.map((job) => (
        <div>
          <h1>{job.job_describtion}</h1>
        </div>
      ))}
    </div>
  );
};

export default JobDetail;
