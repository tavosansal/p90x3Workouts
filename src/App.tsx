import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { barbellSharp, calendarSharp, informationCircleSharp } from 'ionicons/icons';
import Workouts from './pages/Workouts';
import Tab2 from './pages/Calendar';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Workout from './pages/Workout';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/workouts" component={Workouts} exact={true} />
          <Route path="/calendar" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/workout/:id" component={Workout} />
          <Route path="/" render={() => <Redirect to="/workouts" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="workouts" href="/workouts">
            <IonIcon icon={barbellSharp} />
            <IonLabel>Workouts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calendar" href="/calendar">
            <IonIcon icon={calendarSharp} />
            <IonLabel>Calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={informationCircleSharp} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
