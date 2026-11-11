
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

    if (!portfolio) {
      return res.status(404).json({
        message: "Portfolio not found.",
      });
    }

    res.json(portfolio);
  } catch (error) {
    console.error("Portfolio error:", error);
    res.status(500).json({
      message: "Failed to retrieve portfolio data.",
    });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.json(projects);
  } catch (error) {
    console.error("Get projects error:", error);
    res.status(500).json({
      message: "Failed to retrieve projects.",
    });
  }
});

app.post("/api/projects", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof description !== "string" ||
      !description.trim()
    ) {
      return res.status(400).json({
        message: "Title and description are required.",
      });
    }

    const portfolio = await prisma.portfolio.findFirst({
      select: {
        id: true,
      },
    });

    if (!portfolio) {
      return res.status(404).json({
        message: "Portfolio not found.",
      });
    }

    const project = await prisma.project.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        portfolioId: portfolio.id,
      },
    });

    res.status(201).json({
      message: "Project created successfully.",
      project,
    });
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({
      message: "Failed to create project.",
    });
  }
});

app.put("/api/projects/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, description } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid project ID.",
      });
    }

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof description !== "string" ||
      !description.trim()
    ) {
      return res.status(400).json({
        message: "Title and description are required.",
      });
    }

    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      return res.status(404).json({
        message: "Project not found.",
      });
    }

    const project = await prisma.project.update({
      where: { id },
      data: {
        title: title.trim(),
        description: description.trim(),
      },
    });

    res.json({
      message: "Project updated successfully.",
      project,
    });
  } catch (error) {
    console.error("Update project error:", error);
    res.status(500).json({
      message: "Failed to update project.",
    });
  }
});

app.delete("/api/projects/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid project ID.",
      });
    }

    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      return res.status(404).json({
        message: "Project not found.",
      });
    }

    await prisma.project.delete({
      where: { id },
    });

    res.json({
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.error("Delete project error:", error);
    res.status(500).json({
      message: "Failed to delete project.",
    });
  }
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

async function shutdown() {
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
