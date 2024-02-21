import { PropsWithChildren } from "react";

const CourseContainer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="grid grid-cols-7 grid-rows-10 gap-4 bg-gray-200 border border-gray-300 p-4">
      {children}
    </div>
  );
};
export default CourseContainer;
