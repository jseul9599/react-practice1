import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';



function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true); //로딩화면 보여주다가(true)
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-6a2cc-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false); //데이터 다 가져오면 로딩화면 안 보여주기(false)
      setLoadedMeetups(meetups);
    });
  }, []);

  

  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return( 
      <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups} />
      </section>
  );
}

export default AllMeetupsPage;