import "./jobDescription.scss";

const JobDescription = ({ data }) => {
  return (
    <div className="job-description">
      <div className="job-title">
        <div className="top">
          <p>{data.added} ago</p>
          <p>{data.type}</p>
        </div>

        <div className="middle">
          <h1>{data.expertise}</h1>
          {/* <button>Apply Now</button> */}
        </div>

        <div className="bottom">
          <h2>{data.country}</h2>
        </div>
      </div>
      <div className="job-about">
        <p>{data.description}</p>
        <h2>Responsibilities</h2>
        <ul>
          {data.responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>

        <h2>Requirements</h2>
        <ul>
          {data.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>

        <h2>What you will do</h2>
        <ul>
          {data.toDo.map((stuff, i) => (
            <li key={i}>{stuff}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
