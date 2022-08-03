import React, { useState, useEffect } from 'react';

function LoginButton() {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [ethereumAccount, setEthereumAccount] = useState<string>('');

  useEffect(() => {
    if ((window as any).ethereum) {
      setIsMetamaskInstalled(true);
    }
  }, []);

  async function connectMetamaskWallet(): Promise<void> {
    (window as any).ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then((accounts : string[]) => {
        setEthereumAccount(accounts[0]);
      });
  }

  if (!ethereumAccount) {
    return (
      <div>
        {
                    isMetamaskInstalled ? (
                      <div>
                        <button type="button" onClick={connectMetamaskWallet} className="login-button-style">Log In</button>
                      </div>
                    ) : (
                      <p>Install Your Metamask wallet</p>
                    )
                }

      </div>
    );
  }

  return (
    <div>
      <p className="login-button-style">
        ETH wallet connected as:
        {' '}
        {ethereumAccount}
      </p>
    </div>
  );
}

export default LoginButton;
