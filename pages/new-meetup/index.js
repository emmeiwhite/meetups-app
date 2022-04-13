// Form to Add Meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";
function NewMeetUpPage() {
  function addMeetUpHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Layout>
  );
}

export default NewMeetUpPage;
