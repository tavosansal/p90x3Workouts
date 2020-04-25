import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import workoutList from '../data/workouts';
import { timeSharp } from 'ionicons/icons';

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
          <IonTitle>{currentWorkout?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="ion-padding">
        <h1>{currentWorkout?.title}</h1>

        <p>
          {currentWorkout?.description}
        </p>

        <IonItem lines="none">
          <IonIcon icon={timeSharp} slot="start"></IonIcon>
          <IonLabel>
            {currentWorkout?.duration}m
          </IonLabel>
        </IonItem>

        {currentWorkout?.equipment?.length && 
          <h4>
            Required Equipment:
          </h4>
        }
        
        {currentWorkout?.equipment?.length && 
          <ul>
            {currentWorkout?.equipment?.map((equipment, index) => (
              <li key={index}>
                {equipment}
              </li>
            ))}
          </ul>
        }

        {currentWorkout?.recommendedEquipment?.length && 
          <h4>
            Recommended Equipment:
          </h4>
        }

        {currentWorkout?.recommendedEquipment?.length &&
          <ul>
            {currentWorkout.recommendedEquipment.map((equipment, index) => (
              <li key={index}>
                {equipment}
              </li>
            ))}
          </ul>
        }
      </IonContent>
    </IonPage>
  )
}

export default Workout;