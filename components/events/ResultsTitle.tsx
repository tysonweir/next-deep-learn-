import React from "react";
import Button from "../ui/Button";

interface ResultsTitleProps {
  date: string | Date;
}

const ResultsTitle: React.FC<ResultsTitleProps> = (props) => {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="my-4 mx-auto width-[90%] max-w-[40rem] text-center">
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
