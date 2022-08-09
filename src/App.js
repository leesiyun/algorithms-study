const App = () => {
  // const solution = (a, b) => a.reduce((acc, cur, i) => (acc += cur * b[i]), 0);

  const main = () => {
    const a = [1, 2, 3, 4];
    //const a = [-1, 0, 1];
    const b = [-3, -1, 0, 2];
    //const b = [1, 0, -1];

    const answer = (a, b) => a.reduce((acc, cur, i) => acc + cur * b[i], 0);

    console.log(answer(a, b));
  };

  main();

  return (
    <>
      <div></div>
    </>
  );
};

export default App;
