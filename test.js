/* @flow */

class Test {
  name: string = 'Good';

  sayName = () => {
    console.log(`Hi I am ${this.name}`);
  };
}

const test = new Test();
test.sayName();
