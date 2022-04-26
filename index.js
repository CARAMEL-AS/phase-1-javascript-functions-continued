function saturdayFun(string) {
    return string ? 'This Saturday, I want to bathe my dog!' : 'This Saturday, I want to roller-skate!'
}
saturdayFun()

function mondayWork(string1) {
    if(string1){
        return 'This Monday, I will work from home.'
    } else {
        return 'This Monday, I will go to the office.'
    }
}
mondayWork()

function wrapAdjective(string2 = '*') {
    const call = 'You are'
    return `${call} ${string2}${call1}${string2}!`
}
wrapAdjective()