import { EventType } from "../../types/event";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import style from "./EventItem.module.css";
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
    <li className={style.item} key={id}>
      <img src={"/" + image} alt="..." />
      <div className={style.main}>
        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
          <div className={style.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={style.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={style.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
