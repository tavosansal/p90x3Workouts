import React, { useState } from 'react';
import './ExploreContainer.css';
import { IonButton, IonIcon } from '@ionic/react';
import { calendarSharp } from 'ionicons/icons';

const CalendarEmpty: React.FC = () => {
  return (
    <div className="container">
      <strong>You don't have a calendar yet.</strong>
      <p>
        Pick a starting day to generate your workout calendar.
      </p>
      <br />
      <IonButton>
        <IonIcon slot="start" icon={calendarSharp} />
        Select Start Date
      </IonButton>
    </div>
  )
}

export default CalendarEmpty;