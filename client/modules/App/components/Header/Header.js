// import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';

// Import Style
// import styles from './Header.css';

// export function Header(props, context) {
//   const languageNodes = props.intl.enabledLanguages.map(
//     lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
//   );
//
//   return (
//     <div className={styles.header}>
//       <div className={styles['language-switcher']}>
//         <ul>
//           <li><FormattedMessage id="switchLanguage" /></li>
//           {languageNodes}
//         </ul>
//       </div>
//       <div className={styles.content}>
//         <h1 className={styles['site-title']}>
//           <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
//         </h1>
//         {
//           context.router.isActive('/', true)
//             ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
//             : null
//         }
//       </div>
//     </div>
//   );
// }
// Header.contextTypes = {
//   router: React.PropTypes.object,
// };
//
// Header.propTypes = {
//   toggleAddPost: PropTypes.func.isRequired,
//   switchLanguage: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };
//
// export default Header;

import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import styles from './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <Menu secondary>
          <Menu.Item name='TODOY' active={this.state.activeItem === 'home'} onClick={this.handleItemClick.bind(this)} />
          <Menu.Item name='STATISTICS' active={this.state.activeItem === 'messages'} onClick={this.handleItemClick.bind(this)} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={this.state.activeItem === 'friends'} onClick={this.handleItemClick.bind(this)} />
          </Menu.Menu>
        </Menu>
    )
  }
};
