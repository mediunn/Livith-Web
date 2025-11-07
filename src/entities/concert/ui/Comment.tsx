import { useState } from "react";
import ProfileIcon from "../../../shared/assets/ProfileIcon.svg";
import DeleteCommentModal from "../../../widgets/DeleteCommentModal";
import ReportCommentModal from "../../../widgets/ReportCommentModal";
import { useDeleteConcertComment } from "../model/useDeleteConcertComment";
import { useReportComment } from "../model/useReportComment";
import { toast } from "react-toastify";
import CompleteToast from "../../../shared/ui/CompleteToast";
import ErrorToast from "../../../shared/ui/ErrorToast";
import { useRecoilState } from "recoil";
import { userState } from "../../../entities/recoil/atoms/userState";
import LoginModal from "../../../features/auth/ui/LoginModal";

interface CommentProps {
  id: number;
  userId: number;
  nickname: string;
  content: string;
  myUserId: number;
  accessToken: string;
}

function Comment({
  id,
  userId,
  nickname,
  content,
  myUserId,
  accessToken,
}: CommentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const deleteCommentMutation = useDeleteConcertComment();
  const reportCommentMutation = useReportComment();

  const isMyComment = userId === myUserId;
  const [user] = useRecoilState(userState);

  const handleDelete = async () => {
    try {
      await deleteCommentMutation.mutateAsync(id);
      toast(<CompleteToast message="댓글이 삭제되었어요" />, {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
      setIsModalOpen(false);
    } catch (error) {
      toast(<ErrorToast message="댓글 삭제에 실패했어요" />, {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    }
  };

  const handleReport = async (reason: string) => {
    try {
      await reportCommentMutation.mutateAsync({
        id,
        accessToken,
        content: reason || undefined,
      });
      toast(
        <CompleteToast
          message={`신고가 완료되었어요
검토 후 처리까지 약 1-2일 소요될 수 있어요`}
        />,
        {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        }
      );
      setIsModalOpen(false);
    } catch (error) {
      toast(<ErrorToast message="다시 시도해 주세요" />, {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    }
  };

  const handleButtonClick = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="px-16 py-21 bg-grayScaleBlack90 rounded-6">
        <div className="flex justify-between items-end items-center">
          <div className="flex items-center">
            <img src={ProfileIcon} className="w-32 h-32" />
            <p className="pl-8 text-grayScaleBlack30 text-Body3-sm font-semibold font-NotoSansKR">
              {nickname}
            </p>
          </div>
          <button
            onClick={handleButtonClick}
            className={`bg-grayScaleBlack100 rounded-24 px-12 py-4 text-Caption1-Bold font-bold font-NotoSansKR
          ${
            isMyComment
              ? "text-grayScaleBlack5 border border-grayScaleBlack80"
              : "text-grayScaleBlack80"
          }`}
          >
            {isMyComment ? "삭제" : "신고"}
          </button>
        </div>
        <p className="pt-12 text-grayScaleWhite text-Body2-re font-regular font-NotoSansKR break-words whitespace-pre-wrap">
          {content}
        </p>
      </div>
      {isMyComment ? (
        <DeleteCommentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onDelete={handleDelete}
        />
      ) : (
        <ReportCommentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleReport}
        />
      )}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="concertInfo"
      />
    </>
  );
}

export default Comment;
