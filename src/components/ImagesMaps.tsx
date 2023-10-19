import "../index.css";
import image1 from "../assets/sad_dog.jpg";
import image2 from "../assets/run_dog.jpg";

function ImagesMaps() {
  const images = [image1, image2];

  const imageTags = images.map(image => (
    <img className="Images_map" src={image} alt={image} />
  ));

  return (
    <>
      <div>{imageTags}</div>
    </>
  );
}

export default ImagesMaps;
