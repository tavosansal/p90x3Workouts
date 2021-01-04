import React, { useState } from 'react';
import { IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Calendar.css';
import CalendarEmpty from '../components/CalendarEmpty';

function CalendarBody(props: { calendar: any; }) {
  if (!props.calendar) {
    return (
      <CalendarEmpty/>
    )
  }
  return (
    <IonList>
      {props.calendar.allDays.map((scheduleItem: { day: string; workout: any; }) => (
        <div key={scheduleItem.day}>
          <IonListHeader>
            <IonLabel>Day {scheduleItem.day}</IonLabel>
          </IonListHeader>
          <IonItem key={scheduleItem.day}>
            <IonLabel>
              {scheduleItem.workout?.title}
            </IonLabel>
            <IonCheckbox slot="end" color="primary" />
          </IonItem>
        </div>
      ))}
    </IonList>
  )
}

const Calendar: React.FC = () => {
  // const allDays = createCalendar();
  const [calendar] = useState(localStorage.getItem('calendar'));
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
