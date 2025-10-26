import { useState } from "react";
import ProfileIcon from "../../../shared/assets/ProfileIcon.svg";
import DeleteCommentModal from "../../../widgets/DeleteCommentModal";
import ReportCommentModal from "../../../widgets/ReportCommentModal";
import { useDeleteConcertComment } from "../model/useDeleteConcertComment";
import { useReportComment } from "../model/useReportComment";
import { toast } from "react-toastify";
import CompleteToast from "../../../shared/ui/CompleteToast";
import ErrorToast from "../../../shared/ui/ErrorToast";

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

  const deleteCommentMutation = useDeleteConcertComment();
  const reportCommentMutation = useReportComment();

  const isMyComment = userId === myUserId;

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
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
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
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="bg-grayScaleBlack100 rounded-24 px-12 py-4 text-grayScaleBlack80 text-Caption1-Bold font-bold font-NotoSansKR"
          >
            {isMyComment ? "삭제" : "신고"}
          </button>
        </div>
        <p className="pt-12 text-grayScaleWhite text-Body2-re font-regular font-NotoSansKR">
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
    </>
  );
}

export default Comment;
