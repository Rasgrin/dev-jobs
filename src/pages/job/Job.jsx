import "./job.scss";

import CompanyTitle from "../../components/companyTitle/CompanyTitle";
import JobDescription from "../../components/jobDescription/JobDescription";

import { ScrollRestoration, useParams } from "react-router-dom";
import { jobs } from "../../data/jobs";

const Job = () => {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === id);

  return (
    <div className="job">
      <ScrollRestoration />

      <CompanyTitle data={job} />
      <JobDescription data={job} />
    </div>
  );
};

export default Job;
