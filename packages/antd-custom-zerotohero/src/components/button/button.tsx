import React from "react";
import { Button, ButtonProps } from "antd";

export interface SwButtonProps extends ButtonProps {

}

function SwButton(props: ButtonProps) {

  return (
    <Button
      type="primary"
      shape="round"
      size="middle"
      {...props}
    />
  )

}

export default SwButton;
