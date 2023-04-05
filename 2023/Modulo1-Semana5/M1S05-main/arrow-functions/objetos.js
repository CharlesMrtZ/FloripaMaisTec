const product = {
  name: 'computador asus',
  printArrow: () => console.log('OBJECT - arrow', this.name, this),
  printNormal() {
    console.log('OBJECT - printNormal', this.name, this);
  },
};

product.printArrow();
product.printNormal();
