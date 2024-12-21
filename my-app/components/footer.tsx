import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-middle">
            Built by Alex Rendler. The source code is available on {" "}
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
        </div>
        <div className="flex space-x-4">
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