import { EventType } from "../types/event";
import EventItem from "./EventItem";
import style from "./EventList.module.css";

interface EventListProps {
  events: EventType[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div>
      <ul className={style.list}>
        {events.map((item) => (
          <EventItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
