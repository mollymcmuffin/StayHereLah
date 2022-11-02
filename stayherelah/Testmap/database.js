//Done by Zheng Kai 

 //flattypes stores the TYPE of unit (Eg: 2-Room:40, 4-room:398)
var proj = 0; //  determines which proj is selected
var flattype=[];



var Mall_names=[];
var Mall_lat = [];
var Mall_lon = [];

var MRT_names=[];
var MRT_lat =[];
var MRT_lon= [];

var PRI_names=[];
var PRI_lat = [];
var PRI_lon = [];

var OTHER_lon =[] 
var OTHER_lat = [];

var SEC_names=[];
var SEC_lat = [];
var SEC_lon =[];

var waiting_time = [];


 // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";


//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//      apiKey: "AIzaSyC53ICclaszfDU-a1JU0MobHK7dWA3ZabY",
//      authDomain: "sc2006-29edf.firebaseapp.com",
//      databaseURL: "https://sc2006-29edf-default-rtdb.asia-southeast1.firebasedatabase.app",
//      projectId: "sc2006-29edf",
//      storageBucket: "sc2006-29edf.appspot.com",
//      messagingSenderId: "853689933587",
//      appId: "1:853689933587:web:6f78437bb84f4216a384e6",
//      measurementId: "G-D3NB5D39KC"
//  };

const firebaseConfig = {
    apiKey: "AIzaSyC53ICclaszfDU-a1JU0MobHK7dWA3ZabY",
    authDomain: "sc2006-29edf.firebaseapp.com",
    databaseURL: "https://sc2006-29edf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sc2006-29edf",
    storageBucket: "sc2006-29edf.appspot.com",
    messagingSenderId: "853689933587",
    appId: "1:853689933587:web:6f78437bb84f4216a384e6",
    measurementId: "G-D3NB5D39KC"
  };
 firebase.initializeApp(firebaseConfig);

 // Initialize Firebase
//  const app = firebase.initializeApp(firebaseConfig);

//  import {getDatabase, ref, get,  set, child, update, remove} 
//  from "https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js";
//  const db = firebase.getDatabase();
//  const analytics = getAnalytics(app);

 //references
 var insBtn = document.getElementById("InsBtn");
 var getBtn = document.getElementById("getData");

 var projSel = document.getElementById("project");

 var checkBox_Mrt = document.getElementById("Mrt");
 var checkBox_Mall = document.getElementById("Mall");
 var checkBox_Pri = document.getElementById("Pri");
 var checkBox_Sec = document.getElementById("Sec");

 
 //change textbox when CB is changed. 
//  const waiting = document.querySelector('.project');
//  waiting.addEventListener('change', (event) => {
//     const waiting_res = document.querySelector('.waiting_time');
//     waiting_res.textContent = `TeSTING`;
//  })

 //Insert data to database, older version.
function InsertData(){
    firebase.database().ref("TEST/"+"SSAS").set(
       "TETST"
    )
    .then(()=>{
        alert("Stored success");
             })
             .catch((error)=>{
                 alert("unsuccessful: "+error);
             });
         }
    

 //insert data func // just test whether db able to add
 //latest firebasse add data func
//  function InsertData(){
//      set(ref(db,"TEST/"), {TESTFolder:"TESTes"})
//      .then(()=>{
//          alert("Stored success");
//      })
//      .catch((error)=>{
//          alert("unsuccessful: "+error);
//      });
//  }

