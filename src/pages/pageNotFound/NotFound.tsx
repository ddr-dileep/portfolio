import { memo } from "react";
import "./not-found.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const gotoHome = (e:any) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="page-not-found">
      <h1>404</h1>
      <button className="button" onClick={gotoHome}>
        <i className="icon-home"></i> Go back Home page.
      </button>
    </div>
  );
};

export default memo(NotFound);
