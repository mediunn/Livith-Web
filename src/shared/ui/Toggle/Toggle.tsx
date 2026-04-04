import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

interface ToggleProps {
  checked: boolean;
  onChange: SwitchProps["onChange"];
}

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
        backgroundColor: "#FFFF97",
        opacity: 1,
      },

      "& .MuiSwitch-thumb": {
        backgroundColor: "#FFFFFF",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 24,
    height: 24,
    borderRadius: "50%",
    boxShadow: "none",
    backgroundColor: "#808794",
  },

  "& .MuiSwitch-track": {
    borderRadius: 16,
    opacity: 1,
    backgroundColor: "#222831",
    boxSizing: "border-box",
  },
}));

function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <FormGroup>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <AntSwitch checked={checked} onChange={onChange} />
      </Stack>
    </FormGroup>
  );
}

export default Toggle;
