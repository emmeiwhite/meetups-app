import classes from "./MeetupItem.module.css";
import Card from "./../ui/Card";

function MeetupItem({ title, id, description, image, address }) {
  return (
    <Card>
      <article key={id} className={classes.meetuplist}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </article>
    </Card>
  );
}

export default MeetupItem;
