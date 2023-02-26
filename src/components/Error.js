import icon from "../images/404.png";

function Error() {
  return (
    <div>
      <p className="text-center mb-3">Not found this word. Let's try again.</p>
      <img className="w-96 h-96 mx-auto " src={icon} alt="" />
    </div>
  );
}

export default Error;
