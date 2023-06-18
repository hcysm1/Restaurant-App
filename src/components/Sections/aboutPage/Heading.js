import Image from "../../../images/food4.webp";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={Image}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About us</h1>
      </div>
    </header>
  );
}
