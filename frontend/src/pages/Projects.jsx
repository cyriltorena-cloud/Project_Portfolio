
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5000/api/projects";

  async function loadProjects() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to retrieve projects.");
      }

      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  function resetForm() {
    setTitle("");
    setDescription("");
    setEditingId(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Please complete all fields.");
      return;
    }

    try {
      setSaving(true);
      setMessage("");
      setError("");

      const url = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Operation failed.");
      }

      setMessage(result.message);
      resetForm();
      await loadProjects();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(project) {
    setTitle(project.title);
    setDescription(project.description);
    setEditingId(project.id);
    setMessage("");
    setError("");
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      setMessage("");
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete project.");
      }

      setMessage(result.message);

      if (editingId === id) {
        resetForm();
      }

      await loadProjects();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="section">
      <h2>Projects</h2>

      <p>
        Here are my academic and personal projects.
      </p>

      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-actions">
              <button
                type="button"
                className="project-edit-btn"
                onClick={() => handleEdit(project)}
              >
                Edit
              </button>

              <button
                type="button"
                className="project-delete-btn"
                onClick={() => handleDelete(project.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="project-manager">
        <h3>
          {editingId ? "Update Project" : "Project Management"}
        </h3>

        <p>
          Add, edit, and manage your portfolio projects.
        </p>

        <form className="project-form" onSubmit={handleSubmit}>
          <label htmlFor="project-title">Project Title</label>

          <input
            id="project-title"
            type="text"
            placeholder="Enter project title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />

          <label htmlFor="project-description">Description</label>

          <textarea
            id="project-description"
            placeholder="Enter project description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows="4"
            required
          />

          <div className="project-form-actions">
            <button
              type="submit"
              className="project-save-btn"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : editingId
                  ? "Update Project"
                  : "Add Project"}
            </button>

            {editingId && (
              <button
                type="button"
                className="project-cancel-btn"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {message && (
          <p className="project-success">{message}</p>
        )}

        {error && (
          <p className="project-error">{error}</p>
        )}

        {loading && <p>Loading projects...</p>}

        {!loading && projects.length === 0 && (
          <p>No projects found. Add your first project above.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
