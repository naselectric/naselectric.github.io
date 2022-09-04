
d3.json("./samples.json").then(function(data) {
    console.log(data)
    console.log(Object.values(data));
    var x=Object.values(data);
    // console.log(x[0]);
    y(x);

});



function y(x){

var id_data=x[0];

var selectDropdown= d3.select('#selDataset');


function addoptions(){

    id_data.forEach(idnumber=>{

        selectDropdown.append('option').text(idnumber);
    })
}

addoptions()


function id_input(){
    var z=d3.event.target.value;
    console.log(z);
    z1(z);
    
}

selectDropdown.on("change", id_input);


function z1(z){
    // console.log(z);
    var input_id=z;




console.log(x[1][0]);

var metadata= x[1];
var samples = x[2];
var ids = samples.map(element => element.id);

var otu_ids=samples.map(element => element.otu_ids);
var sample_values=samples.map(element => element.sample_values);
var otu_labels=samples.map(element => element.otu_labels);
// console.log(ids[0],otu_ids[0][0],sample_values[0][0]);
// console.log(ids);
// var x1=[];
// var y1=[];

// for (let i=0; i<10; i++){
//     x1.push(otu_ids[0][i]);
//     y1.push(sample_values[0][i]);
// }
// console.log(x1,y1);

// var input_id = '967';

for (let i=0; i<ids.length;i++){
    if(ids[i]===input_id){
        
        var demoinfo=d3.select('#panel-body');
        var metakeys=Object.keys(metadata[i])
        var metavalues=Object.values(metadata[i]);

        demoinfo.text('');

        for(let j=0;j<7;j++){
        demoinfo.append().text(metakeys[j]);
        demoinfo.append().text(': ');
        demoinfo.append().text(metavalues[j]);
        demoinfo.append('br');
        }
        

        // demoinfo.append().text('Ethnicity: ');
        // demoinfo.append().text(metavalues[1]);
        // demoinfo.append('br');

        // demoinfo.append().text('Gender: ');
        // demoinfo.append().text(metavalues[2]);
        // demoinfo.append('br');

        // demoinfo.append().text('Age: ');
        // demoinfo.append().text(metavalues[3]);
        // demoinfo.append('br');

        // demoinfo.append().text('location: ');
        // demoinfo.append().text(metavalues[4]);
        // demoinfo.append('br');

        // demoinfo.append().text('BBtype: ');
        // demoinfo.append().text(metavalues[5]);
        // demoinfo.append('br');

        // demoinfo.append().text('Wfreq: ');
        // demoinfo.append().text(metavalues[6]);
        // demoinfo.append('br');

        
        
        
        var x1=[];
        var y1=[];
        for (let j=0; j<10; j++){
            x1.push(otu_ids[i][j]);
            y1.push(sample_values[i][j]);
    
        }
    }
}   
       

         
         
        var x1_otu=x1.map((element)=>{
            return 'OTU' + element;
        });  
        console.log(x1_otu); 
        
        var x_rev=x1_otu.reverse();
        var y_rev=y1.reverse();
        
        
        


    for (let i=0; i<ids.length;i++){
        if(ids[i]===input_id){
            var x2=[];
            var y2=[];
            var z2=[];
            for (let j=0; j<otu_ids[i].length; j++){
                x2.push(otu_ids[i][j]);
                y2.push(sample_values[i][j]);
                z2.push(otu_labels[i][j]);
        
            }
        }
    }
    
    var y3=y2.map((element)=>{
        return element/3;
    });      
    console.log(y2,y3);


    


var trace1 = {
    x: y_rev,
    y: x_rev,
    orientation: 'h',
    type: 'bar'
    
  };

  var data = [trace1];

  var layout = {title: '10 Highest OTUs',
                plot_bgcolor: 'rgb(245,186,116)',
                paper_bgcolor: 'rgb(30,148,70)'};

Plotly.newPlot('bar', data,layout);




var trace2 = {
    x: x2,
    y: y2,
    text:z2,
    mode: 'markers',
    marker: {
      size: y3,
      color: 'rgb(128, 25, 150)',
    }
  };

  var data = [trace2];

  var layout = {title: 'All Sample OTUs',
                plot_bgcolor: 'rgb(204,179,174)',
                paper_bgcolor: 'rgb(30,148,70)'};

  Plotly.newPlot('bubble', data,layout);


    // var data2=x[2];
    // console.log(data2);
    // var x1=x[2].map(element => element.otu_ids);
    // var y1=x[2].map(element => element.sample_values);
    // console.log(x1[0],y1[0]);
    // // x2=x1[0];
    // // y2=y1[0];
    // // console.log(x2[0],y2[0]);

    // var otu_ids=[];
    // var sample_values=[];
    // // otu_ids.push(x2[0]);
    // // console.log(otu_ids);
    // for (let i=0; i<x1.length; i++){
    //     x2=x1[i];
    //     y2=y1[i];

    // for(let j=0; j<x2.length; j++){
    //     otu_ids.push(x2[j]);
    //     sample_values.push(y2[j]);}
    // }

    // // console.log(otu_ids,sample_values);
    // // const a = new Set(otu_ids).size;
    // // const b = otu_ids[0];
    // // console.log(a,b);

    // const unique = (value, index, self) => {
    //     return self.indexOf(value) === index
    //   }

    // var c=otu_ids.filter(unique);
    // // console.log(c);

    // var d=[];

    // for (let i=0; i<c.length; i++){
    //     var sum = 0;
    //     for (let j=0; j<otu_ids.length; j++){
    //         if (otu_ids[j]===c[i]){
    //             sum= sum + sample_values[j];
    //         }
    //     }
    //     d.push(sum);
    // }
    

    


    // console.log(c,d);
}
}






