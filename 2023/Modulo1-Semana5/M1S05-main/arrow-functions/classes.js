class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    setTimeout(function () {
      console.log('CLASS -> CALLBACK - function:', this.name);
    }, 2000);

    console.log('CLASS -> SEM CALLBACK:', this);
  }

  printArrow() {
    setTimeout(
      () => console.log('CLASS -> CALLBACK - arrow:', this.name),
      1000
    );

    console.log('CLASS -> SEM CALLBACK:', this);
  }
}

const luke = new Person('Luke Skywalker');

luke.printArrow();
luke.print();
