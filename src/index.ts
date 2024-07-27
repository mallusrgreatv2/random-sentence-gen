import convertToGerund from "./gerundize";
import templates from "./jsons/sentenceTemplates.json";
import subjects from "./jsons/subjects.json";
import verbs from "./jsons/verbs.json";

export default function generateRandomSentence() {
  let randomTemplate = random(templates);
  const subjectReplacements = randomTemplate.match(/\$subject[0-9]+/g)!;
  subjectReplacements.forEach((rep, i) => {
    const subject = random(subjects);
    randomTemplate = randomTemplate.replace(
      rep,
      `${AAn(subject)
        .split("")
        .map((char, ichar) =>
          ichar === 0 && i === 0 ? char.toUpperCase() : char
        )
        .join("")} ${subject}`
    );
  });
  randomTemplate = randomTemplate.replace(
    "$verb",
    convertToGerund(random(verbs))
  );
  const punctuations = [".", ";", "...", "!"];
  randomTemplate = randomTemplate.replace("$punct", random(punctuations));
  return randomTemplate;
}
function random<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function AAn(subject: string) {
  if ("AEIOU".split("").includes(subject.at(0)!)) return "an";
  else return "a";
}
for (let i = 0; i < 10; i++) {
  console.log(generateRandomSentence());
}
