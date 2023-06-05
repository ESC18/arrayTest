window.onload = function () {
    let form = document.getElementById("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        let Animal = document.getElementById("Input1").value;
        let City = document.getElementById("Input2").value;
        let TVShow = document.getElementById("Input3").value;
        let ComboArray = [Animal,City,TVShow]; 

        let ulElement = document.createElement("ul");
        let liElement1 = document.createElement("li");
        let liElement2 = document.createElement("li");
        let liElement3 = document.createElement("li");

        liElement1.append(ComboArray[0]);
        liElement2.append(ComboArray[1]);
        liElement3.append(ComboArray[2]);

        ulElement.append(liElement1, liElement2, liElement3);

        document.getElementById("list").append(ulElement);    

        console.log('works')
    }

}