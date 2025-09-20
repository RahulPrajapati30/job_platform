// src/components/Jobs.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreenhouseJobs } from "../redux/jobReducer";
// import Navbar from "../constant/Navbar";

const Jobs = ({ boardToken }) => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    if (boardToken) {
      dispatch(fetchGreenhouseJobs(boardToken));
    }
  }, [dispatch, boardToken]);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Job Listings
        </h2>
        {loading && <p className="text-center">Loading jobs...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs && jobs.length > 0 ? (
            jobs.map((job) => ( 
              <div
                key={job.id}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {job.title}
                </h3>
                {job.location && job.location.name && (
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Location: <span className="font-medium">{job.location.name}</span>
                  </p>
                )}
                <a
                  href={job.absolute_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  View Job
                </a>
              </div>
            ))
          ) : (
            !loading && <p className="text-center w-full">No jobs found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;