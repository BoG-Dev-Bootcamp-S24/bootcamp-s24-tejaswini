import ChildComponent from "./ChildComponent";

const data = [
  {
    name: "Arnav",
    role: "instructor",
    semesters: 2,
  },
  {
    name: "Yolanda",
    role: "ta",
    semesters: 3,
  },
  {
    name: "Charlie",
    role: "ta",
    semesters: 3,
  },
];

export default function ParentComponent() {
  return (
    <div>
      <h1>Bits of Good Developer Bootcamp Directory</h1>
      {data.map((person) => {
        return <ChildComponent {...person} />;
      })}
    </div>
  );
}
