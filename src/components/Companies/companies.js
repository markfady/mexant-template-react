import "./Companies.css";
import Image1 from "../../images/client-01.png";
import Column from "./Column";
export default function Companies() {
  return (
    <>
      <div className="companies mt-5">
        <div className="container">
          <span className="row">
            <Column source={Image1} />
            <Column source={Image1} />
            <Column source={Image1} />
            <Column source={Image1} />
            <Column source={Image1} />
            <Column source={Image1} />
          </span>
        </div>
      </div>
    </>
  );
}
