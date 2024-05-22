// le tableau d'object qui contient toutes les formations

let formations = [
    {
        id: 1,
        image: "https://www.php.net/images/meta-image.png",
        titre: "PHP",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "Introduction",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cWoq5znh0vw?si=HHkYjaCtT-dbg8Dc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 2,
                titre: "Variables et type",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/kj2NJpO9Z7I?si=0FQCSUysBwb5AcGv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "Constante",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UnqJwiIPbag?si=6iVH7OqOlqhatiQ9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "Boucles",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/4C4lwPM1ESk?si=Z4pOB5hOfxMuUyD1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 5,
                titre: "Fonctions",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UXdvpKRQsx8?si=fVUIwGQC-hMAnj_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 6,
                titre: "Tableaux",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/l30p6dYg0yQ?si=M4LRv5LwZBsmS8yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 7,
                titre: "Conlucsion",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/e-vReV3nLxw?si=0Sv-V8V2Ie62KKRq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Gratuit",
        description: "Cette formation PHP s’adresse aux développeurs et chefs de projet amenés à gérer de A à Z un projet web dynamique en PHP. Le public visé désire donc connaître les fonctionnalités essentielles d’un site ou d’une application web : la structure « brute » mais aussi le traitement des formulaires, les paramètres de navigation, l’accès à la base de données, les notions de sécurité…",
        commentaires:[]
        
    },
    {
        id: 2,
        image: "https://d3mxt5v3yxgcsr.cloudfront.net/courses/1932/course_1932_image.png",
        titre: "UML",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "Diagrammes d'objets",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WiXbRsQWArU?si=qB5-pVbaOU5-FvYZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>>`
            },
            {
                id: 2,
                titre: "Diagramme de classes",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/StnSed-Euj0?si=lW5_Tt9q0IDEURp1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "TD Diagrammes de classes",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0itTJ4r5uKI?si=FSZ4FjdcK18_-NfK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "Video 2 TD Diagramme de classes",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/StnSed-Euj0?si=yXCAgPptXgCTs3Us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Payant",
        description: "Au cœur du métier de la maîtrise d’ouvrage se trouve l’expression des besoins et le cahier des charges fonctionnels d’une application. Pour garantir la qualité de la mise en œuvre, une bonne représentation du système à développer passe par la modélisation des processus métier. A l’aide de ce cours pratique, vous découvrirez les principaux diagrammes de modélisation UML 2.0 pour être en mesure de décrire les informations et les processus du système ciblé. ",
        commentaires:[]
        
    },
    {
        id: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        titre: "JS",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "Présentation",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dAUL0es8kRI?si=sNgKRmej9yDKcS00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 2,
                titre: "Prérequis et impostances",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/aawdLOxoWq8?si=xablqtPaHWJuCsua" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "C'est quoi le JS",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Scj75AA2qME?si=iK9EDAG9r1WYCe8m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "API et Librairie",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/IPXxJFJaY8g?si=uXsud0qnGDu0iDXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Gratuit",
        description: "Le langage JavaScript est incontournable lorsque vous souhaitez travailler sur des sites ou application web. Du fait de son passé et de sa mauvaise réputation, il a été largement sous-estimé par les développeurs qui ne voyaient en lui qu’un simple langage de manipulation HTML et de validation de formulaire. Les choses ont bien changé, il est maintenant absolument nécessaire de considérer JavaScript comme un langage de premier plan",
        commentaires:[]
        
    },
    {
        id: 4,
        image: "https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn",
        titre: "HTML",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "Présentation",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/b6thG9lq2C0?si=pT7vExNGZFZXBi2W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 2,
                titre: "C'est quoi HTML",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KzXUH1LKqsc?si=s1nyy_kEIdjm4TxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "Structure de base",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0VRwVvgc3VE?si=_gNze6JEAUqWeFSV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "Télécharger Vscode",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/P5biY6vWN4k?si=FTxD7sXOoitO8pg3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Gratuit",
        description: "Ayant suivi d'autres cours connexes sur d'autres plateformes, je peux dire que ce cours est le cours le plus pratique et le plus facilement applicable en matière de conception et de développement de sites web que j'ai suivi.Bernie Pacis",
        commentaires:[]
        
    },
    {
        id: 5,
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
        titre: "CSS",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "Présentation",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/3lt4jgC731c?si=B-G-4eE6R256rxBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 2,
                titre: "C'est quoi CSS",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/K1C9HNtEkvg?si=FHhhjqe0a6v7GnQZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "Ou mettre du CSS",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/let17aSLfek?si=MOiFrv6LiRMHgmEH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "Les sélecteurs CSS",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/kCKCyyWT3B4?si=u6Xe2Z6Jkpwa2kVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Gratuit",
        description: "CSS - abréviation pour CClading S tyle S heets - est un langage de programmation que vous utilisez pour transformer vos pages HTML brutes en véritables sites web. Ce cours couvre tout - nous commençons par les bases même (Qu'est-ce que le CSS? Comment cela fonctionne-t-il ? Comment l'utilisez-vous)? et plongez-vous progressivement plus profondément et plus profondément. Et nous le faisons en montrant à la fois des exemples pratiques ainsi que la théorie qui le sous-tend",
        commentaires:[]
        
    },
    {
        id: 6,
        image: "https://www.creative-tim.com/blog/content/images/wordpress/2017/04/banner-angularjs.jpg",
        titre: "ANGULAR",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "C'est quoi angular",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/mg3-Owd5dhE?si=XO-Wb-T3yrmsw_iS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 2,
                titre: "Introduction",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zTrlLZoPvLQ?si=C-9Qv27wsCfbbnh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "Préparation",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-Z4F8LHwuZA?si=s_nOugCiIVpLOG7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "Ce qu'il faut savoir",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/z-YYljAix4k?si=YYez2jjwdCTGGcob" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Payant",
        description: "Rejoignez le cours Angular le plus complet et le plus vendu  et apprenez tout sur ce cadre incroyable à partir de zéro, en grande profondeur.Ce cours part de zéro, vous n'avez pas besoin de connaître Angular 1 ni Angular 2,De la mise en place au déploiement, ce cours couvre tout. Vous en apprendrez tout sur les composants, les directives, les services, les formulaires, l'accès Http, l'authentification, l'optimisation d'une application angulaire avec des modules et la compilation hors ligne et bien plus encore - et en fin de compte: vous apprendrez comment déployer une application",
        commentaires:[]
        
    },
    {
        
        id: 7,
        image: "https://ionic.io/blog/wp-content/uploads/2020/10/white-on-color.png",
        titre: "IONIC",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "Introduction",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZsgJeEd3E0w?si=0INFjl0uPCIvMy4D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 2,
                titre: "Compréhension",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YucPYBKTEkk?si=KIoUGt8Jb8KRjuBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "Installation",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/3cEcQYQeo8c?si=dfX6kMENz9ENXDaZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "Réaliser un projet",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/_eG9Q2RRJVE?si=a4EodmkqTAque1WE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Payant",
        description: "Rejoignez ce cours à succès pour apprendre à utiliser les technologies de développement angulaire et web pour construire de vraies applications mobiles natives pour iOS et Android.Ionic est l'une des technologies les plus excitantes que vous puissiez apprendre en ce moment - elle vous permet d'utiliser une base de code (écrite en HTML, JS et CSS) pour construire et expédier des applications web comme des applications web normales (progressives) ainsi que de vraies applications mobiles natives pour iOS et Android. Ce cours vous enseigne la dernière version d'Ionic à partir de zéro sans avoir de connaissance préalable à ce sujet.",
        commentaires:[]
    },
    {
        
        id: 8,
        image: "https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg",
        titre: "REACT",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "Introduction",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/NT0s0aOHu0Q?si=dzwrU0QTSSVodyLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 2,
                titre: "Installation",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KuEg1hajUmM?si=LrSgMOQJNpSQlVyi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "Syntaxe JSX",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TAuiJHmvPAQ?si=xRPgzqZxVV1-WfXP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "Chargement",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ktms8hrJ-Tk?si=JIOJAGwPqbT-skjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Payant",
        description: "En 2023, React est toujours la compétence numéro un pour apprendre si vous voulez devenir un développeur frontal à succès. Mais cela peut être difficile. Il y a tellement de parties mobiles, tellement de bibliothèques différentes, autant de tutoriels là-bas.C'est pourquoi vous êtes venu ici... Et vous êtes venu au bon endroit. C'est LA React ultime pour 2023 et au-delà.",
        commentaires:[]
    },
    {
        
        id: 9,
        image: "https://img-c.udemycdn.com/course/750x422/4826008_7c09_2.jpg",
        titre: "MYSQL",
        introduction: "Une formation qui vous immerge dans les bonnes pratiques du language.",
        videos: [
            {
                id: 1,
                titre: "Cours SQL",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/V_jNPU3ewvs?si=eQ2fglzxOEeT7DTp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 2,
                titre: "Découverte partie 1",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xqIJhYVE33M?si=tzFqhJFRFx7_KRFH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 3,
                titre: "Découverte parie 2",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/S9qzTGe2MNc?si=6QlzEZmEdzcb0Xgt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            },
            {
                id: 4,
                titre: "Découverte partie 3",
                contenu: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FlmQT9W3lxM?si=VcOhYQkpftA8QLX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            }
        ],
        etat: "Payant",
        description: "Formation avec de la pratique pour maîtriser toutes les tâches d'administration d'un serveur de bases de données MySQL. Vous verrez comment installer le serveur, le configurer, comment paramétrer InnoDB, gérer les droits d'accès, effectuer des sauvegardes/restaurations et gérer la production. ",
        commentaires:[]
    }
]

// debut de la logique de l'injection des formations


let allcards = document.getElementById('all-cards');
function AfficherFormations() {
    formations.forEach(formation => {
        allcards.innerHTML += `
        <div class="col">
                    <div class="card" id="card">
                        <img src="${formation.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
    
                                <h5 class="card-title">${formation.titre}</h5>
                                <!-- <div class="">
                                    Gratuit
                                </div> -->
                                <span>${formation.etat}</span>
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                                
                                <p class="card-text w-75">Une formation qui vous immerge
                                    dans les bonnes pratiques du 
                                    language.</p>
                                    <i class="bi bi-chat-dots"></i>
                            </div>
                        </div>
                        <div class="card-button">
                            <button onclick="detailFormation(${formation.id})">Voir plus</button>
                        </div>
                    </div>
                </div>
        `;
    })
}
AfficherFormations()
// fin de la logique de l'injection des formations

// la fonction qui affiche les detail de la formation
function detailFormation(id) {
    // alert(id)
    FindFormation(id);
    // console.log(FindFormation(id));
    // window.location.href = "details_formation.html";
}





// la foction rechercher, qui recherche une formation
let champs_recherche = document.getElementById('champs_recherche');
let go = document.getElementById('go');
// go.addEventListener('click', () => {
//     RechercherFormations(champs_recherche.value)
// })
champs_recherche.addEventListener('input', () => {
    RechercherFormations(champs_recherche.value)
})

function RechercherFormations(recherche) {
    allcards.innerHTML = "";
    let isExisting = false;
    formations.forEach(formation => {
        if (formation.titre.toLowerCase().includes(recherche.toLowerCase())) {

            allcards.innerHTML += `
            <div class="col">
                        <div class="card" id="card">
                            <img src="${formation.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
        
                                    <h5 class="card-title">${formation.titre}</h5>
                                    <!-- <div class="">
                                        Gratuit
                                    </div> -->
                                    <span>${formation.etat}</span>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    
                                    <p class="card-text w-75">Une formation qui vous immerge
                                        dans les bonnes pratiques du 
                                        language.</p>
                                        <i class="bi bi-chat-dots"></i>
                                </div>
                            </div>
                            <div class="card-button">
                                <button onclick="detailFormation(${formation.id})">Voir plus</button>
                            </div>
                        </div>
                    </div>
            `;
            isExisting = true;
        }
    })
    if (isExisting != true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La recherche est introuvable',
        })
        champs_recherche.value = "";
        AfficherFormations()
    }
}



// la fonction qui filtre les formations par etat(payant ou gratuit)

function filtrer(filtre) {
    allcards.innerHTML = "";
    if (filtre != "tout") {
        formations.forEach(formation => {
            if (formation.etat.toLowerCase() == filtre.toLowerCase()) {
                allcards.innerHTML += `
                <div class="col">
                            <div class="card" id="card">
                                <img src="${formation.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
            
                                        <h5 class="card-title">${formation.titre}</h5>
                                        <!-- <div class="">
                                            Gratuit
                                        </div> -->
                                        <span>${formation.etat}</span>
                                    </div>
                                    <div class="d-flex justify-content-between mt-3">
                                        
                                        <p class="card-text w-75">Une formation qui vous immerge
                                            dans les bonnes pratiques du 
                                            language.</p>
                                            <i class="bi bi-chat-dots"></i>
                                    </div>
                                </div>
                                <div class="card-button">
                                    <button onclick="detailFormation(${formation.id})">Voir plus</button>
                                </div>
                            </div>
                        </div>
                `;
            }
        })
    } else {
        AfficherFormations();
    }

}

// la fonction qui recherche une formation par id et la place dans le localStorage ce qui permettra par la suite de l'afficher dans la page détailFormation.html

function FindFormation(id) {
    formations.forEach(formation => {
        if (formation.id == id) {
            // alert('done')
            window.location.href="details_formation.html";
           
            // alert('hell')
            
            localStorage.setItem('formationSelected',JSON.stringify(formation));
        }
    })
}



