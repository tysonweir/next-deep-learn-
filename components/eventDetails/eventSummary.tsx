import React from "react";

type EventSummaryProps = {
  title: string;
};

const EventSummary: React.FC<EventSummaryProps> = ({ title }) => {
  return (
    <section className="w-full h-[30vh] bg-gradient-to-bl from-green-600 to-blue-700">
      <h1 className="m-0 pt-12 text-4xl text-center text-white text-shadow-custom">
        {title}
      </h1>
    </section>
  );
};

export default EventSummary;
