import './style.css';
import FrameBox from '../FrameBox/FrameBox';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

function InfoText() {
  return (
      <>
      <div className="editor-text">
        Hello! My name is Lukáš but you can know me as Nightmare or Nightmarepog
      </div>
      <div className="editor-text">
        I am CS student at <a href="https://www.sosehl.cz" target="_blank" rel="noopener noreferrer">Střední Odborná Škola Hluboká Nad Vltavou</a>
      </div>
      <div className='editor-text'>
        I am programming since 11!
      </div>
      <div className='editor-text'>
        I love cats and plushies :3
      </div>
      <div className='editor-text'>
        I am also learning 3D graphics
      </div>
      </>


  );
}

export default InfoText;
