import { useNavigate } from "react-router-dom";
import EntryAlertCard from "./EntryAlertCard";
import { EntryAlertItem } from "../../features/interest/api/notifications";

interface Props {
  alerts: EntryAlertItem[];
}

function RegisteredConcert({ alerts }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <p className="pt-20 pb-6 text-grayScaleBlack5 text-Body3-sm font-semibold font-NotoSansKR">
        요청한 공연
      </p>

      {alerts.map((item, index) => {
        const isSuccess = item.kind === "REQUEST_REGISTERED";

        return (
          <EntryAlertCard
            key={index}
            success={isSuccess}
            title={item.title}
            description={item.content}
            actionText={isSuccess ? "확인하기" : "재요청"}
            onClick={() => {
              if (isSuccess && item.concertId) {
                navigate(`/concert/${item.concertId}`);
              } else {
                navigate("/request-info");
              }
            }}
          />
        );
      })}
    </>
  );
}

export default RegisteredConcert;
