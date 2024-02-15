export default function Component1(props) {
  const children = props.children;

  return (
    <div>
      <h1>Component 1</h1>
      <h1>Footer</h1>
      {children}
    </div>
  );
}
