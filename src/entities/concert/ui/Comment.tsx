import { useState } from "react";
import ProfileIcon from "../../../shared/assets/ProfileIcon.svg";
import DeleteCommentModal from "../../../widgets/DeleteCommentModal";

function Comment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="px-16 py-21 bg-grayScaleBlack90 rounded-6">
        <div className="flex justify-between items-end items-center">
          <div className="flex items-center">
            <img src={ProfileIcon} className="w-32 h-32" />
            <p className="pl-8 text-grayScaleBlack30 text-Body3-sm font-semibold font-NotoSansKR">
              닉네임
            </p>
          </div>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="bg-grayScaleBlack100 rounded-24 px-12 py-4 text-grayScaleBlack80 text-Caption1-Bold font-bold font-NotoSansKR"
          >
            삭제
          </button>
        </div>
        <p className="pt-12 text-grayScaleWhite text-Body2-re font-regular font-NotoSansKR">
          댓글내용임ㅇㅇ댓글내용임ㅇㅇ댓글내용임ㅇㅇ댓글내용임ㅇㅇ댓글내용임ㅇㅇ댓글내용임ㅇㅇ
        </p>
      </div>
      <DeleteCommentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Comment;
