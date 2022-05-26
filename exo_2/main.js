// ################################################
// ################################################
function changeTitles() {
	document.getElementsByTagName("h1")[0].innerHTML = "Ce que j'ai appris à THP";
	document.querySelectorAll("p")[1].innerHTML =
		"THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

changeTitles();

// ################################################
// ################################################
function changeCallToActions() {
	let bigBtn = document.querySelectorAll("a")[4];
	bigBtn.innerHTML = "Ok je veux tester";
	bigBtn.href = "http://www.thehackingproject.org";
	//
	let littleBtn = document.querySelectorAll("a")[5];
	littleBtn.innerHTML = "Non merci";
	littleBtn.href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions();

// ################################################
// ################################################
function changeLogoName() {
	let logo = document.querySelectorAll("a")[3].childNodes[3];
	logo.innerHTML = "The THP Experience";
	logo.style.fontSize = "2rem";
}
changeLogoName();

// ################################################
// ################################################
function populateImages() {
	const imagesArray = [
		"https://img.icons8.com/color/480/000000/html-5.png",
		"https://img.icons8.com/color/480/000000/css3.png",
		"https://img.icons8.com/color/480/000000/javascript.png",
		"https://img.icons8.com/color/480/000000/ruby-programming-language.png",
		"https://img.icons8.com/color/480/000000/bootstrap.png",
		"https://img.icons8.com/color/480/000000/github.png",
		"https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
		"https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
		"https://img.icons8.com/color/480/000000/heroku.png",
	];
	for (let i = 0; i < imagesArray.length; i++) {
		document.querySelectorAll("img.card-img-top")[i].src = imagesArray[i];
	}
}
populateImages();

// ################################################
// ################################################
function deleteLastCards() {
	let image = document.querySelectorAll("div.col-md-4");
	for (let i = 6; i < image.length; i++) {
		image[i].remove();
	}
}
deleteLastCards();

// ################################################
// ################################################
function changeCardsText() {
	const text = [
		"L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
		"Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
		"JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.",
	];

	for (let i = 0; i < text.length; i++) {
		document.querySelectorAll("p.card-text")[i].innerHTML = text[i];
	}
}
changeCardsText();

// ################################################
// ################################################
function changeViewButtons() {
	var btn = document.querySelectorAll(
		"div > button.btn-sm.btn-outline-secondary"
	);
	for (let i = 0; i < btn.length; i += 2) {
		btn[i].classList.remove("btn-outline-secondary");
		btn[i].classList.add("btn-success");
	}
}

changeViewButtons();

// ################################################
// ################################################
