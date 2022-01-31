function callback(params) {
  console.log("this is a callback", params);
}

callback();
console.log("this is the first index.js for this tutorial");

console.log("this log for second commit");

let temp = "this variable for just commit";
console.log("log:", temp);

/**
 * git add -p option을 사용하려면
 * 꽤 긴 양의 코드작성이 필요해 보입니다.
 * 한 화면에 보기 어려운 항목을 add하기 위한 기능으로 보이므로
 * 우선은 direct commit 부터 연습해 보겠습니다.
 */
console.log("direct commit");

/**
 * 다른 파일까지 함께 올라가는지 확인하기 위해 temp.js를 만들고
 * 현재 파일에서 direct commit을 실시해 보겠습니다.
 *
 * 결과는요?
 * -> 의도하지 않은 파일까지 --all 옵션과 동일하게 동작하는 것을 볼 수 있었습니다.
 */
