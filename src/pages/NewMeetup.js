import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupPage() {
  return (
    <section>
      <h1>Add Meetup Events</h1>
      <form>
        <NewMeetupForm />
      </form>
    </section>
  );
}

export default NewMeetupPage;