//{0 - project name, 1- est_time, 2-flattype, 3-highway, 4-Mall,
// 5- MRT, 6- Other, 7- Pri, 8- Seconday, 9- selection, 10- waiting_time}
function ReadData(){
    console.log("THIS IS TO TEST CHECKBOX: " + checkBox_Mrt.checked);
    let y =0;
    let i=0;
    proj = (projSel.value) ; // store the current selected combobox value
    // console.log("This selection of combo box " + projSel.value);
    if (proj>0){
        proj = proj -1; // if project is selected
    }
    else //if nothing is selected, prompt user to select proj
    {
        console.log("No selected project!");
        alert("No selected project");
        return;
    }
    firebase.database().ref('mature/').once('value',
    function(AllRecords){

        if (AllRecords.exists()){
        // console.log(AllRecords.val())
            AllRecords.forEach(function(CurrentRecord){
            // console.log(CurrentRecord.val());
            if(i==4) // malls
            {
                CurrentRecord.forEach(function(malls){
                    // y==proj, will get the corresponding project that is selected
                    if(y==proj)
                    {
                        // console.log(malls.val());
                        Mall_lon = malls.val().Mall_X;
                        Mall_lat = malls.val().Mall_Y;
                        Mall_names = malls.val().Mall;
                        
                        // console.log(malls.val().Mall_X);
                        // console.log(Mall_lon);
                        // console.log(Mall_lat);
                        // console.log(typeof(Mall_lat));
                    }
                    y++;
                // console.log(malls.val());
            })
            y=0;
            }
            if(i==5) // MRT
            {
                CurrentRecord.forEach(function(mrt){
                    if(y==proj)
                    {
                        // console.log(mrt.val());

                        MRT_lon = mrt.val().Mrt_X;
                        MRT_lat = mrt.val().Mrt_Y;
                        MRT_names = mrt.val().Mrt;
                        console.log(MRT_lon);
                        // console.log(MRT_lat);
                        console.log(typeof(MRT_lon));
                    }
                    y++;
                })
                y=0; //reset the counter
            
            }

            if(i==7) //Primary
            {
                CurrentRecord.forEach(function(pri){
                    if(y==proj)
                    {
                        // PRI_lon = pri.val().Primary_X;
                        PRI_lat = pri.val().Primary_Y;
                        PRI_lon = pri.val().Primary_X;
                        // PRI_names = pri.val().PrimarySchool;
                                           
                    }
                    y++;
                })
                y=0; //reset counter
            }
            if(i==8)//Secondary
            {
                CurrentRecord.forEach(function(sec){
                    if(y==proj)
                    {
                        SEC_lon = sec.val().Sec_X;
                        SEC_lat = sec.val().Sec_Y;
                        // SEC_names = 

                    }
                    y++;
                })
                y=0; //reset counter
            }
            if(i==10)//waiting Time
            {
                CurrentRecord.forEach(function(wait){
                    if(y==proj)
                    {
                        // change the .waiting_time textbox accordingly
                        waiting_time = wait.val();
                        console.log(waiting_time);
                        const waiting_res = document.querySelector('.waiting_time');
                         waiting_res.textContent = `${waiting_time}`;
                    }
                    y++;
                })

                y=0;
            }

            i++;


            }
        )
        }
        else{
            {
            alert("No Data Found");
            }
        }
    })
    .catch((error)=>{
                 alert("Unsuccessful, error " +error);
             });

}
 
 //Read data func// read from database. Get Mature Estate
 //latest firebase read data function
//  function ReadData(){
//     let y =0;
//     let i =0;
//      console.log("TEST");
//      const dbref = ref(db);
//      get(child(dbref,"mature/")).then((snapshot)=>{
//          if(snapshot.exists()){
//             snapshot.forEach(function(element){
//                 if (i==4) // malls
//                 {
//                     element.forEach(function(malls){
//                         if(y==proj)
//                         {
//                             Mall_lon = malls.val().Mall_X;
//                             Mall_lat = malls.val().Mall_Y;
//                             // console.log(malls.val().Mall_X);
//                             console.log(Mall_lon);
//                             console.log(Mall_lat);

//                         }
//                         y++;
//                         // console.log(malls.val());
//                     });
//                     // for(let y=0;y<4;y++)
//                     // {
//                     //     console.log(element.val()[3])
//                     // }
                    
//                 }
//                 console.log(i);
//                 i++;
//                 // for(let y=0; y<6; y++)
//                 // {
//                   //  console.log(element.val()[2])
//                 // }
//                 // console.log(element.val().length);

//                 // get all datas
//                 //  console.log(element.val());
//             })

//             //              let obj =  new String("");
// //                obj = String("mall0"+i);


//                 //console.log(snapshot.val().mall.mall00);

//             // snapshot.forEach((mall))

//              // get Mature->mall->mall00
//              //MRT = snapshot.val().mall.mall00;
//              //console.log(MRT);
//              //console.log(snapshot.val().mall.mall00);
//          }

//          else
//          {
//              alert("No Data Found");
//          }
//      })
//      .catch((error)=>{
//          alert("Unsuccessful, error " +error);
//      });
//  }




 //Asssign events to buttons//
 insBtn.addEventListener('click',InsertData);
 getBtn.addEventListener('click', ReadData);

