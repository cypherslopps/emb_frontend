import React, { memo, useRef, useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import EditorConfig from './configuration';

type Props = {
    data?: OutputData,
    onChange(val: OutputData): void,
    holder: string,
    label: string,
    error: string,
}

const TextEditor = ({ data, onChange, holder, label, error }: Props) => {
    const editorRef = useRef<EditorJS>();
    console.log(data);

    useEffect(() => {
        // Initialize editor if there is no reference
        if(!editorRef.current) {
            const editorJS = new EditorJS({
                holder: holder,
                autofocus: true,
                tools: EditorConfig,
                data,
                async onChange(api) {
                    const data = await api.saver.save();
                    onChange(data);
                },
                onReady() {
                  console.log('Editor.js is ready to work!')
               },
               validate(savedData) {
                console.log(savedData, "validated content")
                if (savedData.text.trim() === "") {
                   return false;
                }

                return true;
              }
            });

            editorRef.current = editorJS;
            console.log(editorRef, "editor ref")
            // Cleanup
            return () => {
                if(editorRef.current && editorRef.current.destroy)
                    editorRef.current.destroy();
            }
        }
    }, []);

	// function removeImage(img) {
    //     const array = imageArray.filter(image => image !== img)
    //     setImageArray(array)
    // }

	// const handleInstance = (instance) => {
    //     setEditorInstance(instance)
    // }

    // const saveArticle = async (e) => {
    //     e.preventDefault()

    //     // get the editor.js content and save it to server
    //     const savedData = await editorInstance.save();

    //     const data = {
    //         description: JSON.stringify(savedData),
    //     }

    //     // Clear all the unused images from server
    //     await clearEditorLeftoverImages()

    //   // Save article to server
    //     createArticle(data, files)
    // }

    // This method will get the current images that are used by editor js,
    // and images that stored in imageArray. It will compare and call server request to 
    // remove unused imges
    // const clearEditorLeftoverImages = async () => {
    //     // Get editorJs images
    //     const currentImages = [];
    //     document.querySelectorAll('.image-tool__image-picture')
    //         .forEach((x) => currentImages.push(x.src.includes("/images/") && x.src))

    //     if (imageArray.length > currentImages.length) {
    //         // image deleted
    //         for (const img of imageArray) {
    //             if (!currentImages.includes(img)) {
    //                 try {
    //                     // delete image from backend
    //                     await API.deleteImage({imagePath: img})
    //                     // remove from array
    //                     removeImage(img)
    //                 } catch (err) {
    //                     console.log(err.message)
    //                 }
    //             }
    //         }
    //     }
    // }

	return (
        <div className="group space-y-2" role="group">
            <label 
                className={`font-noto_sans ${error ? "text-red-600" : "text-gray-900/80"} dark:text-gray-300 text-[.83rem] leading-4 pointer-events-none`} 
                htmlFor={holder}
            >
              {label}
                <sup className="font-medium text-red-500 ml-1 text-[.8rem]">*</sup>
            </label>

            <div id={holder} className={`cdx-input prose max-w-full border ${error ? "border-red-400" : "border-gray-500/40"} rounded-md px-4 py-6 rounded-lg`} />

            {/* Error */}
            {error && <p className="text-sm text-red-600 dark:text-red-500 -mt-1 font-light">{error}</p>}
        </div>
    )
}

export default memo(TextEditor);