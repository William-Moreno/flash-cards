import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectQuizzes } from "./quizzesSlice";

export default function Topic() {
  const quizzes = useSelector(selectQuizzes);
  let { quizId } = useParams();
  const quiz = quizzes[quizId];
  if (quiz) {
    return (
      <section>
        <h1>{quiz.name}</h1>
        <ul className="cards-list">
          {quiz.cardIds.map((id) => (
            <Card key={id} id={id} />
          ))}
        </ul>
        <Link to={ROUTES.newQuizRoute()} className="button center">
          Create a New Quiz
        </Link>
      </section>
    );
  } else {
    return (
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 22 }}>
        Add a quiz please
      </p>
    );
  }
}
