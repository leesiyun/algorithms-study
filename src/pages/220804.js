import React from "react";

// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 조건
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// ------------------------------------------------------------------------------------------

// test array
const num = [5, 8, 4, 0, 6, 7, 9];

function solution(numbers) {
  var answer = -1;
  // 반복문, 조건에 배열의 요소는 0~9 까지만 이라고 했으니 10번 반복문 돌린다
  for (let i = 0; i < 10; i++) {
    // 만약 num에 i가 포함되어 있지 않다면 answer에 i를 더한다
    // 이러면 정확히 어떤 숫자가 비어있는지 알 수 없지만 그 숫자를 알아내는게 문제의 의도가 아닌 것 같으니 패스
    if (!num.includes(i)) {
      answer += i;
    }
  }
  // 주어진 초기값이 answer이 -1 이었다 건들 수 없으니 반환할 때 1을 더해서 반환한다
  return answer + 1;
}

function EmptyNumber() {
  return (
    <>
      <p>220804_없는 숫자 더하기</p>
      {solution()}
    </>
  );
}

export default EmptyNumber;
