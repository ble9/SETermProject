
//Google Login
function googleLogin() {
    
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
        const user = result.user;
        console.log(user);
    })
        .catch(console.log);
    }


//Send Information to the Database
function spotTaken(spot,val) {
    const app = firebase.app();
    const db = firebase.firestore();
    const spots = db.collection("Spots");
    const docRef = spots.doc("parkingSpots");
    switch (spot) {
        case 1:
            docRef.set({
                spot1: val
            }, { merge: true });
           
            break;
        case 2:
            docRef.set({
                spot2: val
            }, { merge: true });
            break;
        case 3:
            docRef.set({
                spot3: val
            }, { merge: true });
            break;
        case 4:
            docRef.set({
                spot4: val
            }, { merge: true });
            break;
        case 5:
            docRef.set({
                spot5: val
            }, { merge: true });
            break;
        case 6:
            docRef.set({
                spot6: val
            }, { merge: true });
            break;
        case 7:
            docRef.set({
                spot7: val
            }, { merge: true });
            break;
        case 8:
            docRef.set({
                spot8: val
            }, { merge: true });
            break;
        case 9:
            docRef.set({
                spot9: val
            }, { merge: true });
            break;
        case 10:
            docRef.set({
                spot10: val
            }, { merge: true });
            break;
        case 11:
            docRef.set({
                spot11: val
            }, { merge: true });
            break;
        case 12:
            docRef.set({
                spot12: val
            }, { merge: true });
            break;

    }
    docRef.get().then(function (doc) {

        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
    

}
