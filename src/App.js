import './App.css';
import logo from './assets/Logo.png';
import TG from './assets/TG.svg';
import TW from './assets/TW.svg';
import tokenomics from './assets/tokenomics.png'
import meme1 from './assets/meme1.png'
import meme2 from './assets/meme2.png'
import meme3 from './assets/meme3.png'
import Overlay from './components/Overlay';


function App() {

  const ticker = "$LOVE"

  return (
    <div className="App">
      <Overlay/>
      <div className="section1">
        <div className="logoBlock"><img src={logo} className="logo" alt="logo"/></div>
        <div className="textBlock"><h1 className="heading">Love Story On Solana</h1></div>
        <button className="button">BUY {ticker}</button>
        <div className="socialBlock">
          <a href="https://t.me/BokunoPicoSol" target="_blank" rel="noopener noreferrer"><img src={TG} className="telegram" alt="telegram"/></a>
          <a href="https://twitter.com/BokuNoPicoSol" target="_blank" rel="noopener noreferrer"><img src={TW} className="twitter" alt="twitter"/></a>
        </div>
      </div>
      <div className="runningBlock">
        <div className="runningTextBlock">
          <span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span><span className="text">$PICO $CHICO $COCO</span>
        </div>    
      </div>
      <div className="section2">
        <div className="inside">
          <img className="tokenomicsImg" alt="tokenomics" src={tokenomics}/>
          <div className="tokenomicsDetails">
            <h3 className="subheading1">TOKENOMICS</h3>
            <h4 className="subheading2">SYMBOL: <span className="pink">{ticker}</span></h4>
            <h4 className="subheading2">SUPPLY: <span className="pink">322.000.000</span></h4>
            <h4 className="subheading2">LAUNCH: <span className="pink">15th FEB - 16th FEB</span></h4>
            <h4 className="subheading2">TAX FEES: <span className="pink">0%</span></h4>
          </div>
        </div>
        <div className="section3">
          <img className="meme" alt="meme" src={meme1}/>
          <img className="meme" alt="meme" src={meme2}/>
          <img className="meme" alt="meme" src={meme3}/>
        </div>
      </div>
    </div>
  );
}

export default App;
