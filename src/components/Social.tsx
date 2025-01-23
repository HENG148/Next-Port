import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

interface SocialItem {
  icon: React.ReactNode;
  path: string
}

interface SocialProp {
  containerStyle?: string;
  iconStyle?: string;
}

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: 'https://github.com/HENG148' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/rong-sokheng-a20512258/' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/__heng0_/' },
  { icon: <FaTwitter />, path: '' },
]

const Social: React.FC<SocialProp> = ({containerStyle = '', iconStyle = ''}) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, idx) => (
        <Link key={idx} href={item.path} className={iconStyle} target='_blank' rel='noopener noreferrer' passHref>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
