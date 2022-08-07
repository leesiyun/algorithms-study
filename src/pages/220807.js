import React from "react";

// question
// 어떤 정수들이 있습니다.
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// limit
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

// 배열 생성
const absolutes = [4, 7, 12];
const signs = [true, false, true];

function Add() {
  //  absolutes가 없을 시 기본 값은 빈 배열이다 -> . 찍었을 때 함수들이 자동으로 안나오길래 생긴 습관이다.
  function solution(absolutes = [], signs) {
    // 기본값 왜 있는건지 모르겠다. 그냥 지우는게 맞는거 같은데 지우기 귀찮아서 그냥 문제의 일부분이라고 생각하고 푸는중이다.
    var answer = 123456789;
    // answer에 다 담아서 반환할 예정
    answer = 0;

    // signs[i]가 참 일 경우 absolutes[i]를 answer에 더한다
    // signs[i]가 거짓 일 경우 -absolutes[i] 를 answer 더한다
    for (let i = 0; i < absolutes.length; i++) {
      answer += signs[i] ? absolutes[i] : -absolutes[i];
    }
    return answer;
  }

  return (
    <>
      <div>220807_음양 더하기</div>
      <div>{solution(absolutes, signs)}</div>
    </>
  );
}

export default Add;
