// HotelImageUploader.tsx
import { useState } from 'react';

interface Props {
  onUploadComplete: (urls: string[]) => void;
}

const HotelImageUploader: React.FC<Props> = ({ onUploadComplete }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const uploadToCloudinary = async () => {
    setUploading(true);
    const urls: string[] = [];

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      urls.push(data.secure_url);
    }

    onUploadComplete(urls);
    setUploading(false);
  };

  return (
    <div className="space-y-3">
      <input type="file" multiple accept="image/*" onChange={handleFileChange} />
      <button
        type="button"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        disabled={uploading || selectedFiles.length === 0}
        onClick={uploadToCloudinary}
      >
        {uploading ? 'Uploading...' : 'Upload to Cloudinary'}
      </button>
    </div>
  );
};

export default HotelImageUploader;
