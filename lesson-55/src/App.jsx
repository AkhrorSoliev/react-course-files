// react import
import { useReducer } from "react";

// data
import images from "./data";

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_LIKE": {
      return state.map((image) => {
        if (image.id == payload) {
          return { ...image, likes: image.likes + 1 };
        } else {
          return image;
        }
      });
    }
    case "ADD_DISLIKE": {
      return state.map((image) => {
        if (image.id == payload) {
          return { ...image, dislikes: image.dislikes + 1 };
        } else {
          return image;
        }
      });
    }
    case "DELETE_IMAGE": {
      return state.filter((image) => image.id !== payload);
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(changeState, images);

  console.log(state);

  return (
    <div className="images-container">
      {state.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.url} alt="" height={600} />
            <div className="buttons-container">
              <button
                onClick={() =>
                  dispatch({ type: "ADD_LIKE", payload: image.id })
                }
              >
                👍 {image.likes}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_DISLIKE", payload: image.id })
                }
              >
                👎 {image.dislikes}
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_IMAGE", payload: image.id })
                }
              >
                🗑️
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
