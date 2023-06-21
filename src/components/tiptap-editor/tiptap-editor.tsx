import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './menu';

type Props = {
	setEditor: (val: string) => void,
	error: string,
	label: string
}

const TiptapEditor = ({ setEditor, error, label }: Props) => {
	const editor = useEditor({
	    extensions: [
	      StarterKit,
	      Highlight,
	      TaskList,
	      TaskItem,
	      Underline
	    ],
	    editorProps: {
	    	attributes: {
	    		class: "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none"
	    	}
	    },
	    content: '<p>Hello World! 🌎️</p>',
	    onUpdate: ({ editor }) => {
	    	const html = editor.getHTML();
	    	setEditor(html);
	    }
	});

	return (
		<div className='form-group relative flex flex-col gap-y-3 sm:gap-y-2' role="group">
			{label && <label className={`font-noto_sans ${error ? "text-red-600" : "text-gray-900/80"} dark:text-gray-300 text-[.95rem] mds:text-[1.03rem] sm:text-[.83rem] leading-4 pointer-events-none`} htmlFor='input'>
		          {label}
		          <sup className="font-medium text-red-500 ml-1 text-[.64rem] sm:text-[.8rem]">*</sup>
		      </label>}

			<div className={`text-editor border ${error ? "border-red-400 dark:border-red-400/80" : "border-gray-300"} rounded-[5px]`}>
				{/*<MenuBar editor={editor} />*/}
				<EditorContent editor={editor} />
			</div>

			{error && <p className="text-[1.02rem] sm:text-sm text-red-600 dark:text-red-400 -mt-1 font-light">{error}</p>}
		</div>
	)
}

export default TiptapEditor;



// import useAuth from '@/hooks/useAuth';
// import '@/styles/globals.css';

// import { TiptapCollabProvider } from '@hocuspocus/provider'
// import CharacterCount from '@tiptap/extension-character-count'
// import Collaboration from '@tiptap/extension-collaboration'
// import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
// import Highlight from '@tiptap/extension-highlight'
// import TaskItem from '@tiptap/extension-task-item'
// import TaskList from '@tiptap/extension-task-list'
// import { EditorContent, useEditor } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import React, {
//   useCallback, useEffect,
//   useState,
// } from 'react'
// import * as Y from 'yjs'
// import MenuBar from './MenuBar'

// const TiptapEditor = () => {
//   const [status, setStatus] = useState('connecting');
//   const { user } = useAuth();
//   let websocketProvider = null,
//   	  ydoc = null;

//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure({
//         history: false,
//       }),
      // Highlight,
      // TaskList,
      // TaskItem,
//       CharacterCount.configure({
//         limit: 10000,
//       }),
//       Collaboration.configure({
//         document: ydoc,
//       }),
//       CollaborationCursor.configure({
//         provider: websocketProvider,
//       }),
//     ],
//   })

//   useEffect(() => {
//   	ydoc = new Y.Doc();

//   	websocketProvider = new TiptapCollabProvider({
// 	  appId: '7j9y6m10',
// 	  name: user?.name,
// 	  document: ydoc,
// 	})
//   }, [user]);ss

//   useEffect(() => {
//     // Update status changes
//     websocketProvider.on('status', event => {
//       setStatus(event.status)
//     })
//   }, [])

//   return (
//     <div className="editor">
//       {editor && <MenuBar editor={editor} />}
//       <EditorContent className="editor__content" editor={editor} />
//       <div className="editor__footer">
//           <div className={`editor__status editor__status--${status}`}>
//           <div className="editor__name">
//             <button>{user?.name ?? "User 1"}</button>
//           </div>
//         </div>
//     </div>
//   )
// }