//Done by Zheng Kai 


var input = document.getElementById('input');
var lat = [];
var lon = [];
input.addEventListener('change', function(){
    readXlsxFile(input.files[0]).then(function(data){
        var i = 0;
        data.map((row, index)=>{
            // if first data 
            if(i==0){
                
                // let table = document.getElementById('tbl-data');
                // generateTableHead(table, row);
            }
            if(i>0){
                let table = document.getElementById('tbl-data');
                //generateTableRows(table,row);
                for (y in row)
                {
                    //i will be 0,1. 0,1. 0,1
                    //console.log(row[y]);
                    // store lat lon into arrays
                    if(y==0) // lat
                    {
                        lat.push(parseFloat(row[y]));
                    }
                    else // lon
                    {
                        lon.push(parseFloat(row[y]));
                    }
                }

               
                // console.log(row[0]);
                // console.log(row[1]);
            }
            
            i++;

        } );
        // for (let i =0; i<lat.length;i++)
        // {
        
        //     addMarker({location:{lat : lat[i] , lng: lon[i]}});
        // }
      
        console.log("lat: " + lat);
        console.log("Lon: " + lon);
        // console.log(data);
    });
})

// async function getData() {
//     const response = await fetch('locations.xlsx');
//     const data = await response.text();
//     const years = [];
//     const temps = [];
//     const rows = data.split('\n').slice(1);
//     rows.forEach(row => {
//       const cols = row.split(',');
//       years.push(cols[0]);
//       temps.push(parseFloat(cols[2]));
//     });
//     return { years, temps };
//   }


function generateTableHead(table,data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data){
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTableRows(table,data){
    let newRow = table.insertRow(-1);

    for(let i in data){
        console.log(i.row);
    }

    data.map((row,index)=> {
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(row);
        newCell.appendChild(newText);
    });
}


// function generateTableRows(table,data){
//     let newRow = table.insertRow(-1);
//     data.map((row,index)=> {
//         let newCell = newRow.insertCell();
//         let newText = document.createTextNode(row);
//         newCell.appendChild(newText);
//     });
// }