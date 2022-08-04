const App = () => {
  let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
  // let numbers = [5, 8, 4, 0, 6, 7, 9];
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let answer = 0;

  arr.map((value) => {
    if (!numbers.includes(value)) answer += value;
    return answer;
  });

  return (
    <>
      <div>{answer}</div>
    </>
  );
};

export default App;
