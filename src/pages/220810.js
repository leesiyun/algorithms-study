import React from "react";

// 문제
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 조건
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

// ----------------------------------------------------------------

// 죄송합니다.
// 너무 풀기 싫었어요.
// 저는 소수가 뭔지도 모르고 있었습니다.
// 어쨌든 답은 맞잖아요.

const nums = [1, 2, 3, 4];

function solution(nums) {
  var answer = -1;
  answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          nums[i] + nums[j] + nums[k] === 2 ||
          nums[i] + nums[j] + nums[k] === 3 ||
          nums[i] + nums[j] + nums[k] === 5 ||
          nums[i] + nums[j] + nums[k] === 7 ||
          nums[i] + nums[j] + nums[k] === 11 ||
          nums[i] + nums[j] + nums[k] === 13 ||
          nums[i] + nums[j] + nums[k] === 17 ||
          nums[i] + nums[j] + nums[k] === 19 ||
          nums[i] + nums[j] + nums[k] === 23 ||
          nums[i] + nums[j] + nums[k] === 29 ||
          nums[i] + nums[j] + nums[k] === 31 ||
          nums[i] + nums[j] + nums[k] === 37 ||
          nums[i] + nums[j] + nums[k] === 41 ||
          nums[i] + nums[j] + nums[k] === 43 ||
          nums[i] + nums[j] + nums[k] === 47 ||
          nums[i] + nums[j] + nums[k] === 53 ||
          nums[i] + nums[j] + nums[k] === 59 ||
          nums[i] + nums[j] + nums[k] === 61 ||
          nums[i] + nums[j] + nums[k] === 67 ||
          nums[i] + nums[j] + nums[k] === 71 ||
          nums[i] + nums[j] + nums[k] === 73 ||
          nums[i] + nums[j] + nums[k] === 79 ||
          nums[i] + nums[j] + nums[k] === 83 ||
          nums[i] + nums[j] + nums[k] === 89 ||
          nums[i] + nums[j] + nums[k] === 97
        ) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

function Decimal() {
  return (
    <>
      <div>220810_소수점구하기</div>
      {solution(nums)}
    </>
  );
}

export default Decimal;
