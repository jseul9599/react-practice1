import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-getting-started-6a2cc-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true});
        });
    }

    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;




/*

기존 v5까지의 방식
import { useHistory } from 'react-router-dom';
const history = useHistory();

.then(() => {
    history.replace('/');
});




v6방식
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/', {replace: true});

*/