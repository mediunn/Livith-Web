import { useEffect } from "react";
import Comment from "../../concert/ui/Comment";
import { useInView } from "react-intersection-observer";

interface CommentTabPanelProps {
  comments: {
    id: number;
    userId: number;
    nickname: string;
    content: string;
    createdAt: string;
  }[];
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  myUserId: number;
  accessToken: string;
}

function CommentTabPanel({
  comments,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  myUserId,
  accessToken,
}: CommentTabPanelProps) {
  const { ref } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage && fetchNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <div className="px-16 py-20 flex flex-col gap-16">
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment
              id={comment.id}
              userId={comment.userId}
              nickname={comment.nickname}
              content={comment.content}
              myUserId={myUserId}
              accessToken={accessToken}
            />
          </div>
        );
      })}
      {hasNextPage && <div ref={ref} className="h-10" />}
    </div>
  );
}

export default CommentTabPanel;
