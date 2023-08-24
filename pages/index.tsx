import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/EventList";

function Homepage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList events={featuredEvents} />
      </ul>
    </div>
  );
}

export default Homepage;
