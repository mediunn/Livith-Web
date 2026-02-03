import ListHeader from "../shared/ui/ListHeader";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AgreeSheet from "../features/auth/ui/AgreeSheet";

function AlarmSettingPage() {
  const [benefitAlarmOn, setBenefitAlarmOn] = useState(false);
  const [isAgreeSheetOpen, setIsAgreeSheetOpen] = useState(false);

  const handleBenefitToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextChecked = event.target.checked;

    if (nextChecked) {
      // ON 하려는 경우 → 약관 시트 먼저
      setIsAgreeSheetOpen(true);
    } else {
      // OFF는 바로 꺼도 됨
      setBenefitAlarmOn(false);
    }
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 58,
    height: 32,
    padding: 0,
    display: "flex",

    "& .MuiSwitch-switchBase": {
      padding: 4,
      transition: theme.transitions.create(["transform"], {
        duration: 200,
      }),

      "&.Mui-checked": {
        transform: "translateX(26px)",

        "& + .MuiSwitch-track": {
          backgroundColor: "#FFFF97", // mainYellow30
          opacity: 1,
        },

        "& .MuiSwitch-thumb": {
          backgroundColor: "#FFFFFF", // grayScaleWhite
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
        },
      },
    },

    "& .MuiSwitch-thumb": {
      width: 24,
      height: 24,
      borderRadius: "50%",
      boxShadow: "none",
      backgroundColor: "#808794", // grayScaleBlack50 (OFF 버튼색)
    },

    "& .MuiSwitch-track": {
      borderRadius: 16,
      opacity: 1,
      backgroundColor: "#222831", // grayScaleBlack90 (OFF 바탕)
      boxSizing: "border-box",
    },
  }));

  return (
    <div className="pb-90">
      <ListHeader title={"알림 설정"} />

      <div className="mx-16 mt-20">
        <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          혜택 및 이벤트 알림
        </p>
        <p className="mt-10 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
          혜택 등 이벤트 알림을 보내드려요
        </p>
        <div className="mt-20 flex justify-between items-center">
          <p className="text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            유저를 위한 혜택 알림
          </p>
          <FormGroup>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <AntSwitch
                checked={benefitAlarmOn}
                onChange={handleBenefitToggle}
              />
            </Stack>
          </FormGroup>
        </div>
      </div>

      <div className="mx-16 mt-30">
        <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          관심 콘서트 알림
        </p>
        <p className="mt-10 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
          알림 신청한 소식을 가장 먼저 알려드려요
        </p>
        <div className="mt-20 flex justify-between items-center">
          <p className="text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            예매 일정
          </p>
          <FormGroup>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <AntSwitch defaultChecked />
            </Stack>
          </FormGroup>
        </div>
        <div className="mt-14 flex justify-between items-center">
          <p className="text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            콘서트 정보 업데이트
          </p>
          <FormGroup>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <AntSwitch defaultChecked />
            </Stack>
          </FormGroup>
        </div>
        <div className="mt-14 flex justify-between items-center">
          <p className="text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            선호 아티스트의 콘서트 오픈
          </p>
          <FormGroup>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <AntSwitch defaultChecked />
            </Stack>
          </FormGroup>
        </div>
        <div className="mt-14 flex justify-between items-center">
          <p className="text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            취향 기반 콘서트 알림
          </p>
          <FormGroup>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <AntSwitch defaultChecked />
            </Stack>
          </FormGroup>
        </div>
      </div>

      <AgreeSheet
        isSheetOpen={isAgreeSheetOpen}
        onSheetClose={() => setIsAgreeSheetOpen(false)}
        onAgree={() => {
          setBenefitAlarmOn(true); // 여기서 진짜 ON
        }}
      />
    </div>
  );
}

export default AlarmSettingPage;
