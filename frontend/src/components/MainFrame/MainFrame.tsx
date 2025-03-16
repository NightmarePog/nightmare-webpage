import './style.css'
import ProfilePic from '../ProfilePic/ProfilePic';
import Heading from '../Heading/Heading';
import FrameBox from '../FrameBox/FrameBox';
import ProgressBar from '../ProgressBar/ProgressBar'
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import InfoText from '../InfoText/InfoText';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function MainFrame() {
    return <>
    <div className='box'>
        <Heading text="Hello! I am Nightmare!"/>
        <ProfilePic/>
        <FrameBox>
          <HeaderComponent text='info.md'/>
          <InfoText></InfoText>
        </FrameBox>
        <FrameBox>
          <HeaderComponent text='skills.md'/>
          <div className='SkillWrapper'>
          <ProgressBar
          image='https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg'
          description='Python'
          percentage={80}

          />
          <ProgressBar
          image='https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg'
          description='Lua Language'
          percentage={90}
          />
          <ProgressBar
          image='https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg'
          description='C Language'
          percentage={40}
          />
          <ProgressBar
          image='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          description='React'
          percentage={50}
          />
          <ProgressBar
          image='https://upload.wikimedia.org/wikipedia/commons/e/eb/Roblox_Studio_logo_-_2022.svg'
          description='Roblox Studio'
          percentage={90}

          />
          <ProgressBar
          image='https://godotengine.org/assets/press/icon_color.svg'
          description='Godot Engine'
          percentage={40}
          />
          <ProgressBar
          image='https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg'
          description='Blender'
          percentage={60}
          />
          </div>
        </FrameBox>
        <FrameBox>
          <HeaderComponent text='projects.md'/>
          <Projects></Projects>
        </FrameBox>
        <FrameBox>
          <HeaderComponent text='contact.md'/>
          <Contact></Contact>
        </FrameBox>
        
        
    </div>
    </>

}

export default MainFrame;