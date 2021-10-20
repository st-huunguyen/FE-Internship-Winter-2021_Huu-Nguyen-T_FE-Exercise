// 1. Tính tổng các số lẻ trong mảng
// Bài này mình sẽ cho trước một mảng các phần tử, sau đó yêu cầu viết chương trình tính tổng các số lẻ trong mảng đó. Mảng cho trước như sau: var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];
var practice1 = function(){
  var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  var sum = 0;
  var count=mang.length;
  for(var i=0;i<count;i++){
    sum+=mang[i];
  }
  return sum;
};

// 2. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi, trong trường hợp chuỗi dài hơn 15 ký tự.
var practice2 = function(string){
  var output="";
  if(string.length>15){
    output=string.slice(0,10).concat("...");
  }else output =string;
  return output;
};

// 3. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
// Tham số truyền vào là 1 chuỗi.
// Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "techMaster" sẽ được convert thành "Techmaster".
var practice3 = function(string){
  var output="";
  string.toLowerCase();
  output=(string[0].toUpperCase()).concat(string.slice(1,string.length))
  return output;
};

// 4. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
// Tham số truyền vào là 1 mảng các số.
// Kết quả là số nhỏ nhất trong mảng.
var practice4 = function(array){
  var min = array[0];
  for(var i=1;i<array.length;i++){
    if(array[i]<=min){
      min=array[i];
    }
  }
  return min;
};

// 5. Sử dụng object constructors, tạo 1 mảng gồm các học sinh có đầy đủ name, age, school theo data bên dưới
// John - 26 - Cambridge
// Mark - 30 - Oxford
// Bill - 28 - Havard
function student(_name,_age,_school){
  this.name=_name;
  this.age=_age;
  this.school=_school;
 }
 var listStudent=[
  new student(John , 26 , Cambridge),
  new student(Mark , 30 , Oxford),
  new student(Bill , 28 , Havard),
 ]

//  5.1 Sau khi tạo xong các instance, add kỹ năng coding() cho học sinh:
//  nếu từ 28 tuổi trở lên sẽ console.log('coding master');
//  nếu dưới 28 tuổi sẽ console.log('learning code');
 function student(_name,_age,_school){
  this.name=_name;
  this.age=_age;
  this.school=_school;
 }
 var listStudent=[
  new student("John" , 26 , "Cambridge"),
  new student("Mark" , 30 , "Oxford"),
  new student("Bill" , 28 , "Havard"),
 ]
 student.prototype = { code : "" }
 for(var i=0;i<listStudent.length;i++){
   if(listStudent[i].age>=28){
    listStudent[i].code='coding master';
   }
   else listStudent[i].code='learning code';
 }

// 6. cho 2 mảng dữ liệu số, viết 1 hàm tìm các phần tử cùng xuất hiện ở cả 2 mảng.
var practice6 = function(array1, array2){
  var duplicate=[];
  for(var i=0;i<array1.length;i++){
    for(var j=0;j<array2.length;j++){
      if(array1[i]===array2[j]){
        duplicate.push(array1[i])
      }
    }
  }
  return duplicate;
}

// 7. tính tổng các chữ số của 1 số.
// input: 1234
// output: 10
var practice7 = function(number){
  var stringNumber=number.toString().split('');
  var sum=0;
  for(var i=0;i<stringNumber.length;i++){
    sum+=parseInt(stringNumber[i]);
  }
  return sum;
}
