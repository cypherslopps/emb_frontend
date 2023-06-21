function capitalizeText(word: string) {
    let newStr: string = "";

    if(word.includes("-"))
        newStr = word.split("-");
    else if(word.includes(" "))
        newStr = word.split(" ");

    return newStr.map(str => {
        let firstLetter = str.slice(0,1);
        const capitalizedFirstLetter = firstLetter.toUpperCase();
        
        return capitalizedFirstLetter + str.slice(1, str.length);
    }).join(" ");
}


export default capitalizeText;