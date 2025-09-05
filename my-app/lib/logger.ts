// Logger utility for terminal output instead of browser console
export const logger = {
  log: (message: string, data?: unknown) => {
    // In development, this will show in the terminal
    // In production, this will be a no-op
    if (process.env.NODE_ENV === "development") {
      if (data !== undefined) {
        console.log(`🌳 [SkillTree] ${message}`, data);
      } else {
        console.log(`🌳 [SkillTree] ${message}`);
      }
    }
  },

  warn: (message: string, data?: unknown) => {
    if (process.env.NODE_ENV === "development") {
      if (data !== undefined) {
        console.warn(`⚠️ [SkillTree] ${message}`, data);
      } else {
        console.warn(`⚠️ [SkillTree] ${message}`);
      }
    }
  },

  error: (message: string, data?: unknown) => {
    if (process.env.NODE_ENV === "development") {
      if (data !== undefined) {
        console.error(`❌ [SkillTree] ${message}`, data);
      } else {
        console.error(`❌ [SkillTree] ${message}`);
      }
    }
  },

  info: (message: string, data?: unknown) => {
    if (process.env.NODE_ENV === "development") {
      if (data !== undefined) {
        console.info(`ℹ️ [SkillTree] ${message}`, data);
      } else {
        console.info(`ℹ️ [SkillTree] ${message}`);
      }
    }
  },
};
