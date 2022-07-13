import { useNavigate } from "react-router-dom";
import errorimg from "../../assets/errorimg.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={errorimg} alt="name" />
      <div>
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
