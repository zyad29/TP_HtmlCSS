//*******************************INSERTION PHOTO DE PROFIL**********************************
const imgIdentite = document.getElementById('imgIdentite');
const inserPhoto = document.getElementById('inserPhoto');
const photoProfil = document.getElementById('photoProfil');

imgIdentite.addEventListener('click', () => {
    inserPhoto.click();
});

inserPhoto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e) => {
            photoProfil.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

//*******************************LIMTATION DE CHARACTERE**************************************

let description = document.querySelector('.zoneDescription')

function MaxTextarea(objettextarea, maxlenght){
    if(objettextarea.value.length > maxlenght){
        description.blur();
        objettextarea.value = objettextarea.value.substring(0, maxlenght);
        alert('Votre texte ne peut pas dépasser ' + maxlenght + ' caractères')
    }
}

//**********************GESTION DE LA PARTIE EXPERIENCE***************************

document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-experience');
    const experiencesContainer = document.getElementById('experiences-container');

    function createExperience(){
        const newExperience = document.createElement('div');
        newExperience.className = 'experience';
        newExperience.innerHTML = `
        <input type="text" placeholder="Intitulé de l'expérience"><br>
            <input type="text" placeholder="Entreprise"><br>
                <input type="text" placeholder="Période (ex: 11/2021 - 12/2021)"><br>
                    <input type="text" placeholder="Lieu">
                        <textarea onkeyup="MaxTextarea(this, 225)" name="" id="" placeholder="Desciprtion de l'entreprise"></textarea>
                            <h4>
                                Mission(s)
                            </h4>
                        <ul>
                            <li><input type="text" placeholder="Tâche(s) réalisée(s)"></li>
                        </ul>
                          <button class="add-task">Ajouter une tâche</button><br><br>
                          <button class="delete-experience">Supprimer Expérience</button><br><br>
                    
        `;
        experiencesContainer.appendChild(newExperience);

        const addTaskButton = newExperience.querySelector('.add-task');
        addTaskButton.addEventListener('click', function(){
            addTask(newExperience);
        });

        const deleteExperience = newExperience.querySelector('.delete-experience');
        deleteExperience.addEventListener('click', function(){
            experiencesContainer.removeChild(newExperience);
        });
    }

    function addTask(experience){
        const taskList = experience.querySelector('ul');
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <input type="text" placeholder="Nouvelle tâche">
            <button class="delete-mission">Supprimer</button>
        `;
        taskList.appendChild(newTask);

        const deleteTaskButton = newTask.querySelector('.delete-mission');
        deleteTaskButton.addEventListener('click', function(){
            taskList.removeChild(newTask);
        });
    }

    addButton.addEventListener('click', createExperience);

/**************************************GESTION DE LA PARTIE FORMATION*************************************************/

    const addFormation = document.getElementById('add-formation');
    const formationContainer = document.getElementById('education_container');

    function createFormation(){
        const newFormation = document.createElement('div');
        newFormation.className = 'formation';
        newFormation.innerHTML = `
            <input type="text" name="" id="" placeholder="Formation"><br>
                <input type="text" placeholder="Établissement"><br>
                    <input type="text" placeholder="Période (ex: 08/2013 - 06/2016)"><br><br>
                    <button class="delete-formation"> Supprimer formation </button><br><br>
        `;
        formationContainer.appendChild(newFormation);

        const deleteFormation = newFormation.querySelector('.delete-formation');
        deleteFormation.addEventListener('click', function(){
            formationContainer.removeChild(newFormation);
        });

    }

    addFormation.addEventListener('click', createFormation);


    /**********************************GESTION DE LA PARTIE COMPETENCE********************************************/

    const competenceContainer = document.getElementById('competence_container');
    const addCompetence = document.getElementById('ajouter-competence');

    function createCompetence(){
        const newCompetence = document.createElement('div');
        newCompetence.className = 'competence';
        newCompetence.innerHTML = `
        <input type="text" placeholder="...">
        <button class="delete-competence">Supprimer</button>
        `;
        competenceContainer.appendChild(newCompetence);

        const deleteCompetence = newCompetence.querySelector('.delete-competence');
        deleteCompetence.addEventListener('click', function(){
        competenceContainer.removeChild(newCompetence);
    });


    }

    addCompetence.addEventListener('click', createCompetence);

    /**********************************GESTION DE LA PARTIE PROJETS PERSONNELS********************************************/

    const projetPersoContainer = document.getElementById('projetPerso_container');
    const addProjet = document.getElementById('ajouter_projet');

    function createProjet(){
        const newProjet = document.createElement('div');
        newProjet.className = 'projet';
        newProjet.innerHTML = `
            <p>Projet : <input placeholder="..."> </p>
            <textarea onkeyup="MaxTextarea(this, 175)" placeholder='description du projet'></textarea>
            <button class="delete-projet">Supprimer</button><br><br>
        `;
        projetPersoContainer.appendChild(newProjet);

        const deleteProjet = newProjet.querySelector('.delete-projet');
        deleteProjet.addEventListener('click', function(){
            projetPersoContainer.removeChild(newProjet);
        });

    }

    addProjet.addEventListener('click', createProjet);

    /**********************************GESTION DE LA PARTIE LANGUES********************************************/

    const langueContainer = document.getElementById('langue_container');
    const addLangue = document.getElementById('ajouter_langue');

    function createLangue(){
        const newLangue = document.createElement('div');
        newLangue.className = 'langue';
        newLangue.innerHTML = `
            <input placeholder="...">
            <button class="delete-langue">Supprimer</button>
        `;
        langueContainer.appendChild(newLangue);

        const deleteLangue = newLangue.querySelector('.delete-langue');
        deleteLangue.addEventListener('click', function(){
            langueContainer.removeChild(newLangue);
        });
    }
    
    addLangue.addEventListener('click', createLangue);

    /**********************************GESTION DE LA PARTIE INTERETS********************************************/

    const interetContainer = document.getElementById('interet_container');
    const addInteret = document.getElementById('ajouter_interet');

    function createInteret(){
        const newInteret = document.createElement('div');
        newInteret.className = 'interet';
        newInteret.innerHTML = `
            <input placeholder="...">
            <button class="delete-interet">Supprimer</button>
        `;
        interetContainer.appendChild(newInteret);

        const deleteInteret = newInteret.querySelector('.delete-interet');
        deleteInteret.addEventListener('click', function(){
            interetContainer.removeChild(newInteret);
        });
    }

    addInteret.addEventListener('click', createInteret);

    

    
    

});
