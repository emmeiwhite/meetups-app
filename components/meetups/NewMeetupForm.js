import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  }
  return (
    <form className={classes.meetup_form_wrapper} onSubmit={handleSubmit}>
      <div className={classes.form_item}>
        <input required ref={titleInputRef} type="text" placeholder="title" />
      </div>
      <div className={classes.form_item}>
        <input
          required
          ref={imageInputRef}
          type="text"
          placeholder="image-url"
        />
      </div>
      <div className={classes.form_item}>
        <input
          required
          ref={addressInputRef}
          type="text"
          placeholder="address"
        />
      </div>

      <div className={classes.form_item}>
        <input
          required
          ref={descriptionInputRef}
          type="text"
          placeholder="description"
        />
      </div>

      <button>Add Meetup</button>
    </form>
  );
}

export default NewMeetupForm;
