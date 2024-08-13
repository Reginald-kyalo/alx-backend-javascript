export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, student) => student.id + acc, 0);
}
