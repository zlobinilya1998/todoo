import { connect } from "react-redux";
import "./TooDooEmpty.css";

function TooDooEmpty({ questions }) {
  return (
    <div>
      {questions.length === 0 ? (
        <p className="tooDoo-empty">Ваш список задач пуст!</p>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questions,
});
const ConnectedTooDooEmpty = connect(mapStateToProps)(TooDooEmpty);

export default ConnectedTooDooEmpty;
