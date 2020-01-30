import "@babel/polyfill";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const handleListen = () => {
  console.log(`🟢  Connecting Server http://localhost:3000`);
};

app.listen(PORT, handleListen);
