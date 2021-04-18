/** @jsx jsx */
import { jsx } from 'theme-ui'
import FooterImg from './FooterImg'


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
    </div>
  </footer>
)

export default Footer