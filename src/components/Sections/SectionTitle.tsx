import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import LinkButton from "../LinkButton";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  buttons?: boolean;
  link?: string;
  linkLabel?: string;
  empty?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  buttons,
  link,
  linkLabel,
  empty,
}: SectionTitleProps) => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 items-center">
        <div className="bg-primary h-8 w-4 rounded-sm"></div>
        <p className="text-primary font-semibold capitalize">{subtitle}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-4xl font-semibold capitalize">{title}</p>
        {empty ? null : buttons ? (
          <div className="flex gap-3">
            <button className="p-2 bg-gray-light rounded-full">
              <ChevronLeft />
            </button>
            <button className="p-2 bg-gray-light rounded-full">
              <ChevronRight />
            </button>
          </div>
        ) : link && linkLabel ? (
          <LinkButton link={link} linkLabel={linkLabel} />
        ) : null}
      </div>
    </div>
  );
};

export default SectionTitle;
