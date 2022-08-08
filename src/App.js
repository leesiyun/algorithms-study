const App = () => {
  const constraintCheck = (absolutes, signs) =>
    absolutes.length >= 1 &&
    absolutes.length <= 1000 &&
    absolutes.length === signs.length;

  const solution = (absolutes, signs) =>
    absolutes.reduce((acc, cur, i) => (signs[i] ? acc + cur : acc - cur), 0);

  const main = () => {
    const absolutes = [4, 7, 12];
    const signs = [true, false, true];

    const answer = constraintCheck(absolutes, signs)
      ? solution(absolutes, signs)
      : "constraint violated";

    console.log(answer);
  };

  main();

  return (
    <>
      <div></div>
    </>
  );
};

export default App;
