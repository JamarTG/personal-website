interface ResumeViewButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const ResumeButton = (props: ResumeViewButtonProps) => {
  return (
    <a
      href="/resume.pdf"
      className="resume-download-button"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      style={{textDecoration: "underline"}}
    >
     View Resume
    </a>
  );
};

export default ResumeButton;
