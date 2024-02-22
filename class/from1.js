class Employee {
    constructor(ID, Name, Email, City, address,date) {
        this.ID = ID;
        this.Name = Name;
        this.Email = Email;
        this.City = City;
        this.address = address
        this.date = date
    }
    showData() {
        console.log(this.ID + "\t" + this.Name + "\t" + this.Email + "\t" + this.City + "\t"+this.address +"\t"+this.date);
    }
}

var RegList = [];
function btn1Click() {
    var gen;
    if (rdo1.checked == true) {
        gen = "Male"
    }
    else{
        gen = "Female"
    }
    var EID = txt1.value;
    var EName = txt2.value;
    var EEmail = drop1.value;
    var ECity = gen;
    var Eaddress = txt3.value;
    var EDate = dt1.value

    var E = new Employee(EID, EName, EEmail, ECity,Eaddress,EDate);
    E.showData();
    RegList.push(E);
    console.log(RegList);
    var tr1 = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(tr1);

    var td1 = document.createElement("td");
    td1.innerHTML = EID;
    tr1.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = EName;
    tr1.appendChild(td2);

    var td3 = document.createElement("td");
    td3.innerHTML = EEmail;
    tr1.appendChild(td3);

    var td4 = document.createElement("td");
    td4.innerHTML = ECity;
    tr1.appendChild(td4);

    var td5 = document.createElement("td");
    td5.innerHTML = Eaddress;
    tr1.appendChild(td5);

    var td6 = document.createElement("td");
    td6.innerHTML = EDate;
    tr1.appendChild(td6);
}