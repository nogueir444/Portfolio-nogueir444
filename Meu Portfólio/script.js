const username = 'nogueir444';
const projectsContainer = document.getElementById('github-projects');

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const projectsToShow = data.slice(0, 3);
    
    projectsToShow.forEach(repo => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');

      const projectTitle = document.createElement('h3');
      projectTitle.textContent = repo.name;

      const projectDescription = document.createElement('p');
      projectDescription.textContent = repo.description || 'Descrição não disponível';

      const projectLink = document.createElement('a');
      projectLink.href = repo.html_url;
      projectLink.target = '_blank'; 
      projectLink.rel = 'noopener noreferrer'; // Melhora a segurança
      projectLink.textContent = 'Ver no GitHub';

      projectItem.appendChild(projectTitle);
      projectItem.appendChild(projectDescription);
      projectItem.appendChild(projectLink);

      projectsContainer.appendChild(projectItem);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar os projetos:', error);
  });
