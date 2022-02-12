import React from "react";
import "./Working.css";

function Working() {
  return (
    <div id="hiw">
    <h3 className="head1">What’s ateru</h3>
    <p className = "body-intro">Ateru is an online crowdfunding platform built on the Tezos Blockchain. It enables anyone to raise funds for healthcare, education, sports, disaster relief and other personal causes, with great ease and transparency.</p>
    <div className="working-div">
    <img className="working-img-1"src="https://i.imgur.com/YGzivtH.png" height="180px"></img>
    <p className="working-body"><b>transparency</b><br></br>There have been numerous cases of frauds in the crowdfunding space, which could’ve been avoided if the crowdfunding platform was built on technologies like blockchain which promote virtues like transparency.</p>
    </div>

    <div className="working-div">
    
    <p className="working-body"><b>trust code, not middlemen</b><br></br>
No inhibitions when contributing to a cause due to trust factors. We get rid of middlemen so you can put your trust in immutable code and not sly middlemen and scamsters.
</p>
    <img className="working-img-1"src="https://i.imgur.com/GTgxWj0.png" height="320px"></img>
    </div>

    <div className="working-div">
    <img className="working-img-1"src="https://i.imgur.com/JexiqNv.png" height="220px"></img>
    <p className="working-body"><b>0% commission</b><br></br>
The 0% cut policy has also been made possible by the removal of middlemen from the process. 100% of your money goes to the cause you believe in.
</p>
    </div>

    <div className="working-div">
 
    <p className="working-body"><b>custom NFT</b><br></br>Giving gives back! Every donor gets a custom NFT which stays with them forever.
</p>
    <img className="working-img-1"src="https://i.imgur.com/wYGfkDQ.png" height="300px"></img>
    </div>

    </div>
  );
}

export default Working;