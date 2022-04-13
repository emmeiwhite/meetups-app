// Home page to render the list of meetups
// We will call an API and get our Data

import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

// Let's create a Dummy Meetup Data

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://image.shutterstock.com/image-photo/meet-assembly-conference-seminar-strategy-600w-482201569.jpg",
    address: "First Address",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://image.shutterstock.com/image-photo/architect-team-having-discussion-600w-1380294050.jpg",
    address: "Second Address",
    description: "This is the first meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://image.shutterstock.com/image-photo/successful-business-group-people-work-600w-1260165853.jpg",
    address: "Third Address",
    description: "This is the first meetup",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image:
      "https://image.shutterstock.com/image-photo/successful-creative-business-team-modern-600w-1620126349.jpg",
    address: "Fourth Address",
    description: "This is the first meetup",
  },
  {
    id: "m5",
    title: "A Fifth Meetup",
    image:
      "https://image.shutterstock.com/image-photo/concentrated-surgical-team-operating-patient-600w-1265400856.jpg",
    address: "Fifth Address",
    description: "This is the first meetup",
  },
];
function HomePage() {
  return <MeetupList meetuplist={DUMMY_MEETUPS} />;
}

export default HomePage;
