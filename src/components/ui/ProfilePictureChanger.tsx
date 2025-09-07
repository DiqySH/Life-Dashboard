import { FilePond, registerPlugin } from "react-filepond";
import { useCallback, useEffect, useState } from "react";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";
import "@pqina/pintura/pintura.css";

import { openEditor } from "@pqina/pintura";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageEdit,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginFileValidateType,
  FilePondPluginFileEncode
);

const ProfilePictureChanger = () => {
  const [file, setFile] = useState<unknown[] | any[]>([]);  
  const [image, setImage] = useState<string | null>(null)
  const handleClick = () => {
    if (file.length > 0) {
      const base64 = file[0].getFileEncodeBase64String()
      const mimeType = file[0].file.type
      setImage(`data:${mimeType};base64,${base64}`)
    }
  };
  return (
    <div className="max-w-[200px]">
      <FilePond
        files={file}
        onupdatefiles={setFile}
        allowMultiple={false}
        maxFiles={1}
        allowImageEdit={true}
        name="filepond"
        labelIdle='Drag & Drop your picture or <span class="filepond--label-action">Browse</span>'
        imagePreviewHeight={170}
        imageCropAspectRatio="1:1"
        imageResizeTargetWidth={200}
        imageResizeTargetHeight={200}
        allowFileEncode
        stylePanelLayout="compact circle"
        styleLoadIndicatorPosition="center bottom"
        styleButtonRemoveItemPosition="center bottom"
        imageEditEditor={openEditor}
        imageEditInstantEdit={false}
        acceptedFileTypes={["image/*"]}
      />
      <button onClick={handleClick}>cek</button>
      <img src={image as string} alt="" />
    </div>
  );
};

export default ProfilePictureChanger;
