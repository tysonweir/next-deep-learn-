import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import LogisticsItem from "./logisticsItem";

type EventLogisticsProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

const EventLogistics: React.FC<EventLogisticsProps> = ({
  date,
  address,
  image,
  imageAlt,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className="shadow-md rounded-lg bg-gray-900 p-8 max-w-screen-md w-4/5 mx-auto -mt-12 text-customColor flex justify-between gap-4 flex-col items-center">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/${image}`}
          alt={imageAlt}
          className="w-40 h-40 object-cover"
        />
      </div>
      <ul className="flex-3 flex gap-8 justify-center items-center flex-col">
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address style={{ whiteSpace: "pre" }}>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
