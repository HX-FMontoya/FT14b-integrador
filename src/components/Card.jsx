import { Link } from "react-router-dom";
export default function Card({ character, onClose }) {
  const { id, name, species, gender, origin, image, status } = character;
  return (
    <div id={id}>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin?.name}</h2>
      <img src={image} alt="Not found" />
    </div>
  );
}
