class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}

class magazine extends Book{

    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;


}

getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year} ${this.month}`
}
}
const myBook = new Book("Book One","John Doe","2013");
console.log(myBook.getSummary());

const myMagazine = new magazine("Mag One","John Doe","2013","Jan");
console.log(myMagazine.getSummary());



