const coding = ["js","ruby","java","python","cpp"]
coding.forEach(function(val){
    console.log(val)
})
coding.forEach((lag)=>{
    console.log(lag)
})
coding.forEach((lag, index , array)=>{
    console.log(lag, index, array)
})


const mycoding=[{
    languagename: "javascript",
    languagefliename: "js",

},
{
    languagename: "ruby",
    languagefliename: "rb",

},
{
    languagename: "java",
    languagefliename: "java",

},
{
    languagename: "python",
    languagefliename: "py",

},
{
    languagename: "cpp",
    languagefliename: "cpp",

}
]
mycoding.forEach((lag)=>{
    console.log(lag.languagename , lag.languagefliename)
})