// import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { ColecaoNfseDB } from "./adapters/database";
import {
  AuthMiddleware,
  DeleteNfseController,
  GetUserNfseController,
  HelloController,
  InserirNfseController,
} from "./controllers";
import { DeletarNfse, GetUserNfse, InserirNfse } from "./core/nfse";

// Inicia Servidor Express ------------------------------------------
dotenv.config();
const porta = process.env.API_PORT ?? 4000;
const app = express();

// Configuração Básica ----------------------------------------------
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200,
//   })
// );
app.listen(porta, () => console.log(`🔥 Server is running on port ${porta}`));

// Configuração Rotas -----------------------------------------------
const nfseRouter = express.Router();
app.use("/v2/nfse", nfseRouter);

// ADAPTADORES (faz a conexão com o externo do meu core ou aplicação)
const bancoDados = new ColecaoNfseDB();

// CASOS DE USO (fluxos do meu core ou aplicação)
const getUserNfse = new GetUserNfse(bancoDados);
const deleteNfse = new DeletarNfse(bancoDados);
const inserirNfse = new InserirNfse(bancoDados);

// ------------------------------------ ROTAS PRIVADAS
const authMiddleware = AuthMiddleware();
// CONTROLLERS (entre o mais externo e core fazendo a junção de um com outro)
new GetUserNfseController(nfseRouter, getUserNfse, authMiddleware);
new InserirNfseController(nfseRouter, inserirNfse, authMiddleware);
new DeleteNfseController(nfseRouter, deleteNfse, authMiddleware);

// ------------------------------------ ROTAS PUBLICAS
new HelloController(app);
