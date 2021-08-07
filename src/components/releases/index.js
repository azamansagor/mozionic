import React, {useState, useEffect, useContext} from 'react';
import { IonList, IonItem, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import {AppContext} from "../Context"

const Releases: React.FC = (props) => {

const {items} = props;


  return (
    <IonContent>
        {
            items && 
            items.map( (item, key ) => {
                const { repository } = item;
                return (
                    <IonCard key={key}>
                        <IonCardHeader>
                            <IonCardSubtitle>{repository.releases_url} - {repository.id}</IonCardSubtitle>
                            <IonCardTitle>{repository.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>{repository.description}</IonCardContent>
                        <IonButton color="primary">Primary</IonButton>
                    </IonCard>
                )
            })
        }
    </IonContent>
  )
};


export default Releases;