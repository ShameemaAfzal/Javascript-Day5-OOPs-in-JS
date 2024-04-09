class Car {
    constructor(name = '', model = '', yearofmanufacturing = '', carnumber = '', color = '', mileage = ''){
    this.name = name; 
    this.model = model; 
    this.yearofmanufacturing = yearofmanufacturing; 
    this.carnumber = carnumber; 
    this.color = color; 
    this.mileage = mileage;
    }
    printCardetails(){
    console.log(`The car name is ${this.name} and the model name is ${this.model}. It has been manufactured in ${this.yearofmanufacturing} with color ${this.color} and the car number is ${this.carnumber} and it gives ${this.mileage} kms/Li`);
    }
}
class Supercars extends Car {
    constructor(name = '', model = '', yearofmanufacturing = '', carnumber = '', color = '', mileage = '', powerbrake = false, spoiler = false){
    super(name,model,yearofmanufacturing,carnumber,color,mileage,powerbrake, spoiler)
    this.powerbrake = powerbrake;
    this.spoiler = spoiler;
    }
}
    let Maruti = new Car('Alto', 'K10', '2023', 'TN41', 'white', 15);
    let Lamborgini = new Supercars('Lambhorgini', 'Speedster', '2024', 'TX09', 'Orange', 5);
    console.log(Maruti.printCardetails(), Lamborgini.printCardetails())
    