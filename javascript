function saludarUsuario() {
      // Pide el nombre al usuario
      let nombre = prompt("¿Cuál es tu nombre?");
      
      // Pide dos números
      let num1 = parseFloat(prompt("Ingresa el primer número:"));
      let num2 = parseFloat(prompt("Ingresa el segundo número:"));

      // Suma los números
      let suma = num1 + num2;

      // Muestra el resultado
      alert("Hola " + nombre + ", la suma es: " + suma);
      console.log("Usuario: " + nombre);
      console.log("Suma: " + suma);
    }
