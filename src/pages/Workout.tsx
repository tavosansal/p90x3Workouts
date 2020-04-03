import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

interface WorkoutPageProps extends RouteComponentProps<{
  id: string;
}> { }

const Workout: React.FC<WorkoutPageProps> = ({match}) => {
  debugger;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>
            MY WORKOUTS
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        THE CONTENT
      </IonContent>
    </IonPage>
  )
}

export default Workout;