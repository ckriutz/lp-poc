/** @jsx jsx */
import { jsx } from 'theme-ui'
import FooterImg from './FooterImg'
import { RiFacebookBoxFill, RiTwitterFill, RiLinkedinBoxFill, RiYoutubeFill, RiInstagramFill, RiRssFill, RiGithubFill, RiTelegramFill, RiPinterestFill, RiSnapchatFill, RiSkypeFill,RiDribbbleFill, RiMediumFill, RiBehanceFill} from "react-icons/ri";
import { FaWordpress, FaVk} from "react-icons/fa";
import Icons from "../util/socialmedia.json"
import { Link } from "gatsby"

const sIcons = Icons.socialIcons.map(icons => {
  return(
    <div>
      { icons.icon === "facebook" ? (<Link to={icons.url} target="_blank"><RiFacebookBoxFill/></Link>) :"" }
      { icons.icon === "twitter" ? (<Link to={icons.url} target="_blank"><RiTwitterFill/></Link>) : "" }
      { icons.icon === "linkedin" ? (<Link to={icons.url} target="_blank"><RiLinkedinBoxFill/></Link>) : "" }
      { icons.icon === "youtube" ? (<Link to={icons.url} target="_blank"><RiYoutubeFill/></Link>) : ""}
      { icons.icon === "instagram" ? (<Link to={icons.url} target="_blank"><RiInstagramFill/></Link>) :"" }
      { icons.icon === "rss" ? (<Link to={icons.url} target="_blank"><RiRssFill/></Link>) : "" }
      { icons.icon === "github" ? (<Link to={icons.url} target="_blank"><RiGithubFill/></Link>) : "" }
      { icons.icon === "telegram" ? (<Link to={icons.url} target="_blank"><RiTelegramFill/></Link>) : "" }
      { icons.icon === "pinterest" ? (<Link to={icons.url} target="_blank"><RiPinterestFill/></Link>) : "" }
      { icons.icon === "snapchat" ? (<Link to={icons.url} target="_blank"><RiSnapchatFill/></Link>) : "" }
      { icons.icon === "skype" ? (<Link to={icons.url} target="_blank"><RiSkypeFill/></Link>) : "" }
      { icons.icon === "wordpress" ? (<Link to={icons.url} target="_blank"><FaWordpress/></Link>  ) : "" }
      { icons.icon === "dribbble" ? (<Link to={icons.url} target="_blank"><RiDribbbleFill/></Link>) : "" }
      { icons.icon === "medium" ? (<Link to={icons.url} target="_blank"><RiMediumFill/></Link>) : "" }
      { icons.icon === "behance" ? (<Link to={icons.url} target="_blank"><RiBehanceFill/></Link>) : "" }
      { icons.icon === "vk" ? (<Link to={icons.url} target="_blank"><FaVk/></Link>   ) : "" }
    </div>
  )
})

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <FooterImg />
      <p>Paid for by the Libertarian Party of Union County, NC. Not authorized by any candidate or candidate's committee.</p>
      <p>© 2021 Libertarian Party of Union County</p>
      <div className="social-icons" sx={indexStyles.socialIcons}>
        {sIcons}
    </div>
    </div>
  </footer>
)

export default Footer

const indexStyles = {
  socialIcons: {
    "a":{
      color: "socialIcons",
      ":hover":{
        color:"socialIconsHover",
      }
    }
  }
}