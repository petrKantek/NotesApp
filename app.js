import express, { urlencoded, json } from "express";
import connectToDatabase from "./database/dbConfig";
import noteRoutes from "./routes/index";
import errorMiddleware from "./middlewares/error";
import cors from "cors";

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

app.use(cors());

app.use(noteRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    errors: [
      {
        msg: "Route not found",
      },
    ],
  });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;
connectToDatabase().then((_) => {
  app.listen(PORT, (_) => {
    console.log(`Server started on port ${PORT}`);
  });
});
