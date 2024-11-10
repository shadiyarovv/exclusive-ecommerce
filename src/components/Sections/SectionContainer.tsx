import React, { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return <section className="flex flex-col gap-10">{children}</section>;
};

export default SectionContainer;
