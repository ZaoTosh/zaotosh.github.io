export function Button() {
  const stamp = () => {
    console.log("Hello World");
  };
  return <button onClick={stamp}>Click</button>;
}
