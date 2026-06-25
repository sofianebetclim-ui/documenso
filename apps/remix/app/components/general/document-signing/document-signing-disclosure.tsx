import { cn } from '@documenso/ui/lib/utils';

import { Trans } from '@lingui/react/macro';
import type { HTMLAttributes } from 'react';
import { Link } from 'react-router';

export type DocumentSigningDisclosureProps = HTMLAttributes<HTMLParagraphElement>;

export const DocumentSigningDisclosure = ({ className, ...props }: DocumentSigningDisclosureProps) => {
  return (
    <p className={cn('text-muted-foreground text-xs', className)} {...props}>
      <Trans>
      By proceeding with your electronic signature, you commit with sincerity and good faith that it will be used to sign the document, acknowledging its binding nature. 
      By completing this process, you affirm your responsibility and commitment to fulfill the obligations established by this act, in accordance with the principles of justice and loyalty.
      </Trans>
      <span className="mt-2 block">
        <Trans>
          Read the full{' '}
          <Link className="text-documenso-700 underline" to="/articles/signature-disclosure" target="_blank">
            signature disclosure
          </Link>
          .
        </Trans>
      </span>
    </p>
  );
};
