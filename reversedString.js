// reverse ('abcd) == ''dcba''

const reverse = str=>{
    const arr = str.split('');
    arr.reverse()
    const res = arr.join('')
    return res
}

console.log(reverse('abcd'));  //dcba

//Alternative without using arr.reverse()
const reverse2 = str=>{
    let res ="";

    for (let i =0; i<str.length ; i++) {
        const char = str[i];
        res = char + res
    }
    return res;
}

console.log(reverse2('mnop'));  //ponm


//Alternative without using arr.reverse()
const reverse3 = str=>{
   return str.split('').reduce((output,char)=>{
       output = char + output;
       return output;
   })
}

console.log(reverse3('qrstu'));  //utsrq