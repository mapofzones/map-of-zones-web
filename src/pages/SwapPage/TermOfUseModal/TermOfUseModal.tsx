import { useEffect, useState } from 'react';

import { Button } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { Modal } from 'components/ui/Modal/Modal';
import { ElementSize } from 'types/ElementSize';

import styles from './TermOfUseModal.module.scss';

import { TermOfUseModalProps } from '.';

export function TermOfUseModal({ isOpen, onClosed }: TermOfUseModalProps) {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(isOpen);

  useEffect(() => {
    setIsModalOpened(isOpen);
  }, [isOpen]);

  const onClose = () => {
    setIsModalOpened(false);
    onClosed();
  };

  return (
    <Modal className={styles.modal} isOpen={isModalOpened} onClose={onClose}>
      <div className={styles.title}>Terms of Use</div>
      <p>
        {`All goods or services provided through the mapofzones.com (the "website") are
        provided on an "as is", "as available" basis. The Website is constantly under active
        development, and it is currently undergoing its "beta" testing phase, meaning that while the
        core features of the Website have been implemented, undetected bugs, errors, and
        vulnerabilities may remain undiscovered until this phase of testing is complete.`}
      </p>
      <p>
        {`The Website may now or in the future contain undetected errors, bugs, or vulnerabilities. It is possible
        that Ztake.org (the "Company") will not detect errors in the Website or the underlying
        technology until after code has been fully released for external or internal use. Any
        errors, bugs, vulnerabilities, or other design defects discovered in the Website’s code
        after release may result in a negative experience for the Website’s users.`}
      </p>
      <p>
        {`Users are responsible for knowing their private key address and keeping such address a secret. Because
        a private key, or a combination of private keys, is necessary to control and dispose of the
        digital assets stored in the user’s digital asset wallet, the loss of one or more of a
        user’s private keys associated with her, his or its digital asset wallet storing the user’s
        digital assets will result in the loss of the user’s digital assets. Moreover, any third
        party that gains access to one or more of a user’s private keys, including by gaining access
        to login credentials of a hosted wallet service a user uses, may be able to misappropriate a
        user’s digital assets. The Company and its affiliates will never ask a user for her, his or
        its private key address and a user should never share them with someone the user does not
        know and trust.`}
      </p>
      <p>
        {`Transactions in digital assets performed via the Website may be
        irreversible, and, accordingly, losses due to fraudulent or accidental transactions may not
        be recoverable. Once a transaction has been verified and recorded in a block that is added
        to the blockchain, an incorrect transfer or a theft of digital assets generally will not be
        reversible. If a party is able to hack a user’s account and initiate a transaction, the user
        may not be capable of receiving compensation for any such transfer or theft. If there is an
        error and a transaction occurs with the wrong account, to the extent that the Company is
        unable to seek a corrective transaction with such third party or is incapable of identifying
        the third party which has received the digital assets transferred through error or theft,
        the Company will not be able to revert or otherwise recover incorrectly transferred digital
        assets. The user is solely responsible for providing the Website with accurate information
        with respect to the destination digital asset wallet intended for the receipt of the user’s
        digital assets. If information provided by a user proves incorrect, and as a result, the
        digital assets are not delivered to the intended destination digital asset wallet, the
        Website will not have any liability to the user for the loss of such digital assets suffered
        by the user.`}
      </p>
      <p>
        {`THE USER’S USE OF THE WEBSITE AND ANY RELATED SERVICES IS AT THE USER’S SOLE
        RISK. THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST EXTENT
        LEGALLY PERMISSIBLE, THE COMPANY DOES NOT MAKE (AND EXPLICITLY DISCLAIMS) ANY AND ALL
        REPRESENTATIONS OR WARRANTIES OF ANY KIND RELATED TO THE WEBSITE, WHETHER EXPRESS, IMPLIED,
        OR STATUTORY, INCLUDING (WITHOUT LIMITATION) THE WARRANTIES OF MERCHANTABILITY, NON-
        INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE. THE COMPANY DOES NOT (NOR ANY PERSON
        ASSOCIATED WITH THE ENTITY) MAKE ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE
        COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE OR
        ANY RELATED SERVICES. TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY,
        OR ANY AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR
        DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
        CONNECTION WITH THE USER'S USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT,
        ANY CONTENT ON THE COMPANY’S WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT,
        SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO,
        PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS,
        LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND
        WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF
        FORESEEABLE. THIS DISCLAIMER OF LIABILITY EXTENDS TO ANY AND ALL DAMAGES CAUSED BY ANY THIRD
        PARTY (INCLUDING, WITHOUT LIMITATION, THOSE CAUSED BY FRAUD, DECEIPT, OR MANIPULATION),
        WHETHER OR NOT A PARTICIPANT, OR ANY FAILURE, EXPLOIT, OR VULNERABILITY OF THE WEBSITE, THE
        USER’S WEB3 UTILITIES, OR THE UNDERLYING BLOCKCHAINS OR RELATED BLOCKCHAIN FUNCTIONALITIES.
        TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COLLECTIVE LIABILITY OF THE
        COMPANY, ITS SUBSIDIARIES AND AFFILIATES, AND THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES,
        AGENTS, OFFICERS, AND DIRECTORS, TO ANY PARTY (REGARDLESS OF THE FORM OF ACTION, WHETHER IN
        CONTRACT, TORT, OR OTHERWISE) EXCEED THE GREATER OF $100 OR THE AMOUNT THE USER HAS PAID
        DIRECTLY TO THE COMPANY FOR THE USE OF THE WEBSITE IN THE LAST SIXMONTHS OUT OF WHICH
        LIABILITY AROSE. THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR
        LIMITED UNDER APPLICABLE LAW.`}
      </p>
      <Button
        className={styles.closeButton}
        size={ElementSize.LARGE}
        buttonType={ButtonType.PRIMARY}
        onClick={onClose}
      >
        Close
      </Button>
    </Modal>
  );
}
