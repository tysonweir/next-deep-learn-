import { EventType } from "../types/event";
import Link from "next/link";
import style from "./EventItem.module.css";

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
      <div>
        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
          <div className={style.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address className={style.address}>{formattedAddress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
