import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonLabel, IonList, IonItem, IonCheckbox, useIonViewDidEnter } from '@ionic/react';
import workoutList from '../data/workouts';
import './Calendar.css';
import CalendarEmpty from '../components/CalendarEmpty';

function createCalendar() {
  let dayCounter = 1;
  const allDays = [];

  for (let index = 1; index < 27; index++) {
    allDays.push({
      day: dayCounter,
      workout: workoutList.find((workout) => workout.id === 'totalSynergistics'),
    })
    dayCounter++;
    
  }

  return allDays;
}

function CalendarBody(props: { calendar: object; }) {
  if (!props.calendar) {
    return (
      <CalendarEmpty/>
    )
  }
  return (
    <div></div>
    // <IonList>
    //   {props.allDays.map((scheduleItem) => (
    //     <div key={scheduleItem.day}>
    //       <IonListHeader>
    //         <IonLabel>Day {scheduleItem.day}</IonLabel>
    //       </IonListHeader>
    //       <IonItem key={scheduleItem.day}>
    //         <IonLabel>
    //           {scheduleItem.workout?.title}
    //         </IonLabel>
    //         <IonCheckbox slot="end" color="primary" />
    //       </IonItem>
    //     </div>
    //   ))}
    // </IonList>
  )
}

const Calendar: React.FC = () => {
  const allDays = createCalendar();
  const [calendar, setCalendar] = useState(localStorage.getItem('calendar'));
  const parsedCalendar = JSON.parse(calendar!);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <CalendarBody calendar={parsedCalendar}/>
        
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
