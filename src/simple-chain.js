const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== '') {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push('( )')
    }
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position < 1 || position >= this.chain.length || !Number.isInteger(position) || isNaN(position)) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~').slice();
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
