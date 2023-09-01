import { Fragment, use } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventListSearch from "../../components/events/EvntListSearch";

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventListSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export default EventsPage;
