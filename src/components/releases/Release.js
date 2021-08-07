import React, {useEffect, useState} from 'react';
import {
    IonCard,
    IonCardHeader,
    IonButton,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonContent,
    IonPage,
    IonHeader, IonToolbar, IonTitle
} from '@ionic/react';
import {
    useParams
} from "react-router-dom";

// @ts-ignore
const Release: React.FC = () => {

    let { releaseName, releaseId } = useParams();
    const [hasError, setErrors] = useState(false);
    const [releaseList, setReleaseList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://api.github.com/repos/mozilla/zamboni/releases`);
            res
                .json()
                .then(res => {
                    setReleaseList(res)
                })
                .catch(err => setErrors(err));
        }

        fetchData();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>MozIonic</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <h1>Repository: {releaseName}</h1>
            {
                releaseList &&
                releaseList.map( (item, key ) => {
                    return (
                        <IonCard key={key}>
                            <IonCardHeader>
                                <IonCardSubtitle>Version: {item.tag_name}</IonCardSubtitle>
                                <IonCardTitle>ID: {item.id}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>Date: {item.published_at}</IonCardContent>
                        </IonCard>
                    )
                })
            }
        </IonContent>
        </IonPage>
    )
};


export default Release;