// app.js
// Richtige Antworten bewusst abwechslungsreich verteilt

const quizData = [

{
question: "Woran erkannte Raphi die KI-Version von sich selbst?",
answers: [
"Die KI-Version hatte andere Kleider an.",
"Die KI-Version bewegte sich sehr langsam.",
"Die KI-Version klang anders als seine echte Stimme.",
"Die KI-Version hatte einen anderen Hintergrund."
],
correct: 2
},

{
question: "Welches Beispiel für KI im Alltag wird im Video genannt?",
answers: [
"KI lädt Handys schneller auf.",
"KI hilft bei der Gesichtserkennung auf Geräten.",
"KI repariert Computer selbstständig.",
"KI steuert automatisch jede Waschmaschine."
],
correct: 1
},

{
question: "Was braucht eine KI zum Lernen?",
answers: [
"Eine KI braucht besonders starke Batterien.",
"Eine KI braucht keine Informationen.",
"Eine KI braucht nur einen Bildschirm.",
"Eine KI braucht viele Daten zum Trainieren."
],
correct: 3
},

{
question: "Welches Objekt verwechselte die KI manchmal mit einem Chihuahua?",
answers: [
"Die KI verwechselte Chihuahuas manchmal mit Muffins.",
"Die KI verwechselte Chihuahuas manchmal mit Katzen.",
"Die KI verwechselte Chihuahuas manchmal mit Hasen.",
"Die KI verwechselte Chihuahuas manchmal mit Füchsen."
],
correct: 0
},

{
question: "Welche bekannte KI wird im Abschnitt über Chatbots genannt?",
answers: [
"Im Video wird Siri als Chatbot genannt.",
"Im Video wird Google Maps als Chatbot genannt.",
"Im Video wird ChatGPT als Chatbot genannt.",
"Im Video wird Photoshop als Chatbot genannt."
],
correct: 2
},

{
question: "Warum unterscheidet sich eine KI von einem Taschenrechner?",
answers: [
"Eine KI braucht weniger Strom als ein Taschenrechner.",
"Eine KI kann aus Erfahrungen lernen und sich verbessern.",
"Eine KI funktioniert ohne Programme und Regeln.",
"Eine KI kann nur sehr einfache Rechnungen lösen."
],
correct: 1
},

{
question: "Warum braucht eine KI viele Trainingsdaten?",
answers: [
"Eine KI braucht Daten, damit sie schneller sprechen kann.",
"Eine KI braucht Daten, damit sie eigene Geräte baut.",
"Eine KI braucht Daten, damit sie größer wird.",
"Eine KI braucht Daten, damit sie neue Muster erkennen lernt."
],
correct: 3
},

{
question: "Warum können Chatbots manchmal falsche Informationen geben?",
answers: [
"Chatbots versuchen vor allem glaubwürdige Antworten zu erzeugen.",
"Chatbots verstehen grundsätzlich keine Sprache.",
"Chatbots denken sich absichtlich falsche Antworten aus.",
"Chatbots dürfen keine Fakten verwenden."
],
correct: 0
},

{
question: "Weshalb sind Deepfakes problematisch?",
answers: [
"Deepfakes enthalten meistens keine Stimmen.",
"Deepfakes funktionieren nur mit schlechter Bildqualität.",
"Deepfakes können Menschen täuschen, weil sie echt wirken.",
"Deepfakes können nur in Filmen verwendet werden."
],
correct: 2
},

{
question: "Warum reicht es beim autonomen Fahren nicht, nur Verkehrsregeln zu kennen?",
answers: [
"Die KI muss Straßenschilder selbst bauen können.",
"Die KI muss gleichzeitig Musik abspielen können.",
"Die KI muss nur nachts sicher fahren können.",
"Die KI muss zusätzlich auf unerwartete Situationen reagieren können."
],
correct: 3
},

{
question: "Warum bleibt kritisches Denken trotz moderner KI wichtig?",
answers: [
"Menschen müssen überprüfen, ob KI-Ergebnisse wirklich stimmen.",
"Menschen sollen KI nur in der Schule verwenden.",
"Menschen dürfen KI grundsätzlich nicht benutzen.",
"Menschen müssen jede KI selbst programmieren können."
],
correct: 0
},

{
question: "Was zeigt das Beispiel mit der Go-KI besonders deutlich?",
answers: [
"Eine KI braucht keine Regeln zum Lernen.",
"Eine KI kann durch Training besser werden als Menschen.",
"Eine KI kann automatisch jedes Spiel spielen.",
"Eine KI kann nur sehr einfache Spiele verstehen."
],
correct: 1
},

{
question: "Warum vergleichen die Entwickler das Lernen einer KI mit dem Lernen eines Kindes?",
answers: [
"Beide denken genau gleich wie Erwachsene.",
"Beide lernen vollständig ohne Hilfe anderer Menschen.",
"Beide lernen durch viele Beispiele und Erfahrungen.",
"Beide können sofort schwierige Probleme lösen."
],
correct: 2
},

{
question: "Welche Aussage beschreibt die heutige KI am besten?",
answers: [
"Heutige KI-Systeme können alle menschlichen Fähigkeiten ersetzen.",
"Heutige KI-Systeme funktionieren komplett ohne Daten.",
"Heutige KI-Systeme treffen niemals falsche Entscheidungen.",
"Heutige KI-Systeme sind meist Spezialisten für einzelne Aufgaben."
],
correct: 3
},

{
question: "Welche Schlussfolgerung passt am besten zu den Aussagen vieler Expertinnen und Experten?",
answers: [
"KI wird wahrscheinlich immer vielseitiger und leistungsfähiger werden.",
"KI wird bald wieder vollständig verschwinden.",
"KI bleibt dauerhaft auf dem heutigen Stand stehen.",
"KI wird niemals neue Fähigkeiten lernen können."
],
correct: 0
}

];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

function buildQuiz(){

quizData.forEach((q, index)=>{

const questionDiv = document.createElement("div");
questionDiv.classList.add("question");

let answersHTML = "";

q.answers.forEach((answer, i)=>{
answersHTML += `
<label>
<input type="radio" name="question${index}" value="${i}">
${answer}
</label>
`;
});

questionDiv.innerHTML = `
<h2>${index + 1}. ${q.question}</h2>
<div class="answers">
${answersHTML}
</div>
`;

quizContainer.appendChild(questionDiv);

});

}

function showResults(){

let score = 0;

quizData.forEach((q, index)=>{

const selected = document.querySelector(`input[name="question${index}"]:checked`);
const labels = document.querySelectorAll(`input[name="question${index}"]`);

labels.forEach((input, i)=>{

const parent = input.parentElement;

parent.classList.remove("correct");
parent.classList.remove("wrong");

if(i === q.correct){
parent.classList.add("correct");
}

});

if(selected){

const answer = Number(selected.value);

if(answer === q.correct){
score++;
}else{
selected.parentElement.classList.add("wrong");
}

}

});

resultDiv.innerHTML = `
Du hast <strong>${score} von ${quizData.length}</strong> Fragen richtig beantwortet.
`;

window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
});

}

buildQuiz();

submitBtn.addEventListener("click", showResults);
