import { FilePond, registerPlugin } from "react-filepond";
import { FilePondFile } from "filepond";
import { useState, useEffect } from "react";
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
import { useAvatar } from "@/hooks/use-avatar-and-username";

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

type FilePondInitialFile = {
  source: string | File;
  options?: {
    type: "local" | "limbo" | "remote";
  };
};

export default function ProfilePictureChanger({
  onFileChange,
  ...props
}: {
  onFileChange: (file: FilePondFile | null) => void;
}) {
  const { avatar } = useAvatar();
  // default file: pakai format "initial file", bukan FilePondFile
  const [file, setFile] = useState<(FilePondFile | FilePondInitialFile)[]>([
    {
      source: avatar,
      options: { type: "local" },
    },
  ]);

  useEffect(() => {
    if (avatar) {
      setFile([
        {
          source: avatar,
          options: { type: "local" },
        },
      ]);
    }
  }, [avatar]);

  return (
    <div className="max-w-[100px]">
      <FilePond
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        files={file as any}
        onupdatefiles={(items) => {
          setFile(items);
          if (items.length > 0) {
            onFileChange(items[0]);
          } else {
            onFileChange(null);
          }
        }}
        allowMultiple={false}
  
        maxFiles={1}
        allowImageEdit={true}
        name="filepond"
        labelIdle='<img src="/assets/images/pencil-edit.svg" class="filepond--label-action"/>'
        imagePreviewHeight={170}
        imageCropAspectRatio="1:1"
        imageResizeTargetWidth={300}
        imageResizeTargetHeight={300}
        allowFileEncode
        stylePanelLayout="compact circle"
        styleLoadIndicatorPosition="center bottom"
        styleButtonRemoveItemPosition="center bottom"
        imageEditEditor={openEditor}
        imageEditInstantEdit={false}
        acceptedFileTypes={["image/*"]}
        className="rounded-full"
        {...props}
      />
    </div>
  );
}
