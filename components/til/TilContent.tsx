import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** רנדור Markdown בסגנון האתר — בלוקי קוד תמיד LTR. */
export default function TilContent({ children }: { children: string }) {
  return (
    <div
      className="space-y-4 leading-relaxed text-body/90
        [&_a]:text-accent [&_a]:underline
        [&_code]:rounded-md [&_code]:bg-ink [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.85em] [&_code]:text-accent
        [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-line [&_pre]:bg-ink [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:[direction:ltr] [&_pre]:[text-align:left]
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-body/90
        [&_strong]:text-body
        [&_ul]:list-disc [&_ul]:ps-5 [&_ol]:list-decimal [&_ol]:ps-5"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
