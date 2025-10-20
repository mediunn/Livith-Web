import { useEffect } from "react";
import Comment from "../../concert/ui/Comment";
import { useInView } from "react-intersection-observer";

interface CommentTabPanelProps {
  comments: any[];
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
}

function CommentTabPanel({
  comments,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: CommentTabPanelProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="px-16 py-20 flex flex-col gap-16">
      {comments.map((comment, idx) => {
        const isLast = idx === comments.length - 1;
        return (
          <div key={comment.id} ref={isLast ? ref : undefined}>
            <Comment
              id={comment.id}
              userId={comment.userId}
              nickname={comment.nickname}
              content={comment.content}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CommentTabPanel;
