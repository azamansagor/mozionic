import React, {useEffect, useState} from 'react';
import {IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Releases from '../components/releases/index';
import NavigationButtons from '../components/navigation/Navigation';
import {AppContext} from "../components/Context"

const Home: React.FC = () => {

    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(null);

    const [hasError, setErrors] = useState(false);
    const [releases, setReleases] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://api.github.com/search/code?q=addClass+user:mozilla&page=${page}&per_page=${perPage}`);
            res
                .json()
                .then(res => {
                    setReleases(res.items)
                    setTotalPages(Math.round(parseInt(res.total_count) / parseInt(perPage)))
                })
                .catch(err => setErrors(err));
        }

        fetchData();
    }, [page]);

    return (
        <AppContext.Provider value={[page, setPage, perPage, setPerPage, totalPages, setTotalPages]}>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>MozIonic</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding">
                    <Releases items={releases}/>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <NavigationButtons/>
                    </IonToolbar>
                </IonFooter>
            </IonPage>
        </AppContext.Provider>
    );
};

export default Home;
