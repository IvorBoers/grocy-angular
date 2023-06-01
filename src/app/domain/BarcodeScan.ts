export class BarcodeScan {
  private codeCountMap = new Map();
  currentCode = '';
  reportedCode = '';
  currentProbability = 0;


  add(code: string): boolean {
    let totalCount = this.getTotalCount();
    if (totalCount < 1000) {
      if (this.codeCountMap.has(code)) {
        this.codeCountMap.set(code, this.codeCountMap.get(code) + 1);
      } else {
        this.codeCountMap.set(code, 1);
      }
      this.currentCode = this.getMostProbableCode();
      this.currentProbability = this.getProbability(this.currentCode);
    }
    const report = totalCount > 20 && this.reportedCode !== this.currentCode;
    console.log("Codes=" + this.asString() + ", totalCount=" + totalCount + " report=" + report);
    if (report) {
      this.reportedCode = this.currentCode;
    }
    return report;
  }

  asString(): string {
    let str = '';
    for (let [key, value] of this.codeCountMap.entries()) {
      str = str + "(" + key + ", " + value + ")"
    }
    return str;
  }

  clear() {
    this.codeCountMap = new Map();
  }

  getMostProbableCode(): string {
    let mostScannedCode = '';
    let maxCount = 0;
    for (let [key, value] of this.codeCountMap.entries()) {
      if (value > maxCount) {
        maxCount = value;
        mostScannedCode = key
      }
    }
    return mostScannedCode
  }

  getProbability(code: string) {
    if (!this.codeCountMap.has(code)) {
      return 0;
    }
    let countOfCode = this.codeCountMap.get(code);
    let totalCount = this.getTotalCount();
    return countOfCode / totalCount;
  }

  private getTotalCount() {
    let totalCount = 0;
    for (let value of this.codeCountMap.values()) {
      totalCount = totalCount + value;
    }
    return totalCount;
  }

}
