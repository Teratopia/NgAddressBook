angular.module('adBook').component('listContacts', {

  template: `
  <table style = "width = 100%;">
    <tr>
      <th>First Name</th><th>Last Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Remove</th></tr>
      <tr ng-repeat="contact in $ctrl.contacts"><td>{{contact.fname}}</td>
      <td>{{contact.lname}}</td><td>{{contact.email}}</td><td>{{contact.phone}}</td>
      <td>{{contact.address.street}}, {{contact.address.city}} {{contact.address.state}} {{contact.address.zip}}</td>
      <td><button ng-click="$ctrl.remove(contact)">Delete</button></td>
    </tr>
  </table>
  `,

  bindings : {
    contacts : '=',
    remove : "<"
  }
});
