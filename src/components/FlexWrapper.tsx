import React, { ReactNode } from "react";

const FlexWrapper: React.FC<{
  children: ReactNode;
  className?: string;
  direction: "row" | "column";
  gap?: number;
}> = ({ children, direction, gap, className }) => {
  return (
    <section
      className={className}
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: "center",
        alignItems: "center",
        gap: `${gap && 0}px`,
      }}
    >
      {children}
    </section>
  );
};

export default FlexWrapper;
