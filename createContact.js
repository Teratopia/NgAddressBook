angular.module('adBook').component('createContact', {
  controller : function(adBookService){
    var vm = this;

    vm.addContact = function(firstName, lastName, email, phone, street, city, state, zip){
      adBookService.createContact(firstName, lastName, email, phone, street, city, state, zip);
    };

  },

  bindings : {
    states : "<"
  },

  template: `
    <input type = "text" ng-model="$ctrl.newFirstName" placeholder="First Name"/>
    <input type = "text" ng-model="$ctrl.newLastName" placeholder="Last Name"/>
    <input type = "text" ng-model="$ctrl.newEmail" placeholder="Email"/>
    <input type = "text" ng-model="$ctrl.newPhoneNumber" placeholder="Phone Number"/><br>
    <input type = "text" ng-model="$ctrl.newStreet" placeholder="Street"/>
    <input type = "text" ng-model="$ctrl.newCity" placeholder="City"/>

    <select ng-model="$ctrl.newState">
    <option value="" disabled selected>State</option>
    <option ng-repeat="s in $ctrl.states" value = '{{s.abbreviation}}'>{{s.abbreviation}}</option>
    </select>

    <input type = "text" ng-model="$ctrl.newZip" placeholder="Zip"/>

    <button ng-click="$ctrl.addContact($ctrl.newFirstName, $ctrl.newLastName,
    $ctrl.newEmail, $ctrl.newPhoneNumber, $ctrl.newStreet, $ctrl.newCity, $ctrl.newState, $ctrl.newZip);
    $ctrl.newFirstName = ''; $ctrl.newLastName = ''; $ctrl.newEmail = '';
    $ctrl.newPhoneNumber = ''; $ctrl.newStreet = ''; $ctrl.newCity = '';
    $ctrl.newZip = ''; $ctrl.newState = '' ;">Add Contact</button>
  `
});
