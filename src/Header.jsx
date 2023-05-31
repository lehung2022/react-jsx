import './index.css';

const Header = ({ title }) => {

  return (
      <header>
          <h4>{title}</h4>
      </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header;