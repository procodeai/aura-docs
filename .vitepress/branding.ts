export const branding = {
  appName: "Canoryn",
  companyName: "Canoryn",
  urlScheme: "canoryn",
  fileExtension: "cryn",
  websiteUrl: "https://canoryn.app",
  supportEmail: "support@canoryn.app",
  githubUrl: "https://github.com/procodeai",
  discordUrl: "https://discord.gg/procodeai",
  twitterUrl: "https://twitter.com/procodeai",
} as const;

export type BrandingVariables = keyof typeof branding;
