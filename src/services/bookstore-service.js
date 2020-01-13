export default class BookstoreService {
  data = [
    {
      id: 1,
      name: "Thinking in Redux",
      img:
        "https://thepracticaldev.s3.amazonaws.com/i/bgr98fyrb7cau9uhha87.PNG",
      author: "Nir Kaufman",
      cost: "30"
    },
    {
      id: 2,
      name: "Patterns of Enterprise Application Architecture",
      img:
        "https://thepracticaldev.s3.amazonaws.com/i/lee3yr9dzmevpfz8r6p3.jpg",
      author: "Martin Fowler",
      cost: "25"
    },
    {
      id: 3,
      name:
        "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
      img:
        "https://thepracticaldev.s3.amazonaws.com/i/jeoyr1agokp3k43qtrzx.jpg",
      author: "Robert C. Martin",
      cost: "34"
    }
  ];
  getBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        //reject(new Error("Something bad happen."));
      }, 700);
    });
  };
}
