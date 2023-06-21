import React, { useEffect, useRef } from 'react'

type Props = {}

const TextEditor = (props: Props) => {
    const editor = useRef(null);

    useEffect(() => {
        new Window.RichTextEditor(editor.current);
    })

    return (
        <div>
            <div ref={editor}></div>
        </div>
    )
}

export default TextEditor;