import './contact.css';
import HollowBoard from '../../images/GameBoardHollow.svg';
import MyImage from '../../images/MyImage.png';
import GithubLogo from '../../images/GitHub.png';
import TwitterLogo from '../../images/Twitter.png';
import LinkedInLogo from '../../images/LinkedIn.png';
import GmailLogo from '../../images/Gmail.png';
import {Link} from 'react-router-dom';


function Contact() {
  return (
    <div className="ContactStyle">
      <div className="navbar"><a className="navIcon" href="https://drive.google.com/file/d/1dCDo0LqkU6jgN4XOwzLP_nNgKsgkjMxJ/view?usp=sharing" style={{textDecoration:"none"}}>Resume</a>&nbsp;&nbsp;&nbsp;<Link to="/" style={{textDecoration:"none"}} className="navIcon">Home</Link>&nbsp;&nbsp;&nbsp;<Link to="/about" style={{textDecoration:"none"}} className="navIcon">About</Link> </div>
      <img alt="" src={HollowBoard} className="Image"/>
      <img alt="" src={MyImage} className="MyImage"/>
      <div className="Text">
        <div className="subText">Social Links</div>
        <div className="ContactParaText">
          <div className="ContactAlign"><img src={GithubLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://github.com/HimandriSharma" style={{padding:"10px",textDecoration:"none",color:"black"}}>HimandriSharma 🔗</a></div> 
          <div className="ContactAlign"><img src={TwitterLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://twitter.com/himandri5" style={{padding:"10px",textDecoration:"none",color:"black"}}>@Himandri5 🔗</a></div>
          <div className="ContactAlign"><img src={LinkedInLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><a href="https://www.linkedin.com/in/himandri-sharma/" style={{padding:"10px",textDecoration:"none",color:"black"}}>himandri-sharma 🔗</a></div>
          <div className="ContactAlign"><img src={GmailLogo} alt="" style={{height:"5vmin",margin:"10px"}}/><div style={{padding:"10px",textDecoration:"none",color:"black"}}>himandrisharma27@gmail.com</div></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;