import React, {useEffect, useState} from 'react';
import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useParams} from "react-router-dom";
import moment from "moment";

// @ts-ignore
const Release: React.FC = () => {

    let {releaseName, releaseId} = useParams();
    const [hasError, setErrors] = useState(false);
    const [releaseList, setReleaseList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://api.github.com/repos/mozilla/${releaseName}/releases`);
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
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>MozIonic</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonTitle className="ion-padding">Repository: {releaseName}</IonTitle>
                {
                    releaseList &&
                    releaseList.map((item, key) => {
                        return (
                            <IonCard key={key}>
                                <IonCardHeader>
                                    <IonCardSubtitle>Version: {item.tag_name}</IonCardSubtitle>
                                    <IonCardTitle>ID: {item.id}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    Release Date: {moment(item.published_at).format('DD MMMM, YYYY')}
                                </IonCardContent>
                            </IonCard>
                        )
                    })
                }

                {
                    releaseList.length <= 0 &&
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>No repository found with the name <strong>{releaseName}</strong></IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                }
            </IonContent>
        </IonPage>
    )
};


export default Release;