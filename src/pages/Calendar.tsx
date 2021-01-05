import React, { useState } from 'react';
import { IonActionSheet, IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Calendar.css';
import CalendarEmpty from '../components/CalendarEmpty';
import { RouteComponentProps } from 'react-router';

const Calendar: React.FC<RouteComponentProps> = ({ history, match }) => {
  // const allDays = createCalendar();
  const [calendar, setCalendar] = useState(localStorage.getItem('calendar'));
  const parsedCalendar = JSON.parse(calendar!);

  function CalendarBody() {
    const [showActionSheet, setShowActionSheet] = useState(false);
    const [selectedWorkout, setSelectedWorkout] = useState({ date: '', workout: { id: ''}, day: '', completed: false });
  
    // if (!parsedCalendar) {
    //   return (
    //     <CalendarEmpty/>
    //   )
    // }
    return (
      <IonList>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[{
            text: 'See Details',
            handler: () => {
              history.push(`workout/${selectedWorkout.workout.id}`)
            }
          }, {
            text: 'Mark as Complete',
            handler: () => {
              console.log(selectedWorkout);
              const indexOfSelectedWorkout = parsedCalendar.allDays.indexOf(selectedWorkout);
              selectedWorkout.completed = true;
              parsedCalendar.allDays.splice(indexOfSelectedWorkout, 1, selectedWorkout);
              const stringifiedCalendar = JSON.stringify(parsedCalendar);
              setCalendar(stringifiedCalendar);
            }
          }, {
            text: 'Cancel',
            role: 'destructive',
          }]}
        >
        </IonActionSheet>
  
  
        {parsedCalendar.allDays.map((scheduleItem: { date: string; workout: any; day: string; completed: boolean}) => (
          <div key={scheduleItem.date}>
            <IonListHeader>
              <IonLabel>Day {scheduleItem.day} - {scheduleItem.date}</IonLabel>
            </IonListHeader>
            <IonItem key={scheduleItem.date} onClick={() => { setShowActionSheet(true); setSelectedWorkout(scheduleItem);}}>
              <IonLabel>
                {scheduleItem.workout?.title}
              </IonLabel>
              <IonCheckbox slot="end" color="primary" checked={scheduleItem.completed} />
            </IonItem>
          </div>
        ))}
      </IonList>
    )
  }

  let calendarRender;
  if (parsedCalendar) {
    calendarRender = <CalendarBody/>;
  } else {
    calendarRender = <CalendarEmpty/>;
  }

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
        
        {calendarRender}
        
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
