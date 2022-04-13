import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList({ meetuplist }) {
  return (
    <section className={classes.meetups_wrapper}>
      {meetuplist.map((meetData) => {
        return (
          <main>
            <MeetupItem {...meetData} />
          </main>
        );
      })}
    </section>
  );
}

export default MeetupList;
