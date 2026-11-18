import katex from 'katex';
import React from 'react';

interface KaTeXBlockProps {
  latex: string;
  className?: string;
}

export const KaTeXBlock: React.FC<KaTeXBlockProps> = ({ latex, className = '' }) => {
  const html = React.useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode: true,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return latex;
    }
  }, [latex]);

  return (
    <div
      className={`overflow-x-auto py-1 text-slate-900 dark:text-slate-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface RichMathTextProps {
  text: string;
  className?: string;
}

function renderInlineLatex(expr: string, key: number): React.ReactNode {
  try {
    const html = katex.renderToString(expr, {
      displayMode: false,
      throwOnError: false,
      strict: false,
    });
    return (
      <span
        key={key}
        className="inline-block align-baseline px-0.5 text-slate-950 dark:text-slate-50"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return <code key={key}>{expr}</code>;
  }
}

function renderMathAndPlain(segment: string, keyPrefix: string): React.ReactNode[] {
  const tokens = segment.split(/(\$[^$]+\$)/g);
  return tokens.map((tok, index) => {
    if (tok.startsWith('$') && tok.endsWith('$') && tok.length > 2) {
      return renderInlineLatex(tok.slice(1, -1), index);
    }
    return <React.Fragment key={`${keyPrefix}-t-${index}`}>{tok}</React.Fragment>;
  });
}

export const RichMathText: React.FC<RichMathTextProps> = ({ text, className = '' }) => {
  const boldParts = React.useMemo(() => text.split(/(\*\*[^*]+\*\*)/g), [text]);

  return (
    <span className={className}>
      {boldParts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          return (
            <strong key={`b-${idx}`} className="font-semibold text-slate-950 dark:text-white">
              {renderMathAndPlain(part.slice(2, -2), `b-${idx}`)}
            </strong>
          );
        }
        return (
          <React.Fragment key={`seg-${idx}`}>
            {renderMathAndPlain(part, `s-${idx}`)}
          </React.Fragment>
        );
      })}
    </span>
  );
};
