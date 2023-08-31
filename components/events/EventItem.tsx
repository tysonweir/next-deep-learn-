import { EventType } from "../../types/event";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Button from "../ui/Button";

interface EventItemProps {
  item: EventType;
}

const EventItem: React.FC<EventItemProps> = ({ item }) => {
  const { title, image, date, location, id } = item;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li
      className="shadow-md rounded-lg overflow-hidden bg-white m-4 flex "
      key={id}
    >
      <img className="w-full h-40 object-cover" src={"/" + image} alt="Event" />
      <div className="w-full  pr-4 flex flex-col">
        <h2 className="my-2">{title}</h2>
        <div className="flex gap-2 items-center">
          <span className="w-5 h-5 text-gray-600">
            <DateIcon />
          </span>
          <time className="font-semibold text-gray-600">
            {humanReadableDate}
          </time>
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-5 h-5 text-gray-600">
            <AddressIcon />
          </span>
          <address className="my-2 text-gray-600 whitespace-pre">
            {formattedAddress}
          </address>
        </div>
        <div className="">
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className="ml-2 inline-flex justify-center items-center">
              <span className="w-5 h-5">
                <ArrowRightIcon />
              </span>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
