import { useRouter } from "next/router";
import classes from "./MeetupItem.module.css";
import Card from "./../ui/Card";

function MeetupItem({ title, id, description, image, address }) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push(`/${id}`);
  }
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
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </article>
    </Card>
  );
}

export default MeetupItem;
