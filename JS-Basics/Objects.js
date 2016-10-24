/**
 * Created by Florian on 24.10.2016.
 */

// Creating an object literal
const myObject = {
  sayHello: function () {
    console.log('hello my name is ' + myObject.myName +
        ' i got the email address ' + myObject.email);
  },

  myName: 'Rebecca',
  email: 'rebecca@googlemail.com',
};

const myLocation = {
  locationName: 'Regensburg',
  latitude: 49.0134297,
  longitude: 12.1016236,
  description: 'where i study',
  showLocation: function () {
    console.log(myLocation.locationName + ' ' + myLocation.latitude + ' ' + myLocation.longitude +
    ' ' + myLocation.description);
  },
};

myObject.sayHello(); // "hello"
console.log(myObject.myName); // "Rebecca"
myLocation.showLocation();
