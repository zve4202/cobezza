let name1 = 'name';

let a = {
  name: "Андрей",
  ['name1']: name1,
  age: 31 ,
  3: 'три'
  skills: {
    programming: "very well",
    sing: "very bad"
  },
  sing: () => {
    return 'Ла-ла Ла-ли';
  },
  singer: function (){
    return this.skills.sing;
    //return this.name + ' ' + this.age;
  },
  returning: function () {
    const that = this;
    return function () {
      return that.name;
    }
  },
  returning2: function () {    
    return () => this.name;    
    return () => {
      return this.name;
    }
  },
  method() {
    //super
    return () => this.name;    
  }
}

function foo(a,b){}

foo.bla = 1;
console.log(foo.bla);
console.log(foo.name === 'foo');
console.log(foo.length === 2);
console.log(foo.bind(a, 1)()); //b=1

console.log(a.method());
console.log(a.returning());
console.log(a.returning2());

let b  = {}

b.singer = a.singer;

console.log(b.singer()());

console.log(a.skills.programming);
console.log(a['skills']['programming']);
console.log(a[2+1]);
console.log(a.sing());
console.log(a['name1']);
console.log(a.singer());

let slides = [
  'img/chunk1.jpg',
  'img/chunk2.jpg',
  'img/chunk3.jpg',
  'img/chunk4.jpg',
  'img/chunk5.jpg',
];

console.log(slides.length);
console.log(slides[0]);
