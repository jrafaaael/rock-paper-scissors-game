// Import

import { showOption } from "./game.js";

// Export

export const previewPlayerOption = e => {
    const option = e.target.getAttribute('data-option');
    showOption(true, option);
}