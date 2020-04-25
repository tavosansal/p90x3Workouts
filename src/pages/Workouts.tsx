import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonSearchbar, IonLabel, useIonViewWillEnter } from '@ionic/react';
import workoutList from '../data/workouts';
import './Workouts.css';
import { Plugins } from '@capacitor/core';

function hideSplashScreen() {
  const { SplashScreen } = Plugins;
  SplashScreen.hide();
}

const Workouts: React.FC = () => {
  useIonViewWillEnter(() => {
    hideSplashScreen();
  });

  const [searchText, setSearchText] = useState('');

  const filteredWorkouts = workoutList.filter((workout) => {
    if (searchText) {

      return workout.title.toLowerCase().includes(searchText.toLowerCase());
    }
    return workout;
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Workouts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">All Workouts</IonTitle>
          </IonToolbar>
        </IonHeader>
        

        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated inputMode="search"></IonSearchbar>

        <IonList>
          {filteredWorkouts.map((workout) => (
            <IonItem key={workout.id} routerLink={`/workout/${workout.id}`}>
              <IonLabel>
                {workout.title}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Workouts;
