import { Fragment } from "react";

const MeetUpDetails = (props) => {
  return (
    <Fragment>
        <img src={props.image} alt={props.title}/>
        <h1>{props.title}</h1>
        <p>{props.address}</p>
    </Fragment>
  );
};
export default MeetUpDetails;
