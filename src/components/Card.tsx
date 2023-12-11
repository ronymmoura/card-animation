import { useId } from "react";

interface Props {
  title: string;
  icon: string;
  description: string;
  image: string;
}

export default function Card({ title, icon, description, image }: Props) {
  const id = useId();
  
  return (
    <>
      <input type="radio" name="slide" id={id} />
      <label htmlFor={id} className="card" style={{
        backgroundImage: `url(${image})`
      }}>
        <div className="row">
          <div className="icon">{icon}</div>
          <div className="description">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </>
  )
}