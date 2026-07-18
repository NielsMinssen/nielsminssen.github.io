import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Svg,
  Path,
  Circle,
  G,
  Rect
} from "@react-pdf/renderer";
import {
  greeting,
  socialMediaLinks,
  educationInfo,
  workExperiences,
  techStack,
  skillsSection
} from "../../portfolio";

// Inline SVG icons for PDF (react-pdf can't use font-awesome)
const MailIcon = () => (
  <Svg viewBox="0 0 24 24" width={10} height={10}>
    <Path d="M2 4h20v16H2z" fill="none" stroke="#718096" strokeWidth={1.5} />
    <Path d="M2 4l10 9 10-9" fill="none" stroke="#718096" strokeWidth={1.5} />
  </Svg>
);

const LinkedInIcon = () => (
  <Svg viewBox="0 0 24 24" width={10} height={10}>
    <Path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" fill="#718096" />
    <Path d="M8 10v7M8 7v.01M12 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4" fill="none" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" />
    <Circle cx={8} cy={7} r={0.5} fill="#ffffff" />
    <Rect x={7.25} y={10} width={1.5} height={7} fill="#ffffff" rx={0.5} />
  </Svg>
);

const GitHubIcon = () => (
  <Svg viewBox="0 0 16 16" width={10} height={10}>
    <Path
      fillRule="evenodd"
      fill="#718096"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    />
  </Svg>
);

const colors = {
  primary: "#1a365d",
  text: "#2d3748",
  secondary: "#4a5568",
  muted: "#718096",
  border: "#e2e8f0",
  background: "#f7fafc",
  white: "#ffffff"
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    paddingBottom: 25,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: colors.text,
    lineHeight: 1.4
  },
  header: {
    marginBottom: 14,
    borderBottom: `2px solid ${colors.primary}`,
    paddingBottom: 10
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 1,
    letterSpacing: -0.5
  },
  headerTitle: {
    fontSize: 11,
    color: colors.secondary,
    marginBottom: 8,
    marginTop: 4
  },
  contactRow: {
    flexDirection: "row",
    gap: 18,
    fontSize: 9,
    color: colors.muted,
    alignItems: "center"
  },
  contactItemWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  contactIcon: {
    marginRight: 4,
    position: "relative",
    top: -1
  },
  contactItem: {
    color: colors.muted,
    textDecoration: "none",
    fontSize: 9
  },
  contactText: {
    color: colors.muted,
    fontSize: 9
  },
  columns: {
    flexDirection: "row",
    gap: 20
  },
  leftColumn: {
    width: "65%"
  },
  rightColumn: {
    width: "35%"
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
    marginTop: 10,
    paddingBottom: 3,
    borderBottom: `1px solid ${colors.border}`
  },
  experienceItem: {
    marginBottom: 8
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1
  },
  experienceRole: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: colors.text
  },
  experienceDate: {
    fontSize: 8.5,
    color: colors.muted
  },
  experienceCompany: {
    fontSize: 8.5,
    color: colors.secondary,
    marginBottom: 2
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 6
  },
  bullet: {
    width: 8,
    color: colors.muted
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: colors.secondary,
    lineHeight: 1.35
  },
  educationItem: {
    marginBottom: 6
  },
  educationSchool: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: colors.text
  },
  educationSub: {
    fontSize: 8.5,
    color: colors.secondary
  },
  educationDate: {
    fontSize: 8.5,
    color: colors.muted
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center"
  },
  skillLabel: {
    width: "55%",
    fontSize: 8.5,
    color: colors.text
  },
  skillBarBg: {
    width: "45%",
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3
  },
  skillBarFill: {
    height: 6,
    backgroundColor: colors.primary,
    borderRadius: 3
  },
  toolsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 2
  },
  toolTagWrapper: {
    backgroundColor: colors.background,
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 3,
    border: `0.5px solid ${colors.border}`,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 16
  },
  toolTagText: {
    fontSize: 7.5,
    color: colors.secondary,
    lineHeight: 1
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2
  },
  languageName: {
    fontSize: 8.5,
    color: colors.text
  },
  languageLevel: {
    fontSize: 8.5,
    color: colors.muted
  }
});

