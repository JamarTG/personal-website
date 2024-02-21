interface ResumeViewButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const ResumeViewButton = (props: ResumeViewButtonProps) => {
  return (
    <a
      href="/resume.pdf"
      className="resume-download-button"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      View Resume
    </a>
  );
};

export default ResumeViewButton;
