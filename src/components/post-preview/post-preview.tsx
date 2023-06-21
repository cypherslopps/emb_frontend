import React from 'react';
import PostPreviewItem from '../post-preview-item/post-preview-item';
import PostHeading from '../post-heading/post-heading';

type Props = {}

const PostPreview = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
        <PostHeading heading="Related Posts" />

        <div className="list space-y-2">
            <PostPreviewItem />
            <PostPreviewItem />
            <PostPreviewItem />
        </div>
    </div>
  )
}

export default PostPreview;