function CVDocument({ lang = "en", t }) {
  const experiences = workExperiences.experience;
  const schools = educationInfo.schools;
  const skills = techStack.experience;
  const tools = skillsSection.softwareSkills;

  // Get translated data
  const translatedExperiences =
    t(`workExperiences.experience`, { returnObjects: true }) || [];
  const translatedSchools =
    t(`educationInfo.schools`, { returnObjects: true }) || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{greeting.username}</Text>
          <Text style={styles.headerTitle}>{t("greeting.title")}</Text>
          <View style={styles.contactRow}>
            {socialMediaLinks.gmail && (
              <Link style={styles.contactItem} src={`mailto:${socialMediaLinks.gmail}`}>
                <View style={styles.contactItemWrapper}>
                  <View style={styles.contactIcon}><MailIcon /></View>
                  <Text style={styles.contactText}>{socialMediaLinks.gmail}</Text>
                </View>
              </Link>
            )}
            {socialMediaLinks.linkedin && (
              <Link style={styles.contactItem} src={socialMediaLinks.linkedin}>
                <View style={styles.contactItemWrapper}>
                  <View style={styles.contactIcon}><LinkedInIcon /></View>
                  <Text style={styles.contactText}>LinkedIn</Text>
                </View>
              </Link>
            )}
            {socialMediaLinks.github && (
              <Link style={styles.contactItem} src={socialMediaLinks.github}>
                <View style={styles.contactItemWrapper}>
                  <View style={styles.contactIcon}><GitHubIcon /></View>
                  <Text style={styles.contactText}>GitHub</Text>
                </View>
              </Link>
            )}
          </View>
        </View>

        <View style={styles.columns}>
          {/* Left Column — Experience + Education */}
          <View style={styles.leftColumn}>
            <Text style={styles.sectionTitle}>
              {lang === "fr" ? "Exp\u00e9rience professionnelle" : "Work Experience"}
            </Text>
            {experiences.map((exp, i) => {
              const tr = translatedExperiences[i] || {};
              return (
                <View key={i} style={styles.experienceItem}>
                  <View style={styles.experienceHeader}>
                    <Text style={styles.experienceRole}>
                      {tr.role || exp.role}
                    </Text>
                    <Text style={styles.experienceDate}>
                      {tr.date || exp.date}
                    </Text>
                  </View>
                  <Text style={styles.experienceCompany}>
                    {tr.company || exp.company}
                  </Text>
                  {(tr.descBullets || exp.descBullets || []).map((bullet, j) => (
                    <View key={j} style={styles.bulletItem}>
                      <Text style={styles.bullet}>-</Text>
                      <Text style={styles.bulletText}>{bullet}</Text>
                    </View>
                  ))}
                </View>
              );
            })}

            <Text style={styles.sectionTitle}>
              {lang === "fr" ? "Formation" : "Education"}
            </Text>
            {schools.map((school, i) => {
              const tr = translatedSchools[i] || {};
              return (
                <View key={i} style={styles.educationItem}>
                  <Text style={styles.educationSchool}>
                    {school.schoolName}
                  </Text>
                  <Text style={styles.educationSub}>
                    {tr.subHeader || school.subHeader}
                  </Text>
                  <Text style={styles.educationDate}>{school.duration}</Text>
                </View>
              );
            })}
          </View>

          {/* Right Column — Skills + Tools + Languages */}
          <View style={styles.rightColumn}>
            <Text style={styles.sectionTitle}>
              {lang === "fr" ? "Comp\u00e9tences" : "Skills"}
            </Text>
            {skills.map((skill, i) => (
              <View key={i} style={styles.skillRow}>
                <Text style={styles.skillLabel}>{skill.Stack}</Text>
                <View style={styles.skillBarBg}>
                  <View
                    style={[
                      styles.skillBarFill,
                      { width: skill.progressPercentage }
                    ]}
                  />
                </View>
              </View>
            ))}

            <Text style={styles.sectionTitle}>
              {lang === "fr" ? "Outils" : "Tools"}
            </Text>
            <View style={styles.toolsGrid}>
              {tools.map((tool, i) => (
                <View key={i} style={styles.toolTagWrapper}>
                  <Text style={styles.toolTagText}>{tool.skillName}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.sectionTitle}>
              {lang === "fr" ? "Langues" : "Languages"}
            </Text>
            <View style={styles.languageRow}>
              <Text style={styles.languageName}>
                {lang === "fr" ? "Fran\u00e7ais" : "French"}
              </Text>
              <Text style={styles.languageLevel}>
                {lang === "fr" ? "Langue maternelle" : "Native"}
              </Text>
            </View>
            <View style={styles.languageRow}>
              <Text style={styles.languageName}>
                {lang === "fr" ? "Anglais" : "English"}
              </Text>
              <Text style={styles.languageLevel}>
                {lang === "fr" ? "Courant (C1)" : "Fluent (C1)"}
              </Text>
            </View>
            <View style={styles.languageRow}>
              <Text style={styles.languageName}>
                {lang === "fr" ? "Espagnol" : "Spanish"}
              </Text>
              <Text style={styles.languageLevel}>
                {lang === "fr" ? "Interm\u00e9diaire (B1)" : "Intermediate (B1)"}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CVDocument;
