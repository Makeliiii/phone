const phone = (phone: string): string => {
  const phoneNumbers = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
  }
  const numArr: string[] = phone.split(' ');
  const asdfg: string[][] = [];
  const text: string[] = [];

  for (const series of numArr) {
    asdfg.push(series.split('-'))
  }

  for (let i: number = 0; i < asdfg.length; i++) {
    for (const sequence of asdfg[i]) {
      const num: number = parseInt(sequence.split('')[0]);
      const index = sequence.length - 1;

      text.push(phoneNumbers[num][index]);
    }
    text.push(' ');
  }

  const joined = text.join('');
  return joined;
}

const kakka = "66-33-888-33-777 4-666-66-66-2 4-444-888-33 999-666-88-88-7 66-33-888-33-777 4-666-66-66-2 555-33-8 999-666-88 3-666-8-66 66-33-888-33-777 4-666-66-66-2 777-88-66 2-777-666-88-66-3 2-66-3 3-33-7777-33-777-8 999-666-88 66-33-888-33-777 4-666-66-66-2 6-2-55-33 999-666-88 222-777-999 66-33-888-33-777"

console.log(phone(kakka));