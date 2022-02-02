import './MobileHome.css';
import GameBoard from '../../images/GameBoard.svg';
import Title from '../../AnimatedText/Title';

function MobileHome() {
  return (
    <div className="MobileHomeStyle">
        <div className="MobileNavbar"><a href="/experience" style={{textDecoration:"none"}}>About</a>&nbsp;&nbsp;&nbsp;<a href="/contact" style={{textDecoration:"none"}}>Contact</a> </div>
        <img src={GameBoard} alt="" className="MobileHomeImage"/>
        <div className="MobileHomeText">
            <div className="MobileHomeSubText">Hello 👋🏼, I am</div>
            <Title text="Himandri"/>
            <div className="MobileHomeParaText">I am a Front-End Developer who loves connecting <br/> with people through tech communities and learn<br/> new tech stacks to build cool things!</div>
        </div>
    </div>
  );
}

export default MobileHome;