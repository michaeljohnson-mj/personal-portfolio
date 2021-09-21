import "./Footer.css";
import { footer } from "../../portfolio";

function Footer(props: any) {
  const theme = props.theme;
  return <div className="footer" style={{background: theme.themeColor}}>{footer.footerText}</div>;
}

export default Footer;
