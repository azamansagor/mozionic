import React from 'react';
import { IonCard, IonCardHeader, IonButton, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';
const Releases: React.FC<> = (props) => {

const {items, history} = props;


  return (
    <>
        {
            items && 
            items.map( (item, key ) => {
                const { repository } = item;
                return (
                    <IonCard key={key}>
                        <IonCardHeader>
                            <IonCardSubtitle>{repository.releases_url} - {repository.id} - {repository.name}</IonCardSubtitle>
                            <IonCardTitle>{repository.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>{repository.description}</IonCardContent>

                        <IonButton color="primary" routerDirection="none" href={`/releases/${repository.name}/${repository.id}`}>Releases</IonButton>
                    </IonCard>
                )
            })
        }
    </>
  )
};


export default Releases;