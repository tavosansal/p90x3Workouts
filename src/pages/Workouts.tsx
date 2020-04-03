import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonSearchbar, IonLabel } from '@ionic/react';
import './Workouts.css';

const Workouts: React.FC = () => {
  const workoutList = [
    {
      id: 'cvx',
      title: 'CVX',
      description: 'Now resistance is combined with intervals to give you that full-body burn and power-up your core.',
    },
    {
      id: 'totalSynergistics',  
      title: 'Total Synergistics',
      description: 'A full-body workout that triggers fast, powerful changes to your body\'s composition.' 
    }
  ];

  const [searchText, setSearchText] = useState('');

  const filteredWorkouts = workoutList.filter((workout) => {
    if (searchText) {

      return workout.id.toLowerCase().includes(searchText.toLowerCase());
    }
    return workout;
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Workouts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Workouts</IonTitle>
          </IonToolbar>
        </IonHeader>
        

        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>

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
