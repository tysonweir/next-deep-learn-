import { EventType } from "../../types/event";
import EventItem from "./EventItem";

interface EventListProps {
  events: EventType[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div>
      <ul className=" w-[90%] max-w-[40rem] mx-auto my-20">
        {events.map((item) => (
          <EventItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
