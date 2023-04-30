import { Link } from "react-router-dom";
import "./jobContainer.scss";

const JobContainer = ({ data }) => {
  return (
    <Link to={`/job/${data.id}`} className="container">
      <div className="top">
        <div className="pic-placeholder" style={{ background: data.color }}>
          <h3>{data.company.substring(0, 1)}</h3>
        </div>
        <p>{data.added} ago</p>
        <p>{data.type}</p>
      </div>
      <div className="middle">
        <h3>{data.expertise}</h3>
        <p>{data.company}</p>
      </div>
      <div className="bottom">
        <h4>{data.country}</h4>
      </div>
    </Link>
  );
};

export default JobContainer;
