class Place {
  constructor(title, imageUri, address, location) {
    // Constructor in a class is used to create an object of the class.
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString(); // This is a unique id for each place.
  }
}
