const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio API is running!",
  });
});

app.get("/api/portfolio", async (req, res) => {
  try {
    const portfolio = await prisma.portfolio.findFirst({
      include: {
        skills: true,
        projects: true,
        certificates: true,
      },
    });

    res.json(portfolio);
  } catch (error) {
    console.error("Portfolio error:", error);
    res.status(500).json({
      message: "Failed to retrieve portfolio data.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});