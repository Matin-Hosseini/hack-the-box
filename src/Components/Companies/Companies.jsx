import "./Companies.css";

//data
import companies from "../../data/companies";

export default function Companies() {
  return (
    <div className="companies">
      {companies?.map((company) => (
        <Company key={company.id} {...company} />
      ))}
    </div>
  );
}

function Company({ name, img }) {
  return (
    <div className="company">
      <img src={img} alt={name} />
    </div>
  );
}
