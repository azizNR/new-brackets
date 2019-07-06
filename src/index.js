module.exports = function check(str, bracketsConfig) {
  // your solution
    let bracketsArray = str.split('');
    let configArray = [].concat.apply([], bracketsConfig);

    for(let i = 0; i < bracketsArray.length; i++) {
        for(let j = 0; j < configArray.length; j+=2) {
            if(configArray[j] == bracketsArray[i] && configArray[j+1] == bracketsArray[i+1]) {
                bracketsArray.splice(i,2);
                i-=2;
            }
        }
    }
    console.log(bracketsArray);
    return (bracketsArray.length == 0);
}
