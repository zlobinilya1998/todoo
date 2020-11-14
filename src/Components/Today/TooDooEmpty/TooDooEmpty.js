import "./TooDooEmpty.css";

export default function TooDooEmpty({ tasks }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="tooDoo-empty">Ваш список задач пуст!</p>
      ) : null}
    </div>
  );
}
