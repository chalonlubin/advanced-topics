'use strict';

const ransomNote = 'aa';
const magazine = 'aaab';

function canConstruct(ransomNote, magazine) {
  const bank = {};

  for (let char of magazine) {
    if (bank[char]) {
      bank[char]++;
    } else {
      bank[char] = 1;
    }
  }

  for (const char of ransomNote) {
    if (bank[char] > 0) {
      bank[char]--;
    } else {
      return false;
    }
  }

  return true;
}

canConstruct(ransomNote, magazine);

/* alternative approach found in leetcode solutions */

var canConstruct2 = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, '');
  }

  return !ransomNote;
};

canConstruct2(ransomNote, magazine);
