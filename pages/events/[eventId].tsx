import EventSummary from "../../components/eventDetails/eventSummary";
import EventLogistics from "../../components/eventDetails/eventLogistics";
import EventContent from "../../components/eventDetails/eventContent";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import ErrorAlert from "@/components/ui/ErrorAlert";

function EventsIdPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventsIdPage;
