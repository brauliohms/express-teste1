import { Express, Request, Response } from "express";

export class HelloController {
  public constructor(private servidor: Express) {
    this.servidor.get("/", (req: Request, res: Response) => {
      return res.status(200).json({ message: "Bem Vindo à Integradocs" });
    });
  }
}
