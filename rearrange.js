let str = "baaba"
let N = str.length;
let S = {};
let final = Array(N).fill(0);
// S.a = 1
// S.b = 6
// S.a = S.a + 4
// console.log(S)
for (let i = 0; i < N; i++) {
  if (S[str.charAt(i)] > 0) {
    S[str.charAt(i)] = S[str.charAt(i)] + 1;
  } else {
    S[str.charAt(i)] = 1;
  }
}

let ON = Object.keys(S).length;
let keys = Object.keys(S);

console.log(S);
// for (let i = 0; i < ON; i++) {
//   let X = S[keys[i]];

//   for (let j = 0; j < X; j++) {
//     if (i % 2 == 0 && final[j * 2] == 0 ) {
//       final[j * 2] = keys[i];
//       S[keys[i]] = S[keys[i]] - 1;
//       if(S[keys[i]]==0){
//         delete S[keys[i]]
//       }
//     } else if(i % 2 == 1 && final[(j * 2)+1] == 0) {
//       final[(j * 2) + 1] = keys[i];
//       S[keys[i]] = S[keys[i]] - 1;
//       if(S[keys[i]]==0){
//         delete S[keys[i]]
//       }
//     }
//   }

// }
// ON = Object.keys(S).length;
// keys = Object.keys(S);
// for(let i=0;i<N;i++){
//     if(final[i]==0){
//         for(let j = 0; j<)
//     }
// }

final[0] = keys[0];
S[keys[0]] = S[keys[0]] - 1;
ON = Object.keys(S).length;
keys = Object.keys(S);

for (let i = 1; i < N; i++) {
  let k = 0;
  if (final[i] == 0) {
    for (let j = 0; j < ON; j++) {
      if (keys[j] != final[i - 1]) {
        k = keys[j];
        S[keys[j]] = S[keys[j]] - 1;
        if (S[keys[j]] == 0) {
          delete S[keys[j]];
          ON = Object.keys(S).length;
          keys = Object.keys(S);
        }
        console.log(final.join(""));
        break;
      } else {
        k = keys[0];
      }
    }
    final[i] = k;
  }
}
for (let i = 0; i < N - 1; i++) {
  if (final[i] === final[i + 1]) {
    final = [];
    final.push("");
  }
}
console.log(S);
console.log(str);
console.log(final.join(""));
