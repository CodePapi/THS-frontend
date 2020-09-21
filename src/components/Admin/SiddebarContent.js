import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import styles from "./Styles"


const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

//   for (let ind = 0; ind < 10; ind++) {
//     links.push(
//       <a key={ind} href="#" style={styles.sidebarLink}>
//         Mock menu item {ind}
//       </a>
//     );
//   }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
      <a href="/" style={styles.sidebarLink}>
          
        </a>
        <a href="/" style={styles.sidebarLink}>
          
          </a>
        <a href="/" style={styles.sidebarLink}>
          HOME
        </a>

        
        <div style={styles.divider} />
        <a href="/" style={styles.sidebarLink}>
        ALL POSTS
        </a>

        <a href="/" style={styles.sidebarLink}>
         APPROVED POSTS
        </a>

        <a href="/applicants_table" style={styles.sidebarLink}>
     LOG OUT
        </a>
        
        
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;