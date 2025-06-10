const coding = ["js" , "rb", "c++","java" , "py"]

/// 1st type
coding.forEach( function (lang){
//   console.log(lang)
} )

// 2nd type
coding.forEach( (lang) =>{
    //   console.log(lang)
} )

// 3rd type
function printMe(item){
    console.log(item)
}
// coding.forEach(printMe)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

coding.forEach((item , index , arr)=>{
    // console.log(item ," ", index  ," ", arr )
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myCoding  = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    }
]
myCoding.forEach((key , index , arr )=>{
    //  console.log(key.languageFileName, ":-" , key.languageName , " ,index =" ,index , " , total array " , arr)
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


