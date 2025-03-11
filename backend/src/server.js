const express = require("express");
const app = express();
const port = 3026;
const db = require("./db_config");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Cadastro de veículo
app.post("/carro/cadastrar", (req, res) => {
    const { license_plate, password } = req.body;
    const sql = `INSERT INTO vehicle_log (license_plate, password) VALUES (?, ?)`;
  
    db.query(sql, [license_plate, password], (err, result) => {
      if (err) {
        console.log(err);
        res.json({ success: false, message: "Erro ao cadastrar usuário." });
      } else {
        res.json({ success: true, message: "Usuário cadastrado com sucesso." });
      }
    });
  });

// Login
app.post("/carro/login", (req, res) => {
    const { license_plate, password } = req.body;
    const sql = `SELECT * FROM vehicle_log WHERE license_plate = ? AND password = ?`;
  
    db.query(sql, [license_plate, password], (err, result) => {
      if (err) {
        res.json({ success: false, message: "Erro no login." });
      } else if (result.length > 0) {
        res.json({ success: true, data: result[0] });
      } else {
        res.json({ success: false, message: "Placa ou senha incorretos." });
      }
    });
  });

  // Listar todos os veículos cadastrados
app.get("/carros", (req, res) => {
  const sql = "SELECT * FROM vehicle_log";
  db.query(sql, (err, result) => {
      if (err) {
          res.json({ success: false, message: "Erro ao buscar registros." });
      } else {
          res.json({ success: true, data: result });
      }
  });
});

// Atualizar veículo
app.put("/carro/editar/:id", (req, res) => {
  const { id } = req.params;
  const { license_plate, password } = req.body;
  const sql = "UPDATE vehicle_log SET license_plate = ?, password = ? WHERE id = ?";
  
  db.query(sql, [license_plate, password, id], (err, result) => {
      if (err) {
          res.json({ success: false, message: "Erro ao atualizar registro." });
      } else {
          res.json({ success: true, message: "Registro atualizado com sucesso." });
      }
  });
});

// Deletar veículo
app.delete("/carro/deletar/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM vehicle_log WHERE id = ?";
  
  db.query(sql, [id], (err, result) => {
      if (err) {
          res.json({ success: false, message: "Erro ao deletar registro." });
      } else {
          res.json({ success: true, message: "Registro deletado com sucesso." });
      }
  });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
// Vagas
// app.put('/vaga/editar', (request, response) =>{
//   let params = Array(
//       request.body.occupied,
//       request.body.vehicle_id,
//       request.body.id
//   )
//   let query = 'UPDATE car_space SET occupied = ?, vehicle_id = ? WHERE id = ?'
//   db.query(query, params, (err, results) => {
//       if ( results && results.affectedRows > 0){
//           response
//           .status(200)
//           .json({
//               success: true,
//               message: 'Sucesso',
//               data: results
//           })
//       } else{
//           response
//           .status(500)
//           .json({
//               success: false,
//               message: 'Sem sucesso',
//               data: err
//           })
//       }        

//   })
// })

// //listar vagas ocupadas
// app.get('/vagas', (request, response) => {
//   const query = 'SELECT id, vehicle_id FROM car_space WHERE vehicle_id IS NOT NULL'
//   db.query(query, (err, results) =>{
//       if(results) {
//           response
//           .status(200)
//           .json({
//               sucess: true,
//               message: 'Sucesso',
//               data: results
//           }) 
//       } else{
//           response
//           .status(500)
//           .json({
//               sucess: false,
//               message: 'Sem sucesso',
//               data: err
//           }) 
//       }
//   })
// })

// //Listar carros
// app.get('/carros', (request, response) => {
//   const query = 'SELECT id, license_plate FROM vehicle_log'
//   db.query(query, (err, results) =>{
//       if(results) {
//           response
//           .status(200)
//           .json({
//               sucess: true,
//               message: 'Sucesso',
//               data: results
//           }) 
//       } else{
//           response
//           .status(500)
//           .json({
//               sucess: false,
//               message: 'Sem sucesso',
//               data: err
//           }) 
//       }
//   })
// })

// //Excluir carro
// // app.delete('/carro/deletar/:id', (request, response) =>{
// //   let params = request.params.id
// //   let query = 'DELETE FROM carros WHERE id = ?'
// //   connection.query(query, params, (err, results) =>{
// //       if(results) {
// //           response
// //           .status(200)
// //           .json({
// //               success: true,
// //               message: 'Sucesso',
// //               data: results
// //           }) 
// //       } else{
// //           response
// //           .status(500)
// //           .json({
// //               success: false,
// //               message: 'Sem sucesso',
// //               data: err
// //           }) 
// //       }
// //   })
// // })

// //Editar carro
// // app.put('/carro/editar/:id', (request, response) =>{
// //   let params = Array(
// //       request.body.placa,
// //       request.body.motorista,
// //       request.params.id
// //   )

// //   let query = 'UPDATE carros SET placa = ?, motorista = ? WHERE id = ?'

// //   connection.query(query, params, (err, results) =>{
// //       if(results) {
// //           response
// //           .status(200)
// //           .json({
// //               sucess: true,
// //               message: 'Sucesso',
// //               data: results
// //           }) 
// //       } else{
// //           response
// //           .status(500)
// //           .json({
// //               sucess: false,
// //               message: 'Sem sucesso',
// //               data: err
// //           }) 
// //       }

// //   })
// // })
// app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));