angular.module('adBook').factory('adBookService', function(){

    var service = {};

    Object
    city
    :
    "Citytown"
    id
    :
    1
    state
    :
    "CA"
    street
    :
    "123 Lane"
    zip
    :
    "94506"
    __proto__
    :
    Object
    email
    :
    "JonDoe@AnEmail.com"
    fname
    :
    "Jon"
    id
    :
    1
    lname
    :
    "Doe"
    phone
    :
    "123-456-7890"


    var contacts = [{"fname" : "Jon", "lname" : "Doe", "phone" : "123-456-7890", "id" : 1, "email" : "JonDoe@AnEmail.com", "address" : {"id" : 1, "city" : "Citytown", "state" : "CA", "street" : "123 Lane", "zip" : "94507"} }];
    var addresses = [];

    service.getContacts = function(){
        return contacts;
    };

    service.addAddress = function(newStreet, newCity, newState, newZip){
        var address = {id : addresses.length + 1, street : newStreet, city : newCity, state : newState, zip : newZip};
        addresses.push(address);
        return address;
    };

    service.createContact = function(firstName, lastName, newEmail, newPhone, street, city, state, zip){
        var newAddress = service.addAddress(street, city, state, zip);
        var contact = {id : contacts.length + 1, fname : firstName, lname : lastName, email : newEmail, phone : newPhone, address : newAddress};
        contacts.push(contact);
        console.log(contact);
        return contact;
    };

    service.removeContact = function(c){
        service.removeAddress(c.address);

        var index = 0;
        contacts.forEach(function(contact){
          if(contact.id === c.id){
            contacts.splice(index, 1);
          }
          index++;
        });
    };

    service.removeAddress = function(address){

        var index = 0;
        addresses.forEach(function(a){
          if(address.id === a.id){
            addresses.splice(index, 1);
          }
          index++;
        });

    };

    return service;
  });
