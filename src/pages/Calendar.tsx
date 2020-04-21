import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonLabel, IonList, IonItem, IonCheckbox } from '@ionic/react';
import workoutList from '../data/workouts';
import './Calendar.css';



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



const Calendar: React.FC = () => {
  const allDays = createCalendar();

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

        {/* value={segment} onIonChange={(e) => setSegment(e.detail.value as any)}
        <IonSegment value="classic">
          <IonSegmentButton value="classic">
            Classic
          </IonSegmentButton>
          <IonSegmentButton value="favorites">
            Favorites
          </IonSegmentButton>
        </IonSegment> */}
        <IonList>

          {allDays.map((scheduleItem) => (
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
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
