import classes from "./MeetupItem.module.css";
import Card from "./../ui/Card";

function MeetupItem({ title, id }) {
  return (
    <Card>
      <article key={id} className={classes.meetuplist}>
        <h2>{title}</h2>
      </article>
    </Card>
  );
}

export default MeetupItem;
