import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t mt-auto w-full">
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 px-6 md:py-4">
        {/* Left-aligned text */}
        <p className="text-sm text-muted-foreground w-full md:w-auto text-center md:text-left">
          Built by Alex Rendler. The source code is available on{" "}
          <Link
            href="https://github.com/alexrendlerCS"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>

        {/* Right-aligned icons */}
        <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0 space-x-4">
          <Link
            href="https://github.com/alexrendlerCS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alex-rendler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="mailto:alexrendler@yahoo.com">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="AlexRendlerResume.pdf"
          >
            <Button variant="outline" size="icon">
              <FileText className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
