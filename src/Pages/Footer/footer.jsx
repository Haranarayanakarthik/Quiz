import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <hr style={styles.hr} />
      <div style={styles.container}>
        <div style={styles.text}>
          <p style={styles.footerText}>
            {`${currentYear} AI Quiz Generator. All Rights Reserved.`}
          </p>
        </div>
        <div style={styles.socialIcons}>
          <a
            href="https://github.com/Haranarayanakarthik"
            style={styles.iconLink}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              style={styles.icon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kommaraju-hara-narayana-karthik-564917258/"
            style={styles.iconLink}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              style={styles.icon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    width: "100%",
    // paddingTop: "0.2rem",
    // paddingBottom: "1rem",
    backgroundColor: "grey",
    textAlign: "center",
  },
  hr: {
    border: 0,
    height: "1px",
    backgroundColor: "#ccc",
    margin: "1rem 0",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 1,
    textAlign: "left",
  },
  footerText: {
    fontSize: "14px",
    color: "#444",
  },
  socialIcons: {
    flex: 1,
    textAlign: "right",
  },
  iconLink: {
    marginRight: "20px",
  },
  icon: {
    width: "25px",
    height: "25px",
    verticalAlign: "middle",
  },
};
