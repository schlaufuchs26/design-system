import { GlobalRegistrator } from "@happy-dom/global-registrator";

// DOM globals (window, document, ResizeObserver) before React mounts anything.
GlobalRegistrator.register();
