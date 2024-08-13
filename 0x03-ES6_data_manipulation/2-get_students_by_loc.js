export default function getStudentsByLocation(arr, str) {
  return arr.filter((student) => student.location === str);
}
