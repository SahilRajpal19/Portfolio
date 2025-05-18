import { Box } from "@mui/material";
import HeroContainer from "../CustomComponent/HeroContainer";
import Images from "../Images/Images";
import SkillsDetails from "../CustomComponent/SkillsDetails";

export default function SkillsHero() {
  return (
      <HeroContainer title="Skills">
        <SkillsDetails title="Programming & Scripting Languages">
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            title="C++"
          />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            title="Java"
          />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            title="Python"
          />
          <Images src="https://cdn.simpleicons.org/c/A8B9CC" title="C" />
          <Images
            src="https://cdn.simpleicons.org/javascript/F7DF1E"
            title="JavaScript"
          />
          <Images
            src="https://cdn.simpleicons.org/mysql/4479A1"
            title="SQL/MySQL"
          />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            title="HTML"
          />
          <Images
            src="https://cdn.simpleicons.org/kotlin/7F52FF"
            title="Kotlin"
          />
        </SkillsDetails>
        <SkillsDetails title="Web Development">
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            title="CSS"
          />
          <Images
            src="https://cdn.simpleicons.org/react/61DAFB"
            title="React.js"
          />
          <Images
            src="https://cdn.simpleicons.org/redux/764ABC"
            title="Redux"
          />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
            title="Angular.js"
          />
          <Images
            src="https://cdn.simpleicons.org/jquery/0769AD"
            title="jQuery"
          />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            title="Bootstrap"
          />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
            title="Material-UI"
          />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            title="Node.js"
          />
          <Box sx={{ backgroundColor: "white", padding: 1, borderRadius: 1 }}>
            <Images
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              title="Express.js"
            />
          </Box>

          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg"
            title="JSON"
          />
        </SkillsDetails>
        <SkillsDetails title="Database Technologies">
          <Images
            src="https://cdn.simpleicons.org/mysql/4479A1"
            title="MySQL"
          />
          <Images
            src="https://cdn.simpleicons.org/mongodb/47A248"
            title="MongoDB"
          />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            title="PostgreSQL"
          />
        </SkillsDetails>
        <SkillsDetails title="Cloud Technologies">
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            title="AWS"
          />
          <Images
            src="https://cdn.simpleicons.org/streamlit/FF4B4B"
            title="Streamlit"
          />
        </SkillsDetails>
        <SkillsDetails title="DevOps and Tools">
          <Images
            src="https://cdn.simpleicons.org/docker/2496ED"
            title="Docker"
          />
          <Images src="https://cdn.simpleicons.org/git/F05032" title="Git" />
          <Images
            src="https://cdn.simpleicons.org/github/FFFFFF"
            title="GitHub"
          />
          <Images
            src="https://cdn.simpleicons.org/heroku/430098"
            title="Heroku"
          />
          <Images
            src="https://cdn.simpleicons.org/postman/FF6C37"
            title="Postman"
          />
          <Images
            src="https://cdn.simpleicons.org/mailchimp/FF6C37"
            title="Mailchimp"
          />
          <Images src="https://cdn.simpleicons.org/jira/0052CC" title="Jira" />
          <Images
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            title="Linux"
          />
        </SkillsDetails>
      </HeroContainer>
  );
}
