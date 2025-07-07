import React from 'react';

function ImageUpload({ onImageSelect }) {
    const [imagePreview, setImagePreview] = React.useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file)); // exibe preview
            onImageSelect(file); // envia o arquivo pro componente pai
        }
    };

    return (
        <div className='flex flex-wrap border rounded'>
            <label htmlFor="image-upload-input" className="custom-file-upload cursor-pointer">
                {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className='max-h-98' />
                ) : (
                    'Selecionar Imagem'
                )}
            </label>
            <input
                id="image-upload-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='hidden'
            />
        </div>
    );
}

export default ImageUpload;
