import React, {useEffect, useState, useContext} from 'react';
import { IonButton, IonIcon,} from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import {AppContext} from "../Context"

const NavigationButtons: React.FC = () => {
  const [page, setPage, perPage, setPerPage, totalPages, setTotalPages] = useContext(AppContext);
console.log(page, totalPages);
  return (
    <ion-grid>
    <ion-row>
    <ion-col class="ion-align-self-start ion-text-">
        <IonButton color="secondary" onClick={()=> setPage(page-1)} disabled={ page <= 0 }>
        <IonIcon slot="start" icon={chevronBack} />
        Previous
        </IonButton>
    </ion-col>
    <ion-col class="ion-align-self-end ion-text-end">
        <IonButton color="secondary" onClick={()=> setPage(page+1)} disabled={ parseInt(page) > parseInt(totalPages) }>
        <IonIcon slot="end" icon={chevronForward} />
        Next
        </IonButton>
    </ion-col>
    </ion-row>
</ion-grid>
  )
};


export default NavigationButtons;