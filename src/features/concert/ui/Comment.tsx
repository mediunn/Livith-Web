import { useState } from "react";
import ProfileIcon from "../../../shared/assets/ProfileIcon.svg";
import { useDeleteConcertComment } from "../model/useDeleteConcertComment";
import { useReportComment } from "../model/useReportComment";
import { toast } from "react-toastify";
import CompleteToast from "../../../shared/ui/CompleteToast";
import ErrorToast from "../../../shared/ui/ErrorToast";
import { useRecoilState } from "recoil";
import { userState } from "../../../shared/lib/recoil/atoms/userState";
import LoginModal from "../../auth/ui/LoginModal";
import DangerModal from "../../../shared/ui/DangerModal/DangerModal";
import { useReportReason } from "../model/useReportReason";

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
  const [isSubmitting, setIsSubmitting] = useState(false); // 등록 버튼 중복 클릭 방지

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const deleteCommentMutation = useDeleteConcertComment();
  const reportCommentMutation = useReportComment();

  const isMyComment = userId === myUserId;
  const [user] = useRecoilState(userState);

  const handleDelete = async () => {
    if (!navigator.onLine) {
      toast(<ErrorToast message="댓글 삭제에 실패했어요" />, {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

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
    } finally {
      setIsSubmitting(false); // 요청 완료 후 버튼 다시 활성화
    }
  };

  const reportReason = useReportReason();

  const handleReport = async (reason: string) => {
    if (!navigator.onLine) {
      toast(<ErrorToast message="다시 시도해 주세요" />, {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

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
      reportReason.reset();
    } catch (error) {
      toast(<ErrorToast message="다시 시도해 주세요" />, {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    } finally {
      setIsSubmitting(false);
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
        <DangerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="댓글을 삭제하시겠어요?"
          primaryLabel="지금은 삭제할래요"
          secondaryLabel="잘못 눌렀어요"
          onPrimary={handleDelete}
        />
      ) : (
        <DangerModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            reportReason.reset();
          }}
          title="댓글을 신고하시겠어요?"
          primaryLabel="신고할래요"
          secondaryLabel="잘못 눌렀어요"
          onPrimary={() => handleReport(reportReason.value)}
          primaryDisabled={!reportReason.isActive}
        >
          <div className="relative mx-16 mt-20">
            <textarea
              ref={reportReason.textareaRef}
              value={reportReason.value}
              onChange={reportReason.handleChange}
              placeholder="신고 사유를 작성해 주세요"
              className="h-172 w-full px-14 pt-14 pb-30 resize-none rounded-6 bg-grayScaleBlack5 text-grayScaleBlack80 text-Body3-md font-medium font-NotoSansKR
                  placeholder:text-grayScaleBlack50
                  border border-transparent
                  focus:border focus:border-grayScaleBlack30
                  outline-none"
            />

            {/* 그라데이션 */}
            {reportReason.isScrollable && reportReason.showTopGradient && (
              <div className="pointer-events-none absolute top-0 left-0 h-30 w-[94%] bg-gradient-to-b from-grayScaleBlack5 to-transparent rounded-t-6" />
            )}
            {reportReason.isScrollable && reportReason.showBottomGradient && (
              <div className="pointer-events-none absolute bottom-30 left-0 h-30 w-[94%] bg-gradient-to-t from-grayScaleBlack5 to-transparent rounded-b-6" />
            )}

            <div className="absolute bottom-5 left-1 h-30 w-[94%] rounded-6 bg-grayScaleBlack5">
              <p className="absolute bottom-14 right-0 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
                {reportReason.value.length}/200
              </p>
            </div>
          </div>
        </DangerModal>
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
