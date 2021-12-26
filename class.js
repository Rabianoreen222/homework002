class Bed {
  constructor(
    name,
    size,
    capacity,
    color,
    bedsheet,
    matress,
    usage,
    age,
    sidetable,
    dateacquired
  ) {
    this.name = name;
    this.size = size;
    this.capacity = capacity;
    this.color = color;
    this.bedsheet = bedsheet;
    this.matress = matress;
    this.usage = usage;
    this.age = age;
    this.sidetable = sidetable;
    this.dateacquired = dateacquired;
  }
  timeused(timestatus) {
    return (this.age = timestatus);
  }
}
export default Bed;
