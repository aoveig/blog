import { ViteSSG } from "vite-ssg";
import routes from "~/router/index";

import App from "./App.vue";

import "~/styles/reset.scss";
import "~/styles/tailwind.css";
import "~/styles/markdown.css";

export const createApp = ViteSSG(App, { routes }, () => {});
