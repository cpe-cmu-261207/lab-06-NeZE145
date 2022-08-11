import React, { userstate } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

const usercarddetail = (prop) => {
  <div className="text-center">
    <p>
      <IconMailForward /> {prop.email}
    </p>
    <p>
      <IconMapPins /> {prop.address}
    </p>
  </div>;
};

export default usercarddetail;
