// class Marks {
// 	Constructor(marks = []){
// 	this.marks = marks;
// 	this.total = marks.reduce((val, acc) => {
// 	return val + acc;
// 	});
// 	Console.log(this.total);
// }
// isPass(){
// 	return this.total >= 400 ? true : false;
// }
// getGrade(){
// 	let grade = ''
// 	if(this.marksAverage() >= 40 && this.marksAverage() <= 60){
//   	grade = 'C';
//   }else if(this.marksAverage() >= 60 && this.marksAverage() <= 80){
//   	grade = 'B';
//   }else if(this.marksAverage() > 80){
//   	grade = 'A';
//   }else {
//   	grade = 'F';
//   }
//   return grade;
// }
// // marksAverage(){
// // 	return this.total / this.marks.length;
// // }
// }
// const studentOnemark = new Marks([80,100,98,90,96]);
// console.log(studentOnemark.isPass())
// console.log(studentOnemark.getGrade())
// console.log(studentOnemark. marksAverage())
let arr = ["a","b","c","d","e"]
console.log(arr.slice(3))

