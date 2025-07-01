import * as SC from "./ContactLinksStyled"

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContactLinks: React.FC<Props> = ({ children }) => {
  return <SC.ContactLinksCon>{children}</SC.ContactLinksCon>;
};

export default ContactLinks;
