import { Link } from "react-router-dom";

function Result({ title, color, icon, correctAnswerCount, questionsLength }) {
  return (
    <div className="test-container result-container">
      <div className="home-content">
        <h1 className="home-title">
          <span>Quiz completed</span>
          <span>You scored...</span>
        </h1>
      </div>
      <div className="test-completed">
        <div className="test-completed-body">
          <div className="menu-item header-logo">
            <figure style={{ backgroundColor: color }}>
              <img src={`${icon}`} alt="" />
            </figure>
            <span>{title}</span>
          </div>
          <div className="big-text">{correctAnswerCount}</div>
          <p>out of {questionsLength}</p>
        </div>
        <Link className="btn" to="/">
          Play Again
        </Link>
      </div>
    </div>
  );
}

export default Result;
