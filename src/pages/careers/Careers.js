import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return <div className="careers">
    {careers.map(career =>(
        <Link to={career.id.toString()} key={career.id}>
            <div className="career-card">
            <p>{career.title}</p>
            <p>{career.location}</p>
            </div>
        </Link>
    ))}
  </div>;
}

//loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json();
};
