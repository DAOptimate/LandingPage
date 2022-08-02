import React, { useState, useEffect } from 'react';

function LoginButton() {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

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

  if (ethereumAccount === null) {
    return (
      <div>
        {
            isMetamaskInstalled ? (
              <div>
                <button type="button" onClick={connectMetamaskWallet} className="bg-transparent hover:bg-pink-900 text-pink-600 font-bold py-1 px-4 border border-pink-600 hover:border-transparent">Log In</button>
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
      <p className="bg-transparent text-pink-600 font-bold py-1 px-4 border border-pink-600">
        ETH wallet connected as:
        {' '}
        {ethereumAccount}
      </p>
    </div>
  );
}

export default LoginButton;
