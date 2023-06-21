import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { FilePond, File, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPiuginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import useAuth from '@/hooks/useAuth';

// Styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginFileValidateType, FilePondPiuginImageExifOrientation, FilePondPluginImagePreview );

type Props = {
    name: string,
    label: "Images",
    file: File[],
    setFile: (val: any) => void,
    error?: string,
    acceptedFileTypes?: String[]
}

const Filepond = ({ name, label, file, setFile, error, data, acceptedFileTypes }: Props) => {
    const [csrfToken, setCsrfToken] = useState<string>("");

    useEffect(() => {
        const token = Cookies.get('XSRF-TOKEN');

        // Set token
        setCsrfToken(token); 
    }, [csrfToken])

    // const serverOptions = {
    //     process: 'http://localhost/main/public/posts/tmp-upload',
    //     revert: 'http://localhost/main/public/posts/tmp-delete',
    //     headers: {
    //         'X-CSRF-TOKEN': csrf
    //     },
    //     method: "POST",
    //     onload(res) {
    //         console.log(response);
    //     }
    // };
    // 
    function handleFilePondLoad(response) {
        setFile(response);
        console.log(file, response, "update")

        return response;
    }

    function handleFilePondRevert(uniqueId, load, error) {
        console.log(uniqueId, file);
    }

    return (
        <div className="group" role="group" className="space-y-2">
            {label && (<label 
                className={`font-noto_sans ${error ? "text-red-600" : "text-gray-900/80"} dark:text-gray-300 text-[.83rem] leading-4 pointer-events-none`} 
                htmlFor={name}
            >
              {label}
                <sup className="font-medium text-red-500 ml-1 text-[.8rem]">*</sup>
            </label>)}

            <FilePond 
                allowMultiple={false}
                files={file}
                name={name}
                id={name}
                server={{
                    url: '',
                    process: {
                        url: `${process.env.NEXT_PUBLIC_BACKEND_API}/posts/tmp-upload`,
                        method: 'POST',
                        onload: handleFilePondLoad
                    },
                    revert: handleFilePondRevert,
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                    }
                }}
                onupdatefiles={(files) => {
                    console.log(files, file, "filepond files");
                    setFile(files.map(file => file.file))
                }}
                labelIdle={`Drag & Drop your ${label} or <span class="filepond--label-action">Browse</span>`}
                className={`${error ? "error" : ""}`}
                labelFileTypeNotAllowed="File of invalid type"
            />

            {/* Error */}
            {error && <p className="text-sm text-red-600 dark:text-red-500 -mt-1 font-light">{error}</p>}
        </div>
    )
}

export default Filepond;