export const createAdaptedSubject = (subject) => {
  const adaptedSubjects = [];
  subject.forEach((object) => {
    const formatedSubject = {
      teacherName: object.name,
      subjectName: object.subjectName,
      idSubject: object.idSubject,
      idTeacher: object.idTeacher,
      code : object.code,
    };
    adaptedSubjects.push(formatedSubject);
  });
  return adaptedSubjects;
};
