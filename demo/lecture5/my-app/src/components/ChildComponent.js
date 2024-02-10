export default function ChildComponent(props) {
  const { name, role, semesters } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Semesters: {semesters}</p>
    </div>
  );
}
