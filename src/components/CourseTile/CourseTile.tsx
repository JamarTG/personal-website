import React from "react";
import createTimeString from "../../utils/createTimeString";
import "./CourseTile.css";

interface Time {
  hours: number;
  minutes: number;
}

interface CourseData {
  departmentAbbr?: string;
  code?: number;
  location?: string;
  startTime?: Time;
  endTime?: Time;
  rowSpan?: number;
}

const CourseTile: React.FC<CourseData> = ({
  departmentAbbr,
  code,
  location,
  startTime,
  endTime,
  rowSpan = 1,
}: CourseData) => {
  const isEmptyCourse =
    !departmentAbbr && !code && !location && !startTime && !endTime;

  return (
    <div
      
      className={`tile row-span-${rowSpan} ${"bg-gray-100 p-4  shadow-md"}`}
    >
      {isEmptyCourse ? (
        <p className="text-gray-500 italic">
          Empty Course Tile
        </p>
      ) : (
        <div className="">
          <div>
            <p className="text-lg font-semibold">
              {departmentAbbr}
              {code}
            </p>
            <p className="text-gray-600">{location}</p>
          </div>

          {startTime && endTime && (
            <p className="text-sm text-blue-500">
              {createTimeString(startTime)} - {createTimeString(endTime)}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseTile;
