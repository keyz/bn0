import main from './jsx.tsx';
// ^ this error should be ignored by `ts0`

class Test {
  name: string = 'Good';

  sayName = async () => {
    let count = 0;

    while (count < 5) {
      await new Promise(resolve => {
        setTimeout(() => resolve(), 200);
      });

      count++;
      console.log(`Hi I am ${this.name} (x${count})`);
    }
  };
}

const test = new Test();
test.sayName();

main();
