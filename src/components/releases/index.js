import React from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonRow} from '@ionic/react';

const Releases: React.FC<> = (props) => {

    const {items, history} = props;

    return (
        <>
            {
                items &&
                items.map((item, key) => {
                    const {repository} = item;
                    return (
                        <IonCard key={key}>
                            <IonCardHeader>
                                <IonCardTitle>
                                    {repository.name}
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonRow>
                                    <IonCol>
                                        {repository.description}
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-text-center">
                                        <IonButton
                                            color="primary"
                                            routerDirection="none"
                                            href={`/releases/${repository.name}/${repository.id}`}
                                        >
                                            Releases
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonCardContent>
                        </IonCard>
                    )
                })
            }
        </>
    )
};


export default Releases;