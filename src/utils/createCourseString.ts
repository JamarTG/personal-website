const createCourseString = (department: string, code: string) => {
  return `${department.toLocaleUpperCase()} ${code}`;
};

export default createCourseString;
