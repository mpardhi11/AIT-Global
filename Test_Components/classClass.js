class XYZ {
  constructor(...detel) {
    this.detel = detel;
    var ln = detel[1];
    console.log(detel[0]);
  }

  static StaticMethod() {
    //console.log(ln);
  }

  proto_type_Menthod() {
    console.log(detel);
  }
}

let a = new XYZ("Mohit", "Pardhi");
console.log("----------------------");
XYZ.StaticMethod();
console.log("----------------------");

a.proto_type_Menthod();
