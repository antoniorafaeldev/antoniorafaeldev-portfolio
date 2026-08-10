const projectsSection = document.getElementById("projects");

export const fetchProjects = async () => {
  try {
    const response = await fetch("../src/data/projects.json");

    if (!response.ok) return;

    const data = await response.json();
    renderProjects(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const renderProjects = (projects) => {
  projectsSection.innerHTML = ``;

  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project")
    const tags = project.tags;

    projectContainer.innerHTML = `
            <img src="${project.imgUrl}" alt="Imagem do projeto ${project.name}">
            <div class="project-content">
                <h2 class="project-title">${project.name}</h2>
                <div class="tags">
                    ${tags
                    .map(
                        (tag) => `<div class="tag">${tag}</div>
                        `,
                    )
                    .join("")}
                </div>
                <p>${project.description}</p>
            </div>
            <div class="project-links">
                <a href="${project.siteUrl}" target="_blank">Site</a>
                <a href="${project.repositoryUrl}" target="_blank">Repositório</a>
            </div>
        `;
    projectsSection.appendChild(projectContainer);
  });
};


