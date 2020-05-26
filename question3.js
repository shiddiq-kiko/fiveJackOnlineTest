/* A Candidate Key is an attribute or a set of attributes that can uniquely identify a tuple of a relation in the relational database and satisfies the following two properties.

- Uniqueness: The relation does not have two distinct tuples (i.e. rows or records in common database language) with the same values for these attributes.
- Minimality: There should no subset of these attributes satisfy uniqueness, which means if we exclude one of these attributes, then uniqueness will be broken.

[Student number, Name, Major, Grade]

[100,”ryan”,”music”,2]
[200,”apeach”,”math”,2]
[300,”tube”,”computer”,3]
[400,”con”,”computer”,4]
[500,”muzi”,”music”,3]
[600,”apeach”,”music”,2]

In the above example, each student has a unique "student number".
Thus, the ["student number"] can be the candidate key of the relation.

Then, because there are students who use the same name ("apeach") for "name", "name" can not be a candidate key.

However, if you use ["name", "major"] together, all the tuples of the relation can be uniquely identified, so they can become candidate keys.

Of course, it is possible to uniquely identify all tuples in a relation using ["name", "major", "grade"], but it can not be a candidate key because it does not satisfy the minimum.

Therefore, the candidate key of the input above is ["student number"], ["name", "major"].

Find how many candidate keys are there for given array relation.

Answer Code format
function solution(relation) {
    var answer = 0;
    return answer;
}

Limitations
- relation is a two-dimensional string array.
- The length of the relation column is 1 ~ 8, and each column indicates the attribute of the relation.
- The length of the row of relation is 1 ~ 20, and each row represents a tuple of relations.
- The length of all strings in relation is 1 ~ 8, and consists of only lowercase letters and numbers.
- All tuples of relation are uniquely identifiable (ie, there are no duplicate tuples).

Input and output examples
relation: 
[[“100”,”ryan”,”music”,”2”],[“200”,”apeach”,”math”,”2”],[“300”,”tube”,”computer”,”3”],[“400”,”con”,”computer”,”4”],[“500”,”muzi”,”music”,”3”],[“600”,”apeach”,”music”,”2”]]

answer: 2
*/

function solution(relation) {
  let answer = 0;
  let candidate = [
    ["student number", true],
    ["name", true],
    ["major", true],
    ["grade", true],
    ["name", "major", true],
    ["major", "grade", true],
    ["name", "grade", true],
  ];
  for (let i = 0; i < relation.length; i++) {
    for (let j = i + 1; j < relation.length; j++) {
      if (relation[i][0] === relation[j][0]) {
        candidate[0][1] === false;
      }
      if (relation[i][1] === relation[j][1]) {
        candidate[1][1] = false;
      }
      if (relation[i][2] === relation[j][2]) {
        candidate[2][1] = false;
      }
      if (relation[i][3] === relation[j][3]) {
        candidate[3][1] = false;
      }
      if (
        relation[i][1] === relation[j][1] &&
        relation[i][2] === relation[j][2]
      ) {
        console.log(relation[i]);
        console.log("masuk");
        candidate[4][2] = false;
      }
      if (
        relation[i][3] === relation[j][3] &&
        relation[i][2] === relation[j][2]
      ) {
        candidate[5][2] = false;
      }
      if (
        relation[i][3] === relation[j][3] &&
        relation[i][1] === relation[j][1]
      ) {
        candidate[6][2] = false;
      }
    }
  }
  for (val of candidate) {
    if (val[val.length - 1] === true) {
      answer++;
    }
  }
  return answer;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
