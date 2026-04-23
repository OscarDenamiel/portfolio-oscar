/* ============================================================
   CHATBOT KNOWLEDGE BASE — chatbot-kb.js
   v2 — cobertura ampliada, tono natural de Oscar
============================================================ */

import { meta, FALLBACK } from './kb/meta.js';
import { projects } from './kb/projects.js';
import { experience } from './kb/experience.js';
import { hiring } from './kb/hiring.js';
import { personal } from './kb/personal.js';
import { tech } from './kb/tech.js';

export const KNOWLEDGE_BASE = [
  ...meta,
  ...projects,
  ...experience,
  ...hiring,
  ...personal,
  ...tech,
];

export { FALLBACK } from './kb/fallback.js';