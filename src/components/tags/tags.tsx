import React from 'react';
import TagItem from '../tag-item/tag-item';

type Props = {
    tags: Array<string>
}

const Tags = ({ tags }: Props) => {
  return (
    <ul className="flex gap-x-1.5">
        {tags.map((tag, i) => (
          <TagItem key={tag} index={i} tag={tag} />
        ))}
    </ul>
  )
}

export default Tags;