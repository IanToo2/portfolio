import awsLogo from "../assets/logos/tech/aws.svg";
import dockerLogo from "../assets/logos/tech/docker.svg";
import genericTechLogo from "../assets/logos/tech/generic-tech.svg";
import gitLogo from "../assets/logos/tech/git.svg";
import githubLogo from "../assets/logos/tech/github.svg";
import gitlabLogo from "../assets/logos/tech/gitlab.svg";
import javaLogo from "../assets/logos/tech/java.svg";
import javascriptLogo from "../assets/logos/tech/javascript.svg";
import jenkinsLogo from "../assets/logos/tech/jenkins.svg";
import jiraLogo from "../assets/logos/tech/jira.svg";
import jpaLogo from "../assets/logos/tech/jpa-generic.svg";
import mybatisLogo from "../assets/logos/tech/mybatis.svg";
import mysqlLogo from "../assets/logos/tech/mysql.svg";
import oracleLogo from "../assets/logos/tech/oracle.svg";
import polymerLogo from "../assets/logos/tech/polymer.svg";
import postgresqlLogo from "../assets/logos/tech/postgresql.svg";
import reactLogo from "../assets/logos/tech/react.svg";
import springBootLogo from "../assets/logos/tech/springboot.svg";
import svnLogo from "../assets/logos/tech/svn.svg";

const TECH_LOGO_MAP = {
  Java: javaLogo,
  "Spring Boot": springBootLogo,
  JPA: jpaLogo,
  MyBatis: mybatisLogo,
  Oracle: oracleLogo,
  PostgreSQL: postgresqlLogo,
  MySQL: mysqlLogo,
  "AWS EC2": awsLogo,
  "AWS RDS": awsLogo,
  "AWS S3": awsLogo,
  Docker: dockerLogo,
  Jenkins: jenkinsLogo,
  "GitLab CI": gitlabLogo,
  Git: gitLogo,
  GitLab: gitlabLogo,
  GitHub: githubLogo,
  SVN: svnLogo,
  Jira: jiraLogo,
  JavaScript: javascriptLogo,
  Polymer: polymerLogo,
  React: reactLogo
};

export default function TechLogo({ name, className = "" }) {
  const src = TECH_LOGO_MAP[name] ?? genericTechLogo;
  const classes = className ? `tech-logo ${className}` : "tech-logo";
  return <img className={classes} src={src} alt="" aria-hidden="true" loading="lazy" />;
}
