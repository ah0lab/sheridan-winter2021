export class Statistic {
  constructor(
    public dateReported: Date,
    public confirmedNeg: number,
    public confirmedPos: number,
    public presumptNeg: number,
    public presumptPos: number,
    public resolved: number,
    public deaths: number,
    public totalCases: number,
  ) { }
}
