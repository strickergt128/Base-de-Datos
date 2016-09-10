// var Frijoles = angular.module('Frijoles',[]);
// Frijoles.controller('Tacos', function ($scope){
//   $scope.mensaje = "Hola Mundo";
//   $scope.guardar = function(usuario){
//     console.log(usuario);
//   }
// })

var MyApp = angular.module("MyApp",[]);
MyApp.controller("ejemploCtrl",function($scope){
    $scope.guardar = function(usuario){
      if(usuario.nombre == undefined){
        alert("El campo esta Vacio");
      }
      if (usuario.apellido == undefined) {
        alert("El campo esta Vacio");
      }
      if (usuario.correo == undefined) {
        alert("El campo esta Vacio");
      }
      if (usuario.contrasenia == undefined) {
        alert("El campo esta Vacio");
      }
      if (usuario.contrasenia2 == undefined) {
        alert("El campo esta vacio");
      }
      if (usuario.contrasenia == usuario.contrasenia2) {
        firebase.database().ref('usuarios/').set({
          username: usuario.nombre,
          apellido: usuario.apellido,
          email: usuario.correo,
          pasword: usuario.contrasenia
        });
      } else {
        alert("La contraseña no coincide")
      }
    }

  // $scope.guardar = function(usuario){
  //   console.log(usuario)
  // }
});
