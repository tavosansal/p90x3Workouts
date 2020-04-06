import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import './Calendar.css';

const Calendar: React.FC = () => {
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

        {/* value={segment} onIonChange={(e) => setSegment(e.detail.value as any)} */}
        <IonSegment value="classic">
          <IonSegmentButton value="classic">
            Classic
          </IonSegmentButton>
          <IonSegmentButton value="favorites">
            Favorites
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
