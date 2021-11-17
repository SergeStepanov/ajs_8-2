export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
  }

  translate(code) {
    if (this.errorMap.has(code)) {
      return this.errorMap.get(code);
    }
    return 'Unknown error.';
  }
}
