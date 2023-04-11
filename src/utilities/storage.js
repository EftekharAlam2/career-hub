import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// use local storage to manage cart data
const addToDb = (id) => {
  let storageJob = getstorageJob();
  // add quantity
  const quantity = storageJob[id];
  if (quantity) {
    toast("This job is already been applied!!!");
    return;
  } else {
    storageJob[id] = 1;
  }
  localStorage.setItem("jobId", JSON.stringify(storageJob));
};

const removeFromDb = (id) => {
  const storageJob = getstorageJob();
  if (id in storageJob) {
    delete storageJob[id];
    localStorage.setItem("jobId", JSON.stringify(storageJob));
  }
};

const getstorageJob = () => {
  let storageJob = {};

  const storedCart = localStorage.getItem("jobId");
  if (storedCart) {
    storageJob = JSON.parse(storedCart);
  }
  return storageJob;
};

const deletestorageJob = () => {
  localStorage.removeItem("jobId");
};

export { addToDb, removeFromDb, deletestorageJob, getstorageJob };
