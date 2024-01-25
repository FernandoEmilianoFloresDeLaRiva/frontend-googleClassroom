export const createAdaptedTask = (tasks) => {
  const adaptedtasks = [];
  tasks.forEach((object) => {
    const formatedTask = {
      idWork: object.idWork,
      workName: object.workName,
      date: object.date,
      subjectName: object?.subjectName || "",
    };
    adaptedtasks.push(formatedTask);
  });
  return adaptedtasks;
};
