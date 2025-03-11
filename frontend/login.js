async function login(event) {
    event.preventDefault();
      
      const license_plate = document.getElementById('placa').value;
      const password = document.getElementById('senha').value;

      const data = { license_plate, password };
      const response = await fetch('http://localhost:3026/carro/login', {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      });
      const result = await response.json();

      if (result.success) {
        let carroData = result.data;
        localStorage.setItem('informacoes', JSON.stringify(carroData))
        window.location.href = "./index.html";
      } else {
        alert("Placa ou senha incorretos!");
      }
};