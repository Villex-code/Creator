import "./confetti.scss";

export default function Cbutton(props) {
  const { name } = props;

  function animateButton(e) {
    console.log("clicked!");
    //reset animation
    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  }

  return (
    <button className="confetti-button" onClick={animateButton}>
      {name}
    </button>
  );
}
