const movies = [
    { id: "0001", name: "Doraemon: Stand By Me 2", genre: "Animation", language: "Japanese", year: 2020, poster: "../images/homepage/movie-item/doraemon.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0002", name: "Your Name", genre: "Animation", year: 2016, language: "Japanese", poster: "../images/homepage/movie-item/yourname.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0003", name: "Spirited Away", genre: "Animation", language: "Japanese", year: 2001, poster: "../images/homepage/movie-item/spiritedaway.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0004", name: "Demon Slayer: Mugen Train", genre: "Animation", language: "Japanese", year: 2020, poster: "../images/homepage/movie-item/demonslayer.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0005", name: "A Silent Voice", genre: "Animation", language: "Japanese", year: 2016, poster: "../images/homepage/movie-item/silentvoice.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0006", name: "Inception", genre: "Sci-Fi", language: "English", year: 2010, poster: "../images/homepage/movie-item/inception.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0007", name: "The Dark Knight", genre: "Action", language: "English", year: 2008, poster: "../images/homepage/movie-item/darkknight.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0008", name: "Titanic", genre: "Romance", language: "English", year: 1997, poster: "../images/homepage/movie-item/titanic.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0009", name: "The Godfather", genre: "Crime", language: "English", year: 1972, poster: "../images/homepage/movie-item/godfather.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0010", name: "Interstellar", genre: "Sci-Fi", language: "English", year: 2014, poster: "../images/homepage/movie-item/interstellar.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0011", name: "Mắt Biếc", genre: "Romance", language: "Vietnamese", year: 2019, rating: 4, poster: "mat-biec.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0012", name: "Parasite", genre: "Thriller", language: "Korean", year: 2019, rating: 5, poster: "parasite.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0013", name: "Coco", genre: "Animation", language: "English", year: 2017, rating: 5, poster: "coco.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0014", name: "The Matrix", genre: "Sci-Fi", language: "English", year: 1999, rating: 5, poster: "matrix.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0015", name: "Grave of the Fireflies", genre: "Animation", language: "Japanese", year: 1988, rating: 5, poster: "fireflies.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0016", name: "La La Land", genre: "Musical", language: "English", year: 2016, rating: 4, poster: "lalaland.jpg", rating: Math.floor(Math.random() * 5) + 1 },
    { id: "0017", name: "Dune", genre: "Sci-Fi", language: "English", year: 2021, rating: 4, poster: "dune.jpg" },
    { id: "0018", name: "Weathering With You", genre: "Animation", language: "Japanese", year: 2019, rating: 5, poster: "weathering.jpg", rating: Math.floor(Math.random() * 5) + 1 },
];

const categories = [
    { id: 1, name: "Thriller", created_at: "2017-05-12" },
    { id: 2, name: "Fantasy", created_at: "2016-08-23" },
    { id: 3, name: "Drama", created_at: "2015-04-17" },
    { id: 4, name: "Comedy", created_at: "2018-02-28" },
    { id: 5, name: "Romance", created_at: "2013-09-06" },
    { id: 6, name: "Action", created_at: "2012-07-20" },
    { id: 7, name: "Sci-Fi", created_at: "2010-03-10" },
    { id: 8, name: "Documentary", created_at: "2014-11-03" },
    { id: 9, name: "Adventure", created_at: "2011-01-29" },
    { id: 10, name: "Animation", created_at: "2015-06-15" },
    { id: 11, name: "Crime", created_at: "2016-10-08" },
    { id: 12, name: "Musical", created_at: "2019-12-01" }
];
  

const users = [
    { id: 1, fullname: "Nguyễn Văn A", email: "vana@example.com", role: "user" },
    { id: 2, fullname: "Trần Thị B", email: "thib@example.com", role: "admin" },
    { id: 3, fullname: "Lê Văn C", email: "vanc@example.com", role: "user" },
    { id: 4, fullname: "Phạm Thị D", email: "thid@example.com", role: "user" },
    { id: 5, fullname: "Hoàng Văn E", email: "vane@example.com", role: "admin" },
    { id: 6, fullname: "Đỗ Thị F", email: "thif@example.com", role: "user" },
    { id: 7, fullname: "Bùi Văn G", email: "vang@example.com", role: "user" },
    { id: 8, fullname: "Võ Thị H", email: "thih@example.com", role: "user" },
    { id: 9, fullname: "Lý Văn I", email: "vani@example.com", role: "admin" },
    { id: 10, fullname: "Ngô Thị J", email: "thij@example.com", role: "user" },
    { id: 11, fullname: "Mai Văn K", email: "vank@example.com", role: "user" },
    { id: 12, fullname: "Tạ Thị L", email: "thil@example.com", role: "user" },
    { id: 13, fullname: "Đinh Văn M", email: "vanm@example.com", role: "admin" }
];
  