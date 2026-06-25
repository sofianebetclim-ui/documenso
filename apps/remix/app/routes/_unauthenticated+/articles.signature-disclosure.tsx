import { SUPPORT_EMAIL } from '@documenso/lib/constants/app';
import { Button } from '@documenso/ui/primitives/button';
import { Trans } from '@lingui/react/macro';
import { Link } from 'react-router';

export default function SignatureDisclosure() {
  return (
    <div>
      <article className="prose dark:prose-invert">
  <h1>
    <Trans>Electronic Signature Disclosure</Trans>
  </h1>

  <h2>
    <Trans>Welcome</Trans>
  </h2>
  <p>
    <Trans>
      Thank you for using Documenso. By choosing to use this platform, you commit with sincerity and good faith 
      to honor the terms and conditions outlined below, acknowledging the binding nature of your signature.
    </Trans>
  </p>

  <h2>
    <Trans>Acceptance and Consent</Trans>
  </h2>
  <p>
    <Trans>
      By using our platform, you affirm your responsibility and commitment to fulfill the obligations 
      established by your actions, in accordance with the principles of justice and loyalty.
    </Trans>
  </p>

  <h2>
    <Trans>Legality of Electronic Signatures</Trans>
  </h2>
  <p>
    <Trans>
      Your electronic signature is a formal and binding commitment, carrying the same weight and 
      enforceability as a manual signature, grounded in honesty and mutual respect.
    </Trans>
  </p>

  <h2>
    <Trans>System Requirements</Trans>
  </h2>
  <p>
    <Trans>To use our service, you must have access to:</Trans>
  </p>
  <ul>
    <li><Trans>A stable internet connection</Trans></li>
    <li><Trans>An email account</Trans></li>
    <li><Trans>A device capable of reading documents</Trans></li>
    <li><Trans>A means to save documents for your records</Trans></li>
  </ul>

  <h2>
    <Trans>Electronic Delivery</Trans>
  </h2>
  <p>
    <Trans>
      Documents will be provided electronically. It is your responsibility to ensure your contact 
      information is accurate to maintain the transparency of our dealings.
    </Trans>
  </p>

  <h2>
    <Trans>Withdrawing Consent</Trans>
  </h2>
  <p>
    <Trans>
      You may withdraw your consent at any time. Please contact the document sender or 
      <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> for assistance.
    </Trans>
  </p>

  <h2>
    <Trans>Retention</Trans>
  </h2>
  <p>
    <Trans>
      We recommend that you retain a copy of all signed documents for your personal records, 
      upholding the principle of accountability.
    </Trans>
  </p>

  <h2>
    <Trans>Acknowledgment</Trans>
  </h2>
  <p>
    <Trans>
      By proceeding, you affirm that you have read and understood this disclosure, agreeing 
      to act with integrity in all electronic transactions.
    </Trans>
  </p>

  <h2>
    <Trans>Contact Information</Trans>
  </h2>
  <p>
    <Trans>
      For any questions, please contact us at: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
    </Trans>
  </p>
</article>

      <div className="mt-8">
        <Button asChild>
          <Link to="/">
            <Trans>Back home</Trans>
          </Link>
        </Button>
      </div>
    </div>
  );
}
