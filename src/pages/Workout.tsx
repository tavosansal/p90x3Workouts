import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import workoutList from '../data/workouts';

interface WorkoutPageProps extends RouteComponentProps<{
  id: string;
}> { }

const Workout: React.FC<WorkoutPageProps> = ({match}) => {
  const { id } = match.params;

  const currentWorkout = workoutList.find((workout) => workout.id === id);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>
            {currentWorkout?.title}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <p>
          {currentWorkout?.description}
        </p>
      </IonContent>
    </IonPage>
  )
}

export default Workout;