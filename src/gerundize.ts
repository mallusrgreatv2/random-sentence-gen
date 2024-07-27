export default function convertToGerund(verb: string): string {
  // Rule 1: Add "-ing" to the verb.
  const addIng = (v: string): string => `${v}ing`;

  // Rule 2: When a verb ends in "e", drop the "e" and add "-ing".
  const dropEAddIng = (v: string): string => `${v.slice(0, -1)}ing`;

  // Rule 3: When a one-syllable verb ends in vowel + consonant, double the final consonant and add "-ing".
  const doubleFinalConsonant = (v: string): string =>
    `${v}${v[v.length - 1]}ing`;

  // Rule 4: When a verb ends in vowel + consonant with stress on the final syllable, double the consonant and add "-ing".
  const doubleFinalConsonantWithStress = (v: string): string =>
    `${v}${v[v.length - 1]}ing`;

  // Rule 5: Do not double the consonant if the stress is not on the final syllable.
  const noDoubleConsonant = (v: string): string => addIng(v);

  // Helper function to identify vowel.
  const isVowel = (char: string): boolean => "aeiou".includes(char);

  // Helper function to determine if a verb is one-syllable.
  const isOneSyllable = (v: string): boolean =>
    v.split(/[^aeiou]/).length === 2;

  // Helper function to determine the stress pattern (simplistic approach).
  const isStressOnFinalSyllable = (v: string): boolean => {
    // Simple heuristic: if the last vowel is followed by a consonant, stress might be on the final syllable.
    const vowelRegex = /[aeiou]$/;
    const lastChar = v[v.length - 1];
    return vowelRegex.test(v) && !isVowel(lastChar);
  };

  // Main conversion logic.
  const lastChar = verb[verb.length - 1];
  const secondLastChar = verb[verb.length - 2];

  if (lastChar === "e") {
    return dropEAddIng(verb);
  } else if (
    isOneSyllable(verb) &&
    isVowel(secondLastChar) &&
    !isVowel(lastChar)
  ) {
    return doubleFinalConsonant(verb);
  } else if (
    isStressOnFinalSyllable(verb) &&
    isVowel(secondLastChar) &&
    !isVowel(lastChar)
  ) {
    return doubleFinalConsonantWithStress(verb);
  } else {
    return noDoubleConsonant(verb);
  }
}
