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
