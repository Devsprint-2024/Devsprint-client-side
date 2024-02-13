import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ExtendedLogo = () => {
  const navigate = useNavigate();
  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <img
      className="w-[86px] h-[34px] relative overflow-hidden shrink-0 object-contain hover:cursor-pointer"
      loading="eager"
      alt=""
      src="/extended-logo.png"
      onClick={onLogoClick}
    />
  );
};

export default ExtendedLogo;