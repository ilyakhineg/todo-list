import { configureStoreProd } from "./configure-store.prod";
import { configureStoreDev } from "./configure-store.dev";

export const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;
