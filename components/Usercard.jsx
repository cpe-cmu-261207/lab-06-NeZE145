import React, { userstate, useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import usercarddetail from "./Usercarddetail";

const Usercard = (prop) => {
  const [click, setclick] = useState(false);
  return (
    <div
      className="border-bottom"
      onClick={() => {
        click ? setclick(false) : setclick(true);
      }}
    >
      <div className="d-flex align-items-center p-3">
        <img src={prop.imgUrl} width="90px" class="rounded-circle me-4" />

        <span className="text-center display-6 me-auto">{prop.name}</span>
        <IconChevronDown />
      </div>
      {click ? (
        <usercarddetail email={prop.email} address={prop.address} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Usercard;
