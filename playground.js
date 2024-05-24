/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNfts=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nftname, pname, nname, team, pType, dyear) {
    const NFT={
        Nft_Name: nftname,
        Player_Name: pname,
        Team: team,
        Player_Type: pType,
        Debut_Year: dyear
    }
    myNfts.push(NFT);
    console.log(nftname+"NFT Minted Successfully!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<myNfts.length;i++){
        console.log("NFT: "+(i+1));
        console.log(myNfts[i]);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTS Minted: "+ myNfts.length);
}

// call your functions below this line
mintNFT("MasterBlaster","Sachin Tendulkar","India","Batsman",1989);
mintNFT("SwingKing","Wasim Akram","Pakistan","Bowler",1985);
mintNFT("CaptainCool","MS Dhoni","India","Wicket Keeper-Batsman",2004);
mintNFT("KingKohli","Virat Kohli","India","Batsman",2008);
listNFTs();
getTotalSupply();
