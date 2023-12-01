// AttackPage.tsx

import React from 'react';
import { IonLabel} from '@ionic/react';
import { IonSearchbar } from '@ionic/react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
  } from '@ionic/react';
  import { IonAccordion, IonAccordionGroup, IonItem} from '@ionic/react';


const AttackPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/menu" />
          </IonButtons>
          <IonTitle>Attack Stats</IonTitle>
        </IonToolbar>
        {/* <IonSearchbar value="Value"></IonSearchbar> */}
        <IonHeader>
            <IonToolbar>
                <IonSearchbar></IonSearchbar>
            </IonToolbar>
        </IonHeader>


        <IonSegment value="general">
          <IonSegmentButton value="general">
            <IonLabel>General</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="exterior">
            <IonLabel>Exterior</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="domicile">
            <IonLabel>Domicile</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>

      <IonContent>
        {/* Your segmented page content goes here */}
        <IonAccordionGroup>
            <IonAccordion value="first">
                <IonItem slot="header" color="light">
                <IonLabel>First Accordion</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                First Content
                </div>
            </IonAccordion>
            <IonAccordion value="second">
                <IonItem slot="header" color="light">
                <IonLabel>Second Accordion</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                Second Content
                </div>
            </IonAccordion>
            <IonAccordion value="third">
                <IonItem slot="header" color="light">
                <IonLabel>Third Accordion</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                Third Content
                </div>
            </IonAccordion>
            </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default AttackPage;