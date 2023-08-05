export default function ImagePopup({ imgDetails, setOpenImagePopup }) {
  const {src, caption} = imgDetails;

  return (
    <div className="image-popup top-0 left-0 w-100 h-100 bg-darker position-fixed d-flex align-items-center justify-content-center">
      <div>
        <div className="d-flex align-items-start">
          <img src={src} alt="sdfs" width={400} />
          <button
            onClick={() => setOpenImagePopup((previous) => (previous = ""))}
          ></button>
        </div>
        <p className="text-light">{caption}</p>
      </div>
    </div>
  );
}
