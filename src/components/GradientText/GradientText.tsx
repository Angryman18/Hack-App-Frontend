import "./style.scss";

function GradientText({ text }: { text: string }) {
  return (
    <div className="my-3">
      <h1 className='large-gradient-text'>{text}</h1>
    </div>
  );
}

export default GradientText;
