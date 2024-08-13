export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((student) => student.location === city)
    .map((student) => {
      const objGrades = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: objGrades ? objGrades.grade : 'N/A',
      };
    });
}
