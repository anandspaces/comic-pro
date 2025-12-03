// Models
export const TEXT_MODEL = 'gemini-3-pro-preview';
export const IMAGE_MODEL = 'gemini-3-pro-image-preview';

// Prompts
export const PROMPT_ANALYSIS = "With Nobita and Doraemon as the main characters, create a comic format that guides readers to learn and understand this paper progressively from basic to advanced. Please summarize the core content.";

export const PROMPT_PLANNING = "Based on the above discussion, analyze and determine how many pages this comic learning guide should be divided into, and what the content of each page should be.";

export const PROMPT_IMAGE_GENERATION_PREFIX = "Based on the above discussion, generate a learning comic using nano banana pro"; // The suffix "for page x..." is added dynamically