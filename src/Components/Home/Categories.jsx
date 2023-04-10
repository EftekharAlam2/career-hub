import React from "react";

const Categories = ({ value }) => {
  return (
    <div>
      <div className="card w-96 shadow-xl bg-lime-100">
        <div className="w-25 ms-8 mt-10">
          <img src={value.category_logo} alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">{value.category_name}</h1>
          <p className="text-sm text-slate-400">{value.job_available}</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
