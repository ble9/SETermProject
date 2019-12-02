
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
function spotTaken(spot, val) {
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
          //  console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });

}
    function spotCheck(num) {

        const app = firebase.app();
        const db = firebase.firestore();
        const spots = db.collection("Spots");
        const docRef = spots.doc("parkingSpots");
        var returner;
        
        docRef.get().then(function (doc) {

            if (doc.exists) {
                //console.log("Document data:", doc.data());
                var data = doc.data();
                
                switch (num) {
                    case 1:                
                        console.log("DATA " +data.spot1);
                        return data.spot1;
                        break;
                    case 2:
                        
                      //  return data.spot2;
                        break;
                    case 3:
                        
                       // return data.spot3;
                        break;
                    case 4:
                       
                     //   return data.spot4;
                        break;
                    case 5:
                        
                      //  return data.spot5;
                        break;
                    case 6:
                        
                      //  return data.spot6;
                        break;
                    case 7:
                       
                       // return data.spot7;
                        break;
                    case 8:
                        
                       // return data.spot8;
                        break;
                    case 9:
                        
                      //  return data.spot9;
                        break;
                    case 10:
                      //  return data.spot10;
                        break;
                    case 11:
                        
                        //return data.spot11;
                        
                        break;
                    case 12:
                        
                       // return data.spot12;
                        break;

                }
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
            });

       
        
    }

