// Form to Add Meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
  function addMeetUpHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <main>
      <h1>Our MeetUp Form</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </main>
  );
}

export default NewMeetUpPage;
