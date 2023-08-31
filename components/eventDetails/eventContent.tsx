import React, { ReactNode } from "react";

type EventContentProps = {
  children: ReactNode;
};

const EventContent: React.FC<EventContentProps> = (props) => {
  return (
    <section className="text-2xl text-gray-700 w-9/10 max-w-screen-lg mx-auto mt-32 text-center">
      {props.children}
    </section>
  );
};

export default EventContent;
