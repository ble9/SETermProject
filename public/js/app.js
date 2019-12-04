
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
    function spotCheck(num, currentSpot) {

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
                        returner = data.spot1;

                        
                        break;
                    case 2:
                        
                       returner = data.spot2;
                        break;
                    case 3:
                        
                        returner = data.spot3;
                        break;
                    case 4:
                       
                        returner = data.spot4;
                        break;
                    case 5:
                        
                        returner = data.spot5;
                        break;
                    case 6:
                        
                        returner = data.spot6;
                        break;
                    case 7:
                       
                        returner = data.spot7;
                        break;
                    case 8:
                        
                        returner = data.spot8;
                        break;
                    case 9:
                        
                        returner = data.spot9;
                        break;
                    case 10:
                        returner = data.spot10;
                        break;
                    case 11:
                        
                        returner = data.spot11;
                        
                        break;
                    case 12:
                        
                       // return data.spot12;
                        break;

                }
                var seconds = returner - Date.now();
                console.log(seconds);
                seconds /= 1000;
                if (seconds > 1) {

                    var dir = "#directionBtn"+ num;
                    console.log(dir);
                    $(currentSpot.name).addClass("taken");
                    $(dir).addClass("vis");
                    //console.log("SECONDS "+seconds);
                    var hours = (Math.trunc(seconds / 3600));
                    var minutes = (Math.trunc((seconds % 3600) / 60));
                    var secs = (Math.trunc(seconds % 3600) % 60);

                    hours = pad(hours, 2, 0);
                    minutes = pad(minutes, 2, 0);
                    secs = pad(secs, 2, 0);
                    var name = currentSpot.name + "H5";
                    $(name).text("Time Left: " + hours + ":" + minutes + ":" + secs);
                    

                }

                else if (seconds <2 && seconds>0) {
                    var dir = "#directionBtn" + num;
                    $(dir).removeClass("vis");
                    spotTaken(currentSpot.number, 0);
                    $(currentSpot.name).removeClass("taken");
                    currentSpot.taken = false;
                    var name = currentSpot.name + "H5";
                    $(name).text("");
                    //console.log(currentSpot);
                }
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
            });


        
    }

