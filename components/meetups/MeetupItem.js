import classes from "./MeetupItem.module.css";

function MeetupItem({ title, id }) {
  return (
    <article key={id} className={classes.meetuplist}>
      <h2>{title}</h2>
    </article>
  );
}

export default MeetupItem;
