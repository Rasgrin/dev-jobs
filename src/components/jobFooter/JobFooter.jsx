import "./jobFooter.scss";

import { useParams } from "react-router-dom";
import { jobs } from "../../data/jobs";

const JobFooter = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === id);

  return (
    <div className="job-footer">
      <div className="content">
        <div className="left">
          <h1>{job.expertise}</h1>
          <h3>{job.company}</h3>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default JobFooter;
