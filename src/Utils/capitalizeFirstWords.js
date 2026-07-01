    // function to capitalize first letter of each word in a sentence
    export function capitalizeWords(sentence){
        if(!sentence) return;
        return sentence.split(' ').map(word => {
            if(!word) return;
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ');
    }