import React from "react";
import CheckGif from "../../../../assets/images/greentick.gif";
import { S } from "./styled";
import Typography from "../../../../components/Typography";
import Button from "../../../../components/Button";
import { ButtonColor } from "../../../../utils/enums";
import { useNavigate } from "react-router-dom";

const NotificationStep: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <S.NotificationStepWrapper>
      <img src={CheckGif} alt="success gif" />
      <Typography.H2>Order successful, order will be delivered to you soon!</Typography.H2>
      <Button
        $colortype={ButtonColor.Primary}
        $width="335px"
        $height="55px"
        onClick={handleGoToHome}
      >
        Go to Home
      </Button>
    </S.NotificationStepWrapper>
  );
};

export default NotificationStep;
