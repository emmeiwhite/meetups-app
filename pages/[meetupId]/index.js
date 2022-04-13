// This component will render the different Meetup based on the slug it receives
import { useRouter } from "next/router";

function MeetupDetail() {
  const router = useRouter();
  const meetupId = router.query.meetupId;
  return (
    <main>
      <h1>MeetupDetail Page</h1>
      <h2>SLUG PASSED IS: {meetupId}</h2>
    </main>
  );
}

export default MeetupDetail;
