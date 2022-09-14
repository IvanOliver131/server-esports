import express, { Request, Response } from "express";

const app = express();

app.get("/games", (request: Request, response: Response) => {
  return response.json([]);
});

app.post("/ads", (request: Request, response: Response) => {
  return response.status(201).json([]);
});

app.get("/ads", (request: Request, response: Response) => {
  return response.json([
    { id: 1, name: "Anuncio 1" },
    { id: 2, name: "Anuncio 2" },
    { id: 3, name: "Anuncio 3" },
  ]);
});

app.listen(3333, () => {
  console.log("Server running in port 3333 🚀");
});
