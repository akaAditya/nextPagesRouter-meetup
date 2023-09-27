import { Fragment } from "react";
import classes from './MeetUpDetails.module.css'
import Card from "../ui/Card";

const MeetUpDetails = (props) => {
  return (
    <Fragment>
      <ul>
        <li className={classes.item}>
          <Card>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <address>{props.address}</address>
              <p>{props.description}</p>
            </div>
            {/* <div className={classes.actions}>
              <button onClick={ShowMeetUpIdHandler}>Show Details</button>
            </div> */}
          </Card>
        </li>
      </ul>
    </Fragment>
  );
};
export default MeetUpDetails;
