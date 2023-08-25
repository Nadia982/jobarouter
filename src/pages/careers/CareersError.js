import { Link, useRouteError } from "react-router-dom";

export default function CareersError() {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h2 className="page-subheading">Error</h2>
      <p>{error.message}</p>
      <Link className="cta-link" to="/careers">Back to careers</Link>
    </div>
  );
}
