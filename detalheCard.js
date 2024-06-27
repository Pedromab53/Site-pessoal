document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const repoName = urlParams.get('repo');

    fetch(`http://localhost:3000/repositorios?nome=${repoName}`)
        .then(response => response.json())
        .then(repos => {
            if (repos.length > 0) {
                const repo = repos[0];
                document.querySelector('.nomes-titulos').textContent = `Repositório: ${repo.nome}`;
                document.querySelector('.descricao-repo').textContent = repo.descricao;
                document.querySelector('.data-criacao').textContent = repo.dataCriacao;
                document.querySelector('.linguagens').innerHTML = repo.linguagens.join(', ');
                document.querySelector('.link-repo').href = repo.link;
                document.querySelector('.link-repo').textContent = repo.link;
            }
        });

    fetch(`http://localhost:3000/atividades?repositorio=${repoName}`)
        .then(response => response.json())
        .then(atividades => {
            const atividadesContainer = document.querySelector('.atividades');
            atividades.forEach(atividade => {
                const atividadeDiv = document.createElement('div');
                atividadeDiv.classList.add('atividade');
                atividadeDiv.innerHTML = `
                    <h5>${atividade.tipo}</h5>
                    <p>${atividade.descricao}</p>
                    <p><small class="text-muted">Data: ${atividade.data}</small></p>`;
                atividadesContainer.appendChild(atividadeDiv);
            });
        });
});