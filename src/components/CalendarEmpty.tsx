import React, { useState } from 'react';
import './CalendarEmpty.css';
import { IonButton, IonIcon, IonDatetime } from '@ionic/react';
import { calendarSharp } from 'ionicons/icons';

const CalendarEmpty: React.FC = () => {
  const [isSelectingDate, setIsSelectingDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  function openPicker() {
    const picker = document.querySelector('.picker');
    // @ts-ignore
    picker?.open();
  }

  function dateSelected(e: { detail: { value: any; }; }) {
    setSelectedDate(e.detail.value!);
  }

  return (
    <div className="container">
      <strong>You don't have a calendar yet.</strong>
      <p>
        Pick a starting day to generate your workout calendar.
      </p>
      <br />
      <IonButton onClick={openPicker}>
        <IonIcon slot="start" icon={calendarSharp} />
        Select Start Date
      </IonButton>

      <IonDatetime className="picker" value={selectedDate} onIonChange={dateSelected} />
    </div>
  )
}

export default CalendarEmpty;