import { FunctionComponent, ReactNode, ComponentProps } from "react";

interface LogisticsItemProps {
  icon: FunctionComponent<ComponentProps<"svg">>; // Replace 'svg' with whatever element your icon uses
  children: ReactNode;
}

const LogisticsItem: React.FC<LogisticsItemProps> = ({
  icon: Icon,
  children,
}) => {
  return (
    <li className="flex flex-col items-center text-center text-[#aefff8] font-semibold text-lg md:items-start md:text-left">
      <span className="block">
        <Icon className="mr-4 text-[#18e0d0] w-8 h-8" />
      </span>
      <span className="block">{children}</span>
    </li>
  );
};

export default LogisticsItem;
