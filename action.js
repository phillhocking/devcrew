
$.ajax({
    url: "https://raw.githubusercontent.com/j122885/devcrew/main/devrewmembers.csv",
    success: function(csv) {
        const output = Papa.parse(csv, {
          header: true, // Convert rows to Objects using headers as properties
        });
        if (output.data) {
          console.log(output.data[0].Twitter);
          for(var i = 0; i<output.data.length; i++) {
              createCard(output.data[i]);
          }
        } else {
          console.log(output.errors);
        }
    },
    error: function(jqXHR, textStatus, errorThrow){
        console.log(textStatus);
    }
});


function createCard(member){
    var display = document.getElementById("content");
    
   
    var outterDiv = document.createElement("div");
    outterDiv.classList.add("col-sm-6");
    display.appendChild(outterDiv);


    var card = document.createElement("div");
    card.classList.add("card");
    outterDiv.appendChild(card);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.append(cardBody);


    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    let node = document.createTextNode(member.Name);
    cardTitle.appendChild(node);
    cardBody.append(cardTitle);


    var cardText1 = document.createElement("P");
    cardText1.classList.add("card-text");
    node = document.createTextNode(member.Tiktok);
    cardText1.appendChild(node);
    cardBody.append(cardText1);



    var cardText2 = document.createElement("P");
    cardText2.classList.add("card-text");
    node = document.createTextNode(member.Twitter);
    cardText2.appendChild(node);
    cardBody.append(cardText2);


    document.body.appendChild(outterDiv);





}
