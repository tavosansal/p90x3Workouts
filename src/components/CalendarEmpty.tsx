import React, { useState } from 'react';
import './CalendarEmpty.css';
import { IonButton, IonIcon, IonDatetime, IonModal, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonList, IonLabel, IonItem, IonSelect, IonSelectOption, IonFooter, IonLoading } from '@ionic/react';
import { calendarSharp } from 'ionicons/icons';

const CalendarEmpty: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [style, setStyle] = useState('Classic');
  const [showLoading, setShowLoading] = useState(false);

  function disableContinueButton() {
    return !selectedDate || !style;
  }

  function dismissModalAndCreateSchedule() {
    setShowModal(false);
    setShowLoading(true);
  }

  return (
    <div className="container">
      <strong>You don't have a calendar yet.</strong>
      <br />
      <br />
    
      <IonButton onClick={() => setShowModal(true)}>
        <IonIcon slot="start" icon={calendarSharp} />
        Start New Calendar
      </IonButton>

      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Creating Schedule...'}
        duration={5000}
      />

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
            </IonButtons>
            <IonTitle>New Schedule</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>Workout Style</IonLabel>
              <IonSelect value={style} placeholder="Select Style" onIonChange={e => setStyle(e.detail.value)} interface={'action-sheet'}>
                <IonSelectOption value="Classic">Classic</IonSelectOption>
                <IonSelectOption value="Deluxe">Deluxe</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>
                Start Date
              </IonLabel>
              <IonDatetime displayFormat="MMMM DD YYYY" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
            </IonItem>
          </IonList>
        </IonContent>

        <IonFooter>
          <div className="ion-padding-start ion-padding-end ion-padding-bottom">
            <IonButton expand="block" disabled={disableContinueButton()} onClick={dismissModalAndCreateSchedule}>
              Continue
            </IonButton>
          </div>
        </IonFooter>
      </IonModal>
    </div>
  )
}

export default CalendarEmpty;