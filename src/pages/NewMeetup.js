import {useNavigate} from 'react-router-dom'

import NewMeetupForm from "../component/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-bb87a-default-rtdb.firebaseio.com/meetups.json",
      {
        method:'POST', 
        body:JSON.stringify(meetupData),
        headers:{
            'Content-type': 'application/json'
        }
      } 
      ).then(() => {
        navigate('/', { replace: true })
      });
  }
  return (
    <section>
      <h1> Add new meetup </h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
