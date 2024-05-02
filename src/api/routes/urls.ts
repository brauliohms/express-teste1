import { Router } from "express";
import { routerNfseList } from "./nfseList";

export const router = Router();

router.use("/nfse-listagem", routerNfseList);
