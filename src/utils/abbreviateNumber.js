
const abbreviateNumber = num => {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'
    }else if(num <= 999){
        return num
    }
}

export default abbreviateNumber