// find the number is even or odd 

// a = 1
// b = 100

// c = a%b


// if(a == 0){
//     console.log('Neither odd nor even')
// }
// else if(c==0){
//     console.log('value is even')
// }
// else{
//     console.log('value is odd')
// }


//loops
// 1. while
// 2. do while
// 3. for loop 
// 4. advance for loop -> array mein dekhenge

// while(a>10){
//     console.log('loop 1 - a is equal to ' + a)
//     a--
// }

// do{
//     console.log('loop 2 - a is equal to ' + a)
//     a--
// }while(a > 10)


// for(let i=1; i<=100; i++){
//     // divisible by 2 or divisible by 5 - 2 4 5 6 8 10 24 25
//     // if(i%2 == 0 && i%5 == 0){
//     //     console.log('multiple of 2 and 5 : ' + i)
//     // }

//     // if(i==1 || i==2){
//     //     console.log("Your number is prime : " + i)
//     // }
//     let flag = true
//     for(let j=2; j<=i-1; j++){
//         if(i%j==0){
//             continue
//             flag=false
            
//         }
//     }
//     if(flag==true){
//         console.log("number is prime : " + i)
//     }
//     else {
//         console.log("number is not prime : " + i)
//     }
// }


// [1,2,3,4,5] length = 5
// 0,1,2,3,4

// let arr = [1,2,3,4,5]
// console.log(arr)
// arr.push(6) //[1,2,3,4,5,6]
// console.log(arr)

// let arr1 = []
// for(let i=0; i<arr.length-1; i++){
//     arr1[i]=arr[i]
// }

// arr.pop()
// console.log(arr.length)

// let a = 2
// let b = 3

// a = a+b
// b = a-b 
// a = a-b
// console.log(a,b)

// let arr = [1,2,4,6,9,1,10,3,15,6,2]
// let highestele = 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>highestele){
//         highestele = arr[i]
//     }
// }
// console.log(highestele)

// let arr = [1,4,9,4,5,1,4,3,7,1]
// we need to sort this array

// [1,4,4,9,5,1,4,3]
// [1,4,4,5,1,4,3,9]
// [1,4,4,1,4,3,5,9]
// [1,4,1,4,3,4,5,9]

//bubble sort

// for(let i=0; i< arr.length; i++){
//     for(let j=0;j<(arr.length-i);j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }

// console.log(arr)

// if(arr.includes(10)){
//     console.log("found")
// }
// else{
//     console.log("not found")
// }





