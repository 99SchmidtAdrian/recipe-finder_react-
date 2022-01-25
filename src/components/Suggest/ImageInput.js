const ImageInput = (props) => {
  return (
    <div className="w-[250px] h-[200px] mx-auto 2xl:w-[350px] 2xl:h-[300px] 2xl:mt-10 md:ml-20 lg:ml-10 xl:ml-20 2xl:ml-40">
      <label htmlFor="selected-image">
        {!props.imageUrl && !props.selectedImage && (
          <div className="h-full w-full border border-gray-400 rounded-xl text-center flex items-center bg-gray-300 justify-center flex-col cursor-pointer">
            <div className="text-2xl">+</div>
            <div className="text-sm">Add image</div>
          </div>
        )}
        {props.imageUrl && !props.selectedImage && (
          <div className="h-full w-full border border-gray-400 rounded-xl text-center flex items-center bg-gray-300 justify-center flex-col cursor-pointer">
            <div className="text-2xl">+</div>
            <div className="text-sm">Add image</div>
          </div>
        )}
        {props.imageUrl && props.selectedImage && (
            <img
              src={props.imageUrl}
              alt="The food"
              className="cursor-pointer object-cover rounded-xl w-full h-full border border-gray-400"
            />
        )}
      </label>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="selected-image"
        onChange={(e) => props.setSelectedImage(e.target.files[0])}
      />
    </div>
  );
};

export default ImageInput;
