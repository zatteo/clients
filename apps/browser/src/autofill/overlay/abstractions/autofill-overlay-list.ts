import { AuthenticationStatus } from "@bitwarden/common/auth/enums/authentication-status";

import { OverlayCipherData } from "../../background/abstractions/overlay.background";

type OverlayListMessage = { command: string };

type UpdateOverlayListCiphersMessage = OverlayListMessage & {
  ciphers: OverlayCipherData[];
};

type InitAutofillOverlayListMessage = OverlayListMessage & {
  authStatus: AuthenticationStatus;
  styleSheetUrl: string;
  theme: string;
  translations: Record<string, string>;
  ciphers?: OverlayCipherData[];
  previouslyFilledCipherName?: string;
  focusedFieldId?: string;
  focusedFieldValue?: string;
};

type OverlayListWindowMessageHandlers = {
  [key: string]: CallableFunction;
  initAutofillOverlayList: ({ message }: { message: InitAutofillOverlayListMessage }) => void;
  checkAutofillOverlayListFocused: () => void;
  updateOverlayListCiphers: ({ message }: { message: UpdateOverlayListCiphersMessage }) => void;
  focusOverlayList: () => void;
};

export {
  UpdateOverlayListCiphersMessage,
  InitAutofillOverlayListMessage,
  OverlayListWindowMessageHandlers,
};
