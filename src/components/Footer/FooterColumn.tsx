import Link from "next/link";
import React from "react";

interface FooterColumnProps {
  title: string;
  labels: string[];
}

const FooterColumn = ({ title, labels }: FooterColumnProps) => {
  return (
    <div className="space-y-4">
      <h5 className="text-xl font-semibold">{title}</h5>
      <div className="space-y-2">
        {labels.map((label) => {
          return <p key={label}>{label}</p>;
        })}
      </div>
    </div>
  );
};

export default FooterColumn;
