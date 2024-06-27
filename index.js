document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(usuarios => {
            const user = usuarios[0];  
            document.querySelector('.titulo').textContent = user.email;
        });

    fetch('http://localhost:3000/repositorios')
        .then(response => response.json())
        .then(repositorios => {
            const reposContainer = document.querySelector('.repositorios');
            repositorios.forEach(repo => {
                const repoDiv = document.createElement('div');
                repoDiv.classList.add('col-md-4');
                repoDiv.innerHTML = `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${repo.nome}</h5>
                            <p class="card-text">${repo.descricao}</p>
                            <p class="card-text"><small class="text-muted">Criado em: ${repo.dataCriacao}</small></p>
                            <a href="detalheCard.html?repo=${repo.nome}" class="btn btn-primary">Ver Repositório</a>
                        </div>
                    </div>`;
                reposContainer.appendChild(repoDiv);
            });
        });

    fetch('http://localhost:3000/colegas')
        .then(response => response.json())
        .then(colegas => {
            const colegasContainer = document.querySelector('.colegas');
            colegas.forEach(colega => {
                const colegaDiv = document.createElement('div');
                colegaDiv.classList.add('col-md-4');
                colegaDiv.innerHTML = `
                    <div class="card mb-3">
                        <img src="${colega.foto}" alt="Imagem do colega ${colega.id}" class="card-img-top">
                        <div class="card-body text-center">
                            <h5 class="card-title">${colega.nome}</h5>
                            <p class="card-text">${colega.profissao}</p>
                            <a href="${colega.perfilGitHub}" class="btn btn-outline-secondary">Perfil no GitHub</a>
                        </div>
                    </div>`;
                colegasContainer.appendChild(colegaDiv);
            });
        });
});