/**
* Een constructor function is ook toegestaan.
**/
class Meme {
    constructor(memeList) {
        if (memeList === undefined)
        {
            console.log("Je moet een memeList meegeven!");
        } else {
            this.memeList = memeList;
            this.cursor = 0;
        }
    }

    getNextMeme(){
        if(this.cursor >= this.memeList.count - 1){
            this.cursor = 0;
            return this.memeList[this.cursor].value;
        } else {
            this.cursor++;
            return this.memeList[this.cursor - 1].value;
        }
    }

    searchMeme(search){
        return this.memeList.includes(search);
    }
}
