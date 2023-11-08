const app = {
  PORT: Number(process.env.PORT) || 3376,
  NODE_ENV: process.env.NODE_ENV, // # development | production | testing
}

const cors = {
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.CLIENT_URL
      : "https://localhost:5173",
  methods: ["OPTIONS", "GET", "POST", "PUT","DELETE"],
  credentials: false,
};

const websocket = {
  transports: ["websocket", "WebTransport"],
  cors,
};

export default {
  app,
  cors,
  websocket
}
