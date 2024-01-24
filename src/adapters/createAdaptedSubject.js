export const createAdaptedSubject = (subject) => {
  const adaptedSubjects = [];
  subject.forEach((object) => {
    const formatedSubject = {
      teacherName: object.name,
      subjectName: object.subjectName,
      idSubject: object.idSubject,
      idTeacher: object.idTeacher,
    };
    adaptedSubjects.push(formatedSubject);
  });
  return adaptedSubjects;
};
