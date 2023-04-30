import "./companyTitle.scss";

const CompanyTitle = ({ data }) => {
  return (
    <div className="company-title">
      <div className="pic-placeholder" style={{ background: data.color }}>
        <h1>{data.company.substring(0, 1)}</h1>
      </div>
      <div>
        <h1>{data.company}</h1>
        <p>{data.website}</p>
      </div>
      <button>About</button>
    </div>
  );
};

export default CompanyTitle;
