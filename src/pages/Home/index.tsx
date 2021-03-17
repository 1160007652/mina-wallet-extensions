import React, { useState } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import * as MinaSDK from '@o1labs/client-sdk';

import './index.less';

function Home() {
  const { t } = useTranslation();
  const [keyPairs, setKeyPairs] = useState<MinaSDK.keypair[]>([]);

  async function handleCreateKeypair() {
    let keys = MinaSDK.genKeys();
    // MinaSDK.derivePublicKey()  根据私钥 获取公钥

    // MinaSDK.genKeys() 创建 密钥对

    // MinaSDK.signMessage() 签名消息

    /**
     * MinaSDK.signPayment()
     *
     * 描述付款的对象
     * 使用私钥签署付款交易。
     * 这种类型的交易允许用户通过网络将资金从一个帐户转移到另一个帐户。
     */

    /**
     * MinaSDK.signStakeDelegation()
     *
     * 使用私钥签署股权委托交易。
     * 这种类型的交易允许用户将他们的资金从一个帐户委派到另一个帐户，以进行放样。 然后，在确定是否可以在给定的槽位中产生一个区块时，将委托给该帐户的资金视为具有这些资金。
     */

    /**
     * MinaSDK.unsafeSignAny()
     *
     * 使用私钥对任意可签名的有效载荷进行签名。
     * 这被标记为不安全，因为它会对传入的有效负载执行临时检查，以确定要使用的签名策略。
     */

    /**
     * MinaSDK.verifyKeypair()
     *
     * 通过检查公钥是否可以从私钥派生，并另外检查我们是否可以使用私钥签署交易来验证密钥对是否有效。 如果密钥对无效，则引发异常。
     */

    /**
     * MinaSDK.verifyMessage()
     *
     * 验证签名是否与消息匹配。
     */

    /**
     * MinaSDK.verifyPaymentSignature()
     *
     * 验证已签名的付款。
     */

    /**
     * MinaSDK.verifyStakeDelegationSignature()
     *
     * 验证已签署的股份委托。
     */

    setKeyPairs((state) => {
      return state.concat(keys);
    });

    console.log(`Public key: ${keys.publicKey}`);
    console.log(`Private key: ${keys.privateKey}`);

    console.log(keys);
  }

  return (
    <div className="home">
      <Button onClick={handleCreateKeypair}>生成钱包</Button>

      {keyPairs.length > 0 &&
        keyPairs.map((item) => {
          return (
            <ul
              key={item.publicKey}
              style={{ borderBottom: '1px dashed #eee', width: '100%', padding: '10px 0', margin: '0' }}
            >
              <li>publicKey: {item.publicKey}</li>
              <li>privateKey: {item.privateKey}</li>
            </ul>
          );
        })}
    </div>
  );
}
export default Home;
