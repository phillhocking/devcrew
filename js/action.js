
$.ajax({
    url: "https://raw.githubusercontent.com/j122885/devcrew/main/devrewmembers.csv",
    success: function(csv) {
        const output = Papa.parse(csv, {
          header: true, // Convert rows to Objects using headers as properties
        });
        if (output.data) {
          console.log(output.data);
          for(var i = 0; i<output.data.length-1; i++) {
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
    card.classList.add("card","text-white","bg-dark","mb-3");

    outterDiv.appendChild(card);
    
    var cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    let node = document.createTextNode(member.Name);
    cardHeader.appendChild(node);
    card.appendChild(cardHeader);


    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);


    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    node = document.createTextNode(member.TikTok);
    cardTitle.appendChild(node);
    cardBody.appendChild(cardTitle);

    var cardText2 = document.createElement("P");
    cardText2.classList.add("card-text");
    node = document.createTextNode("Twitter: " + member.Twitter);
    cardText2.appendChild(node);
    cardBody.append(cardText2);
    
    var cardText3 = document.createElement("P");
    cardText3.classList.add("card-text");
    node = document.createTextNode("Github: " + member.GitHub);
    cardText3.appendChild(node);
    cardBody.append(cardText3);
   
    var cardText4 = document.createElement("P");
    cardText4.classList.add("card-text");
    node = document.createTextNode("Twitch: " + member.Twitch);
    cardText4.appendChild(node);
    cardBody.append(cardText4);

    var cardText5 = document.createElement("P");
    cardText5.classList.add("card-text");
    node = document.createTextNode("YouTube: " + member.YouTube);
    cardText5.appendChild(node);
    cardBody.append(cardText5);

}
