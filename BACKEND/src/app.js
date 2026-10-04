import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import path from "path";
import productRoutes from "./modules/products/product.routes.js";

const app = express();

// Global middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Jewerkart Backend Server is healthy" });
});

// Mount Module Routes
app.use("/api/products", productRoutes);
app.use("/api/v1/products", productRoutes);

const frontendPath = path.join(path.resolve(), "../client/dist");
app.use(express.static(frontendPath));

app.get("*client", (req, res) => {
  res.sendFile("index.html", { root: frontendPath });
});

export default app;