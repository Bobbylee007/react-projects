import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://www.course-api.com/react-tabs-project";

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(jobs);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  // the destructuring is done belong the useState the loading() block to avoid error cause jobs is an empty array but affter loading jobs() is not empty
  const { company, dates, duties, title } = jobs[value];
  return (
    <>
      <section className="tabs-section">
        <div className="title-tabs">
          <h2>experiance</h2>
          <div className="underline"></div>
          <div className="jobs-center">
            {/* btn container */}
            <div className="btn-container">
              {jobs.map((item, index) => {
                return (
                  <button key={item.id} onClick={() => setValue(index)}
                  className={`job-btn ${index=== value && 'active'}`}
                  >
                    {item.company}
                  </button>
                );
              })}
            </div>
            {/*job info  */}
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="jobs-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc item-inline">
                    <FaAngleDoubleRight></FaAngleDoubleRight>
                    <p className="duty">{duty}</p>
                  </div>
                );
              })}
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
