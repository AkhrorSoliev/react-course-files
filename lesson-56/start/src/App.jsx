import { useState } from "react";
import gallerey from "./data";

function App() {
  const [images, setImages] = useState(gallerey);
  return (
    <div className="images-container">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.url} alt="" />
            <div className="buttons-container">
              <button>👍 {image.likes}</button>
              <button>👎 {image.disLikes}</button>
              <button>🗑</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
